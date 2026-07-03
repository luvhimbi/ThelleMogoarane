import LegalLayout from '../components/legal/LegalLayout'
import { FOUNDATION } from '../constants/foundation'

export default function PopiAct() {
  return (
    <LegalLayout title="POPI Act Compliance">
      <p>
        {FOUNDATION.name} is committed to complying with the Protection of Personal Information Act,
        2013 (Act 4 of 2013) (&ldquo;POPIA&rdquo;), South Africa&apos;s data protection legislation.
        This page explains how we meet our obligations when processing personal information.
      </p>

      <h2>1. Responsible party</h2>
      <p>
        The responsible party for the processing of personal information is:
        <br />
        <strong>{FOUNDATION.name}</strong>
        <br />
        NPC No. {FOUNDATION.npc}
        <br />
        {FOUNDATION.address}
      </p>

      <h2>2. Information Officer</h2>
      <p>
        In terms of POPIA, we have designated an Information Officer to oversee compliance and
        handle data subject requests. You may contact the Information Officer at:
        <br />
        Email: <a href={`mailto:${FOUNDATION.email}`}>{FOUNDATION.email}</a>
        <br />
        Phone: <a href="tel:+27617875679">{FOUNDATION.phone}</a>
      </p>

      <h2>3. Personal information we process</h2>
      <p>We may process the following types of personal information:</p>
      <ul>
        <li>Identity and contact information (name, email, telephone number);</li>
        <li>Correspondence and enquiry details submitted via our contact form;</li>
        <li>Technical and usage data related to website visits;</li>
        <li>
          Information voluntarily provided when applying for programmes, volunteering, partnering,
          or participating in Foundation events.
        </li>
      </ul>

      <h2>4. Purpose of processing</h2>
      <p>We process personal information for purposes including:</p>
      <ul>
        <li>Responding to enquiries and maintaining communication records;</li>
        <li>Administering programmes, events, and community initiatives;</li>
        <li>Managing partnerships, volunteering, and stakeholder relationships;</li>
        <li>Complying with legal, regulatory, and governance requirements;</li>
        <li>Securing and improving our website and information systems.</li>
      </ul>

      <h2>5. Lawful processing conditions</h2>
      <p>
        We process personal information only where a lawful condition under POPIA applies, which may
        include:
      </p>
      <ul>
        <li>Your consent, where required;</li>
        <li>Processing necessary to carry out actions at your request prior to entering a contract;</li>
        <li>Processing required to comply with an obligation under law;</li>
        <li>
          Processing necessary for our legitimate interests, provided such interests are not
          overridden by your rights.
        </li>
      </ul>
      <p>
        When you submit our contact form, you are asked to consent to the processing of your personal
        information for the purpose of responding to your enquiry.
      </p>

      <h2>6. Data subject rights</h2>
      <p>Under POPIA, you have the right to:</p>
      <ul>
        <li>Be notified that your personal information is being collected;</li>
        <li>Be advised of the purpose for which your information is collected;</li>
        <li>Request access to personal information we hold about you;</li>
        <li>Request correction or deletion of inaccurate or irrelevant information;</li>
        <li>Object to the processing of your personal information in certain circumstances;</li>
        <li>Withdraw consent where processing is based on consent;</li>
        <li>
          Lodge a complaint with the Information Regulator if you believe your rights have been
          infringed.
        </li>
      </ul>

      <h2>7. Information Regulator</h2>
      <p>
        The Information Regulator (South Africa) can be contacted at:
        <br />
        Website:{' '}
        <a href="https://www.justice.gov.za/inforeg/" target="_blank" rel="noopener noreferrer">
          www.justice.gov.za/inforeg
        </a>
        <br />
        Email: inforeg@justice.gov.za
      </p>

      <h2>8. Security safeguards</h2>
      <p>
        We take reasonable technical and organisational measures to secure personal information
        against loss, unauthorised access, disclosure, or destruction. Access to personal
        information is limited to authorised persons who require it for legitimate Foundation
        purposes.
      </p>

      <h2>9. Cross-border transfers</h2>
      <p>
        Where personal information is transferred to service providers outside South Africa (for
        example, website hosting or email delivery services), we take steps to ensure that adequate
        protection is in place as required by POPIA.
      </p>

      <h2>10. Retention and destruction</h2>
      <p>
        Personal information is retained only for as long as necessary to fulfil the purpose for
        which it was collected, or as required by law. Thereafter, records are securely destroyed or
        de-identified.
      </p>

      <h2>11. Data breaches</h2>
      <p>
        In the event of a security compromise involving personal information, we will take
        appropriate steps in accordance with POPIA, which may include notifying the Information
        Regulator and affected data subjects where required.
      </p>

      <h2>12. Related documents</h2>
      <p>
        This page should be read together with our{' '}
        <a href="/privacy-policy">Privacy Policy</a> and{' '}
        <a href="/terms-of-use">Terms of Use</a>.
      </p>

      <h2>13. Contact the Information Officer</h2>
      <p>
        To exercise your rights or raise a POPIA-related concern, contact:
        <br />
        Email: <a href={`mailto:${FOUNDATION.email}`}>{FOUNDATION.email}</a>
        <br />
        Subject line: POPIA Request - {FOUNDATION.shortName}
        <br />
        Address: {FOUNDATION.address}
      </p>
    </LegalLayout>
  )
}
