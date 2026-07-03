import LegalLayout from '../components/legal/LegalLayout'
import { FOUNDATION } from '../constants/foundation'

export default function PaiaManual() {
  return (
    <LegalLayout title="PAIA Manual">
      <p>
        This manual is published in terms of Section 51 of the Promotion of Access to Information Act,
        2000 (Act No. 2 of 2000) (&ldquo;PAIA&rdquo;) and to address the requirements of the Protection of
        Personal Information Act, 2013 (Act 4 of 2013) (&ldquo;POPIA&rdquo;).
      </p>

      <h2>1. Introduction</h2>
      <p>
        The {FOUNDATION.name} is a Non-Profit Company (NPC) committed to honouring the legacy of the
        Moroka Three through educational, civic, and community programmes. This manual provides an
        outline of the types of records held by the Foundation and explains how one may submit
        requests for access to these records.
      </p>

      <h2>2. Contact Details</h2>
      <p>
        <strong>Information Officer:</strong> Thusi Motsopi (or designated officer)
        <br />
        <strong>Physical Address:</strong> {FOUNDATION.address}
        <br />
        <strong>Telephone Number:</strong> <a href="tel:+27617875679">{FOUNDATION.phone}</a>
        <br />
        <strong>Email Address:</strong> <a href={`mailto:${FOUNDATION.email}`}>{FOUNDATION.email}</a>
        <br />
        <strong>Website:</strong> <a href={FOUNDATION.website}>{FOUNDATION.website}</a>
      </p>

      <h2>3. The Information Regulator</h2>
      <p>
        The Information Regulator has assumed the functions of the South African Human Rights
        Commission (SAHRC) under PAIA. Queries can be directed to the Information Regulator:
        <br />
        <strong>Website:</strong>{' '}
        <a href="https://www.justice.gov.za/inforeg/" target="_blank" rel="noopener noreferrer">
          www.justice.gov.za/inforeg
        </a>
        <br />
        <strong>Email:</strong> inforeg@justice.gov.za
      </p>

      <h2>4. Records available in terms of other legislation</h2>
      <p>
        The Foundation keeps information and records in accordance with various statutory requirements,
        including, but not limited to:
      </p>
      <ul>
        <li>Companies Act 71 of 2008</li>
        <li>Non-Profit Organisations Act 71 of 1997</li>
        <li>Basic Conditions of Employment Act 75 of 1997</li>
        <li>Protection of Personal Information Act 4 of 2013</li>
      </ul>

      <h2>5. Categories of records held by the Foundation</h2>
      <p>The following are categories of records held by the Foundation:</p>
      <ul>
        <li>
          <strong>Company Records:</strong> Incorporation documents, Memorandum of Incorporation,
          directors&apos; details, and board resolutions.
        </li>
        <li>
          <strong>Financial Records:</strong> Annual financial statements, tax records, banking
          details, and donation records.
        </li>
        <li>
          <strong>Operational Records:</strong> Programme details, volunteer registries, partnership
          agreements, and event archives.
        </li>
        <li>
          <strong>Human Resources:</strong> Staff/volunteer policies, contracts, and relevant HR
          documents.
        </li>
      </ul>

      <h2>6. Procedure for requesting access to information</h2>
      <p>
        To request access to a record held by {FOUNDATION.name}:
      </p>
      <ol>
        <li>
          Submit a request using the prescribed Form 2 (available on the Information Regulator&apos;s
          website) to the Information Officer via email or physical address.
        </li>
        <li>
          Provide sufficient detail in the request to enable the Information Officer to identify the
          record(s) and the requester.
        </li>
        <li>
          Indicate the form of access required and specify a postal address or email address within
          South Africa.
        </li>
        <li>
          Identify the right that you seek to exercise or protect, and explain why the requested record
          is required to exercise or protect that right.
        </li>
      </ol>
      <p>
        Please note that access to certain records may be subject to the payment of prescribed fees
        and may be refused on the grounds set out in PAIA (e.g., protection of third-party privacy,
        commercial information, or confidential information).
      </p>

      <h2>7. Availability of the Manual</h2>
      <p>
        This manual is available for inspection upon request at the Foundation&apos;s physical address and
        is also accessible on our website.
      </p>
    </LegalLayout>
  )
}
