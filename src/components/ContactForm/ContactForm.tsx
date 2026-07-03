import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import './ContactForm.css'

const RECAPTCHA_SITE_KEY = '6LdkeCItAAAAABp3AD7ZrZk4PIEBQgrdP40NEuqc'

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void
      execute: (siteKey: string, options: { action: string }) => Promise<string>
    }
  }
}

type FormData = {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

type FormErrors = Partial<Record<keyof FormData, string>>

const initialForm: FormData = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
}

const inquiryOptions = [
  'General Inquiry',
  'Partnership',
  'Volunteer',
  'Programme Information',
  'Media & Press',
]

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {}

  if (!data.name.trim()) {
    errors.name = 'Please enter your full name.'
  }

  if (!data.email.trim()) {
    errors.email = 'Please enter your email address.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email address.'
  }

  if (!data.subject) {
    errors.subject = 'Please select an inquiry type.'
  }

  if (!data.message.trim()) {
    errors.message = 'Please enter your message.'
  } else if (data.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters.'
  }

  return errors
}

function getRecaptchaToken(): Promise<string> {
  return new Promise((resolve, reject) => {
    if (!window.grecaptcha) {
      reject(new Error('reCAPTCHA not loaded'))
      return
    }
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute(RECAPTCHA_SITE_KEY, { action: 'contact_submit' })
        .then(resolve)
        .catch(reject)
    })
  })
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initialForm)
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [consent, setConsent] = useState(false)
  const [consentError, setConsentError] = useState('')

  function updateField(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const validationErrors = validate(form)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    if (!consent) {
      setConsentError('You must agree to our data processing terms before submitting.')
      return
    }

    setConsentError('')
    setStatus('submitting')
    setErrorMessage('')

    try {
      // Get reCAPTCHA v3 token
      const recaptchaToken = await getRecaptchaToken()

      const accessKey = '16bb459b-2b07-423a-b612-576b6b1e51f6'

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: form.name,
          email: form.email,
          phone: form.phone || 'Not provided',
          inquiry_type: form.subject,
          message: form.message,
          subject: `TMF Contact: ${form.subject}`,
          from_name: 'TMF Website',
          'g-recaptcha-response': recaptchaToken,
        }),
      })

      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error('Submission failed')
      }

      setStatus('success')
      setForm(initialForm)
      setErrors({})
      setConsent(false)
    } catch {
      setStatus('error')
      setErrorMessage(
        'We could not send your message right now. Please email us directly at info@thellemogoeranefoundation.org.za or call 061 787 5679.',
      )
    }
  }

  if (status === 'success') {
    return (
      <div className="contact-form contact-form--success">
        <div className="contact-form__success-icon" aria-hidden="true" />
        <h3 className="contact-form__success-title">Message sent successfully</h3>
        <p className="contact-form__success-text">
          Thank you for reaching out to the Thelle Mogoerane Foundation. We have received
          your message and will respond as soon as possible.
        </p>
        <button
          type="button"
          className="btn btn-outline"
          onClick={() => setStatus('idle')}
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form__header">
        <h3 className="contact-form__title">Send us a message</h3>
        <p className="contact-form__intro">
          Complete the form below and our team will get back to you.
        </p>
      </div>

      {status === 'error' && (
        <div className="contact-form__alert contact-form__alert--error" role="alert">
          {errorMessage}
        </div>
      )}

      <div className="contact-form__row">
        <div className={`form-field ${errors.name ? 'form-field--error' : ''}`}>
          <label htmlFor="contact-name">Full Name *</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            value={form.name}
            onChange={(e) => updateField('name', e.target.value)}
            placeholder="Your full name"
            autoComplete="name"
          />
          {errors.name && <span className="form-field__error">{errors.name}</span>}
        </div>

        <div className={`form-field ${errors.email ? 'form-field--error' : ''}`}>
          <label htmlFor="contact-email">Email Address *</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            value={form.email}
            onChange={(e) => updateField('email', e.target.value)}
            placeholder="you@example.com"
            autoComplete="email"
          />
          {errors.email && <span className="form-field__error">{errors.email}</span>}
        </div>
      </div>

      <div className="contact-form__row">
        <div className="form-field">
          <label htmlFor="contact-phone">Phone Number</label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={(e) => updateField('phone', e.target.value)}
            placeholder="061 000 0000"
            autoComplete="tel"
          />
        </div>

        <div className={`form-field ${errors.subject ? 'form-field--error' : ''}`}>
          <label htmlFor="contact-subject">Inquiry Type *</label>
          <select
            id="contact-subject"
            name="subject"
            value={form.subject}
            onChange={(e) => updateField('subject', e.target.value)}
          >
            <option value="">Select an option</option>
            {inquiryOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.subject && <span className="form-field__error">{errors.subject}</span>}
        </div>
      </div>

      <div className={`form-field ${errors.message ? 'form-field--error' : ''}`}>
        <label htmlFor="contact-message">Message *</label>
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          value={form.message}
          onChange={(e) => updateField('message', e.target.value)}
          placeholder="Tell us how we can assist you..."
        />
        {errors.message && <span className="form-field__error">{errors.message}</span>}
      </div>

      <div className={`form-field form-field--consent ${consentError ? 'form-field--error' : ''}`}>
        <label className="consent-label" htmlFor="contact-consent">
          <input
            id="contact-consent"
            name="consent"
            type="checkbox"
            checked={consent}
            onChange={(e) => {
              setConsent(e.target.checked)
              if (e.target.checked) setConsentError('')
            }}
          />
          <span>
            I agree to the processing of my personal information in accordance with the{' '}
            <Link to="/popi-act">POPI Act</Link> and{' '}
            <Link to="/privacy-policy">Privacy Policy</Link>.
          </span>
        </label>
        {consentError && <span className="form-field__error">{consentError}</span>}
      </div>

      <p className="contact-form__recaptcha-notice">
        This site is protected by reCAPTCHA and the Google{' '}
        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
          Privacy Policy
        </a>{' '}
        and{' '}
        <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">
          Terms of Service
        </a>{' '}
        apply.
      </p>

      <button
        type="submit"
        className="btn btn-primary btn-lg contact-form__submit"
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}
