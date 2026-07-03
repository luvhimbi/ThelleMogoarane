import LegalLayout from '../components/legal/LegalLayout'
import { FOUNDATION } from '../constants/foundation'

export default function TermsOfUse() {
  return (
    <LegalLayout title="Terms of Use">
      <p>
        Welcome to the website of {FOUNDATION.name} (NPC No. {FOUNDATION.npc}). By accessing or
        using <a href={FOUNDATION.website}>{FOUNDATION.website}</a>, you agree to these Terms of
        Use. If you do not agree, please do not use this website.
      </p>

      <h2>1. About these terms</h2>
      <p>
        These Terms of Use govern your access to and use of our website and its content. They apply
        to all visitors, users, partners, and others who access the site.
      </p>

      <h2>2. Permitted use</h2>
      <p>You may use this website for lawful purposes only, including to:</p>
      <ul>
        <li>Learn about the Foundation, its legacy, programmes, and events;</li>
        <li>Contact us regarding partnerships, volunteering, or general enquiries;</li>
        <li>Share links to our pages for non-commercial educational or informational purposes.</li>
      </ul>

      <h2>3. Prohibited conduct</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the website in any way that violates applicable South African or international law;</li>
        <li>Attempt to gain unauthorised access to our systems, servers, or data;</li>
        <li>Transmit malware, spam, or harmful code;</li>
        <li>Misrepresent your affiliation with the Foundation;</li>
        <li>
          Reproduce, republish, or commercially exploit Foundation content without prior written
          permission, except as permitted by law or fair dealing provisions;
        </li>
        <li>Use the website to harass, defame, or harm any person or organisation.</li>
      </ul>

      <h2>4. Intellectual property</h2>
      <p>
        Unless otherwise stated, all content on this website, including text, images, logos,
        graphics, photographs of the Moroka Three, and design elements, is owned by or licensed to{' '}
        {FOUNDATION.name} and protected by copyright and other intellectual property laws.
      </p>
      <p>
        The name &ldquo;Thelle Mogoerane Foundation&rdquo;, our logo, and associated branding may not
        be used without our written consent. For copyright concerns, see our{' '}
        <a href="/dmca">DMCA Policy</a>.
      </p>

      <h2>5. Historical and educational content</h2>
      <p>
        Content relating to struggle history, biographies, and legacy material is provided for
        educational, commemorative, and public interest purposes. While we strive for accuracy, we do
        not warrant that all historical summaries are complete or free from error.
      </p>

      <h2>6. Donations and partnerships</h2>
      <p>
        References to supporting the Foundation, volunteering, or partnering do not constitute a
        binding agreement until confirmed in writing by authorised Foundation representatives.
        Programme availability may change without notice.
      </p>

      <h2>7. Third-party services</h2>
      <p>
        Our website may embed or link to third-party services (such as mapping tools, social media,
        or form delivery providers). Your use of those services is subject to their respective terms
        and privacy policies.
      </p>

      <h2>8. Disclaimer of warranties</h2>
      <p>
        This website is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis. To
        the fullest extent permitted by law, {FOUNDATION.name} disclaims all warranties, express or
        implied, regarding the website&apos;s operation, availability, or fitness for a particular
        purpose.
      </p>

      <h2>9. Limitation of liability</h2>
      <p>
        To the extent permitted by law, {FOUNDATION.name}, its directors, staff, and affiliates
        shall not be liable for any indirect, incidental, special, or consequential damages arising
        from your use of this website or reliance on its content.
      </p>

      <h2>10. Indemnity</h2>
      <p>
        You agree to indemnify and hold harmless {FOUNDATION.name} from any claims, damages, or
        expenses arising from your misuse of the website or breach of these Terms.
      </p>

      <h2>11. Governing law</h2>
      <p>
        These Terms are governed by the laws of the Republic of South Africa. Any disputes shall be
        subject to the jurisdiction of the courts of South Africa.
      </p>

      <h2>12. Changes</h2>
      <p>
        We may revise these Terms of Use at any time. Continued use of the website after changes are
        posted constitutes acceptance of the revised terms.
      </p>

      <h2>13. Contact</h2>
      <p>
        Questions about these Terms may be directed to:
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
