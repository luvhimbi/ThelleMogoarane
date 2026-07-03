import LegalLayout from '../components/legal/LegalLayout'
import { FOUNDATION } from '../constants/foundation'

export default function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy">
      <p>
        {FOUNDATION.name} (&ldquo;TMF&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) respects
        your privacy and is committed to protecting your personal information. This Privacy Policy
        explains how we collect, use, store, and protect information when you visit{' '}
        <a href={FOUNDATION.website}>{FOUNDATION.website}</a> or interact with us.
      </p>

      <h2>1. Who we are</h2>
      <p>
        {FOUNDATION.name} is a registered Non-Profit Company (NPC No. {FOUNDATION.npc}) based in
        Ekurhuleni, South Africa. We honour the legacy of Thelle Simon &ldquo;Terror&rdquo; Mogoerane
        and work to preserve revolutionary history while delivering education, civic, and community
        programmes.
      </p>

      <h2>2. Information we collect</h2>
      <p>We may collect the following categories of personal information:</p>
      <ul>
        <li>
          <strong>Contact details:</strong> name, email address, phone number, and any information
          you provide in messages submitted through our contact form.
        </li>
        <li>
          <strong>Communication records:</strong> the subject and content of enquiries, partnership
          requests, volunteer interest, or programme-related correspondence.
        </li>
        <li>
          <strong>Technical data:</strong> browser type, device information, IP address, pages visited,
          and general usage data collected through standard website logs or analytics tools.
        </li>
      </ul>
      <p>
        We do not intentionally collect special personal information (such as health, biometric, or
        political affiliation data) unless you voluntarily provide it and we have a lawful basis to
        process it.
      </p>

      <h2>3. How we use your information</h2>
      <p>We use personal information to:</p>
      <ul>
        <li>Respond to enquiries and contact form submissions;</li>
        <li>Communicate about programmes, events, partnerships, and Foundation activities;</li>
        <li>Improve our website, services, and user experience;</li>
        <li>Meet legal, regulatory, and governance obligations;</li>
        <li>Protect the security and integrity of our website and organisation.</li>
      </ul>

      <h2>4. Lawful basis for processing</h2>
      <p>
        Under the Protection of Personal Information Act, 2013 (POPIA), we process personal
        information on grounds that may include your consent, our legitimate interests in operating
        the Foundation, and compliance with legal obligations. Where consent is required, we will
        request it clearly before collecting your information.
      </p>
      <p>
        For more detail on your rights under POPIA, see our{' '}
        <a href="/popi-act">POPI Act compliance page</a>.
      </p>

      <h2>5. Sharing of information</h2>
      <p>We do not sell your personal information. We may share information only:</p>
      <ul>
        <li>
          With trusted service providers who assist us in operating the website or handling
          communications (for example, Web3Forms for secure contact form delivery), subject to
          appropriate safeguards;
        </li>
        <li>With Foundation leadership or staff who need the information to respond to you;</li>
        <li>Where required by law, court order, or a competent authority;</li>
        <li>With your explicit consent.</li>
      </ul>

      <h2>6. Data retention</h2>
      <p>
        We retain personal information only for as long as necessary to fulfil the purpose for which
        it was collected, to maintain records required by law, or to resolve disputes. Contact form
        submissions are typically retained for up to five (5) years unless a longer period is
        required for legal or operational reasons.
      </p>

      <h2>7. Security</h2>
      <p>
        We implement reasonable technical and organisational measures to protect personal information
        against unauthorised access, loss, misuse, or alteration. However, no method of transmission
        over the internet is completely secure, and we cannot guarantee absolute security.
      </p>

      <h2>8. Your rights</h2>
      <p>
        Subject to POPIA, you may have the right to request access to, correction of, deletion of,
        or restriction on the processing of your personal information, and to object to certain
        processing or lodge a complaint with the Information Regulator of South Africa.
      </p>

      <h2>9. Third-party links</h2>
      <p>
        Our website may contain links to external websites (including social media platforms and map
        services). We are not responsible for the privacy practices of those third parties.
      </p>

      <h2>10. Children</h2>
      <p>
        Our website is not directed at children under the age of 18 without parental or guardian
        involvement. If you believe a minor has submitted personal information to us without
        appropriate consent, please contact us so we can take appropriate action.
      </p>

      <h2>11. Changes to this policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Changes will be posted on this page
        with an updated &ldquo;Last updated&rdquo; date.
      </p>

      <h2>12. Contact us</h2>
      <p>
        For privacy-related questions or requests, contact us at:
        <br />
        Email: <a href={`mailto:${FOUNDATION.email}`}>{FOUNDATION.email}</a>
        <br />
        Phone: <a href="tel:+27617875679">{FOUNDATION.phone}</a>
        <br />
        Address: {FOUNDATION.address}
      </p>
    </LegalLayout>
  )
}
