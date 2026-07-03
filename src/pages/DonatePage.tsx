import { useEffect } from 'react'
import { FOUNDATION } from '../constants/foundation'
import './DonatePage.css'

export default function DonatePage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const bankDetails = {
    accountName: 'Thelle Mogoerane Foundation NPC',
    bankName: 'Nedbank',
    accountNumber: '1302563661',
    accountType: 'Business Current Account',
    branchCode: '198765',
    reference: 'Donate [Your Name]',
  }

  return (
    <main className="donate-page" id="main-content">
      {/* Hero Banner Section */}
      <section className="donate-page__hero">
        <div className="donate-page__hero-overlay" aria-hidden="true" />
        <div className="container donate-page__hero-inner">
          <span className="donate-page__eyebrow">Support Our Mission</span>
          <h1 className="donate-page__title">Donate &amp; Support</h1>
          <p className="donate-page__subtitle">
            Your contribution directly empowers our educational, entrepreneurship, and community development programmes.
          </p>
        </div>
      </section>

      {/* Main Single-Column Content */}
      <div className="container donate-page__container">
        <div className="donate-page__content">
          
          <div className="donate-page__appreciation">
            <span className="donate-page__quote-icon" aria-hidden="true">“</span>
            <p className="donate-page__lead">
              We are deeply grateful for your support of the Thelle Mogoerane Foundation.
            </p>
            <p>
              Your generous contribution directly sustains and expands our community outreach,
              youth development, and legacy programmes in Vosloorus and across Ekurhuleni.
            </p>
          </div>

          <section className="donate-page__bank-card">
            <div className="donate-page__bank-header">
              <div className="donate-page__bank-brand">
                <span className="donate-page__bank-label">OFFICIAL DETAILS</span>
                <h3 className="donate-page__bank-title">Direct Deposit / EFT</h3>
              </div>
              <span className="donate-page__bank-tag">Nedbank</span>
            </div>

            <div className="donate-page__details-list">
              <div className="donate-page__detail-item">
                <span className="donate-page__detail-label">Bank Name</span>
                <span className="donate-page__detail-value">{bankDetails.bankName}</span>
              </div>

              <div className="donate-page__detail-item">
                <span className="donate-page__detail-label">Account Name</span>
                <span className="donate-page__detail-value">{bankDetails.accountName}</span>
              </div>

              <div className="donate-page__detail-item">
                <span className="donate-page__detail-label">Account Number</span>
                <span className="donate-page__detail-value font-mono">{bankDetails.accountNumber}</span>
              </div>

              <div className="donate-page__detail-item">
                <span className="donate-page__detail-label">Account Type</span>
                <span className="donate-page__detail-value">{bankDetails.accountType}</span>
              </div>

              <div className="donate-page__detail-item">
                <span className="donate-page__detail-label">Branch Code</span>
                <span className="donate-page__detail-value font-mono">{bankDetails.branchCode}</span>
              </div>

              <div className="donate-page__detail-item">
                <span className="donate-page__detail-label">Reference</span>
                <span className="donate-page__detail-value">{bankDetails.reference}</span>
              </div>
            </div>

            <div className="donate-page__bank-notice">
              <p>
                <strong>Proof of Payment:</strong> Please email transaction confirmations to <a href={`mailto:${FOUNDATION.email}`}>{FOUNDATION.email}</a> so we can acknowledge and thank you for your support.
              </p>
            </div>
          </section>

        </div>
      </div>
    </main>
  )
}
