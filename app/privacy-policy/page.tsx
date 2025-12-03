export default function Page() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center mx-auto mt-16 max-w-3xl px-4 py-8">
      <h1 className="text-center text-3xl font-bold mb-6">Privacy Policy</h1>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">General Information</h2>
        <p className="mb-2">
          We, at Sylvorn Labs and its wholly-owned subsidiaries (collectively,
          “we” or the “Company”), are committed to protecting the privacy of our
          business partners (“Clients”) who are licensed to use our software
          solutions (“Software”) within their internal networks, as well as the
          end users who access or interact with data managed by our Software
          (“End Users”).
        </p>
        <p>
          This Software Privacy Policy outlines how we collect, use, and
          safeguard your information. By using our Software, you agree to the
          practices described herein.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Client’s Responsibility</h2>
        <p>
          The Client is responsible for ensuring that its End Users are fully
          informed about, and have consented (where applicable) to, the
          collection and processing of information by Sylvorn Labs, as described
          in this policy and in accordance with applicable data protection laws.
        </p>
      </section>

      <h1 className="text-center text-3xl font-bold mb-6">
        Terms &amp; Conditions
      </h1>
      <section className="mb-8">
        <ol className="list-decimal list-inside space-y-4">
          <li>
            <strong>Scope</strong>
            <p>
              This Service Agreement (“Agreement”) governs the professional
              services (“Services”) and deliverables (“Deliverables”) offered by
              Sylvorn Labs to its clients in relation to software development,
              consulting, and deployment as outlined in any Statement of Work
              (SOW) or written contract.
            </p>
          </li>
          <li>
            <strong>Payments</strong>
            <ul className="list-disc list-inside ml-5">
              <li>
                All product/service pricing shall be mutually agreed upon in
                each purchase order.
              </li>
              <li>
                All invoices shall be addressed to the Client or its authorized
                distributor.
              </li>
              <li>
                100% payment must be made in advance unless otherwise specified
                in writing.
              </li>
            </ul>
          </li>
          <li>
            <strong>Approval Process</strong>
            <p>
              The Client has seven (7) days from the receipt of any Deliverables
              to perform acceptance testing. If no written objections are
              submitted within this period, the Deliverables shall be deemed
              accepted.
            </p>
          </li>
          <li>
            <strong>Confidentiality</strong>
            <p>
              Each party shall maintain the confidentiality of any non-public
              information shared during the term of the agreement. This includes
              technical, financial, business, or customer data. Confidentiality
              exclusions include:
            </p>
            <ul className="list-disc list-inside ml-5">
              <li>Publicly available information</li>
              <li>Information independently developed</li>
              <li>Disclosure required by law (with notice)</li>
              <li>Information disclosed with written consent</li>
            </ul>
          </li>
          <li>
            <strong>Intellectual Property Rights</strong>
            <ul className="list-disc list-inside ml-5">
              <li>
                All rights and ownership of the Deliverables will be transferred
                to the Client upon full payment.
              </li>
              <li>
                Sylvorn Labs retains rights to any pre-existing intellectual
                property used in the Deliverables but grants the Client a
                perpetual, non-exclusive, royalty-free license to use it within
                the scope of the final product.
              </li>
            </ul>
          </li>
          <li>
            <strong>Warranties</strong>
            <p>
              All services are provided “as is” unless otherwise stated in
              writing. Sylvorn Labs disclaims any implied warranties, including
              merchantability or fitness for a particular purpose.
            </p>
          </li>
          <li>
            <strong>Limitation of Liability</strong>
            <p>
              Sylvorn Labs’s total liability is limited to the total amount paid
              under the Agreement. We are not liable for indirect or
              consequential damages, including lost profits or data.
            </p>
          </li>
          <li>
            <strong>Termination</strong>
            <p>
              This Agreement may be terminated by either party with 60 days
              written notice, or immediately if the other party breaches its
              terms and fails to rectify the issue within 30 days of notice. In
              such a case, the Client shall pay on a pro-rata basis for any
              Services already rendered.
            </p>
          </li>
          <li>
            <strong>Non-Solicitation</strong>
            <p>
              For a period of one (1) year after the conclusion of the
              Agreement, neither party shall solicit or hire any employees,
              contractors, or consultants of the other party without prior
              written consent.
            </p>
          </li>
        </ol>
      </section>
    </main>
  );
}
