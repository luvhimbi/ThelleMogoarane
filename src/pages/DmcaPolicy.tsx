import LegalLayout from '../components/legal/LegalLayout'
import { FOUNDATION } from '../constants/foundation'

export default function DmcaPolicy() {
  return (
    <LegalLayout title="DMCA Copyright Policy">
      <p>
        {FOUNDATION.name} respects the intellectual property rights of others and expects users of
        our website to do the same. This policy outlines how copyright owners may report alleged
        infringement under the United States Digital Millennium Copyright Act (&ldquo;DMCA&rdquo;) and
        how we respond to such notices.
      </p>
      <p>
        Although {FOUNDATION.name} is a South African organisation, we include this policy to
        address copyright concerns that may arise from content hosted on or linked through our
        website, including historical photographs, biographical material, and Foundation branding.
        For general copyright enquiries, you may also contact us directly.
      </p>

      <h2>1. Reporting copyright infringement</h2>
      <p>
        If you believe that content on our website infringes your copyright, please send a written
        DMCA notice to our designated agent containing the following information:
      </p>
      <ol>
        <li>
          A physical or electronic signature of the copyright owner or a person authorised to act on
          their behalf;
        </li>
        <li>
          Identification of the copyrighted work claimed to have been infringed;
        </li>
        <li>
          Identification of the material on our website that is claimed to be infringing, with
          sufficient detail for us to locate it (including the URL);
        </li>
        <li>
          Your contact information, including name, address, telephone number, and email address;
        </li>
        <li>
          A statement that you have a good faith belief that use of the material is not authorised by
          the copyright owner, its agent, or the law;
        </li>
        <li>
          A statement, under penalty of perjury, that the information in the notice is accurate and
          that you are the copyright owner or authorised to act on the copyright owner&apos;s behalf.
        </li>
      </ol>

      <h2>2. Designated agent for DMCA notices</h2>
      <p>
        DMCA notices should be sent to:
        <br />
        <strong>{FOUNDATION.name} - Copyright Agent</strong>
        <br />
        Email: <a href={`mailto:${FOUNDATION.email}`}>{FOUNDATION.email}</a>
        <br />
        Subject line: DMCA Notice - {FOUNDATION.shortName}
        <br />
        Address: {FOUNDATION.address}
      </p>

      <h2>3. Our response</h2>
      <p>
        Upon receiving a valid DMCA notice, we will review the claim and, where appropriate, remove
        or disable access to the allegedly infringing material. We may notify the user or party
        responsible for the content where applicable.
      </p>

      <h2>4. Counter-notification</h2>
      <p>
        If you believe content was removed in error, you may submit a counter-notification containing:
      </p>
      <ul>
        <li>Your physical or electronic signature;</li>
        <li>Identification of the material that was removed and its former location;</li>
        <li>
          A statement under penalty of perjury that you have a good faith belief the material was
          removed as a result of mistake or misidentification;
        </li>
        <li>Your name, address, telephone number, and consent to jurisdiction of the relevant courts.</li>
      </ul>

      <h2>5. Repeat infringers</h2>
      <p>
        We reserve the right to terminate access for users who are repeat infringers of copyright or
        other intellectual property rights, where appropriate.
      </p>

      <h2>6. Foundation-owned content</h2>
      <p>
        Historical images, biographies, logos, and programme materials displayed on this website may
        be subject to copyright held by {FOUNDATION.name}, the Mogoerane family, or licensed third
        parties. Unauthorised reproduction or commercial use without permission is prohibited.
      </p>

      <h2>7. South African copyright</h2>
      <p>
        In addition to this DMCA process, copyright matters may also be governed by the Copyright
        Act, 1978 (South Africa). For permissions to use Foundation content for educational,
        media, or research purposes, contact us before reproducing any materials.
      </p>

      <h2>8. Contact</h2>
      <p>
        General copyright and permissions enquiries:
        <br />
        Email: <a href={`mailto:${FOUNDATION.email}`}>{FOUNDATION.email}</a>
        <br />
        Phone: <a href="tel:+27617875679">{FOUNDATION.phone}</a>
      </p>
    </LegalLayout>
  )
}
