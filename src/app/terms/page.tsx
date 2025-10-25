import { Metadata } from 'next'
import Container from '@/components/ui/Container'

export const metadata: Metadata = {
  title: 'Terms of Service | Superior Car Wash',
  description: 'Read the terms and conditions for using Superior Car Wash services.',
}

export default function TermsPage() {
  return (
    <>
      {/* Hero section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 py-16 text-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-5xl font-bold">Terms of Service</h1>
            <p className="text-xl text-primary-50">
              Last updated: October 25, 2025
            </p>
          </div>
        </Container>
      </section>

      {/* Terms Content */}
      <section className="bg-white py-16">
        <Container>
          <div className="prose prose-lg mx-auto max-w-4xl">
            <h2>Agreement to Terms</h2>
            <p>
              By accessing or using Superior Car Wash services, you agree to be bound by these Terms
              of Service. If you disagree with any part of these terms, you may not access our
              services.
            </p>

            <h2>Services</h2>
            <p>
              Superior Car Wash provides vehicle washing and detailing services at our physical
              locations. We offer both single-wash services and monthly membership subscriptions.
            </p>

            <h2>Membership Terms</h2>
            <h3>Subscription and Billing</h3>
            <ul>
              <li>
                Memberships are billed monthly on a recurring basis until cancelled
              </li>
              <li>
                The membership fee is charged to your payment method on file at the beginning of
                each billing cycle
              </li>
              <li>
                You are responsible for maintaining accurate payment information
              </li>
              <li>
                Failed payments may result in suspension or termination of your membership
              </li>
            </ul>

            <h3>Membership Benefits</h3>
            <ul>
              <li>
                Members receive unlimited washes at their selected tier level
              </li>
              <li>
                Memberships are valid at all Superior Car Wash locations
              </li>
              <li>
                We recommend waiting at least 8 hours between washes to protect your vehicle
              </li>
              <li>
                Benefits are non-transferable and can only be used for the registered vehicle(s)
              </li>
            </ul>

            <h3>Cancellation Policy</h3>
            <ul>
              <li>
                You may cancel your membership at any time through your account or by contacting
                customer service
              </li>
              <li>
                Cancellations are effective at the end of the current billing period
              </li>
              <li>
                No refunds are provided for partial months
              </li>
              <li>
                You may continue to use your membership benefits until the end of the paid period
              </li>
            </ul>

            <h2>Vehicle Requirements and Restrictions</h2>
            <p>
              To ensure safety and quality service for all customers, certain vehicle types and
              conditions may be restricted:
            </p>
            <ul>
              <li>
                Vehicles must be in reasonably clean condition (excessively dirty vehicles may be
                refused service)
              </li>
              <li>
                Vehicles with damaged paint, loose parts, or modifications that could be damaged in
                the wash may be refused service
              </li>
              <li>
                We reserve the right to refuse service to any vehicle at our discretion
              </li>
              <li>
                Maximum vehicle dimensions: 7 feet tall, 8 feet wide, 21 feet long
              </li>
            </ul>

            <h2>Limitation of Liability</h2>
            <p>
              Superior Car Wash takes great care in providing quality service. However:
            </p>
            <ul>
              <li>
                We are not responsible for pre-existing damage to vehicles
              </li>
              <li>
                We are not liable for damage to vehicles with after-market modifications, spoilers,
                antennas, or other non-standard equipment
              </li>
              <li>
                Customers must report any damage immediately after service; claims made later will
                not be accepted
              </li>
              <li>
                Our liability is limited to the cost of the service provided or repair costs, not to
                exceed $500
              </li>
              <li>
                We are not responsible for loss or damage to items left in vehicles
              </li>
            </ul>

            <h2>User Conduct</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Use the service for any unlawful purpose</li>
              <li>Share membership credentials with others</li>
              <li>
                Attempt to wash vehicles other than those registered to your membership
              </li>
              <li>Interfere with or disrupt the service or equipment</li>
              <li>Harass, abuse, or harm other customers or staff</li>
              <li>Attempt to defraud or abuse promotional offers</li>
            </ul>

            <h2>Intellectual Property</h2>
            <p>
              All content on our website and in our locations, including text, graphics, logos,
              images, and software, is the property of Superior Car Wash and protected by copyright
              and trademark laws.
            </p>

            <h2>Privacy</h2>
            <p>
              Your use of our services is also governed by our Privacy Policy. Please review our
              Privacy Policy to understand our practices.
            </p>

            <h2>Modifications to Service</h2>
            <p>
              We reserve the right to modify or discontinue, temporarily or permanently, the service
              (or any part thereof) with or without notice. We shall not be liable to you or any
              third party for any modification, suspension, or discontinuance of the service.
            </p>

            <h2>Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. We will provide
              notice of material changes by posting the new terms on our website and updating the
              &quot;Last updated&quot; date. Your continued use of the service after changes constitutes
              acceptance of the new terms.
            </p>

            <h2>Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the
              Commonwealth of Pennsylvania, without regard to its conflict of law provisions.
            </p>

            <h2>Dispute Resolution</h2>
            <p>
              Any disputes arising out of or relating to these Terms or our services shall be
              resolved through binding arbitration in accordance with the rules of the American
              Arbitration Association.
            </p>

            <h2>Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <p>
              <strong>Superior Car Wash</strong>
              <br />
              Email: support@superiorcarwash.com
              <br />
              Phone: (570) 459-7000
            </p>

            <h2>Severability</h2>
            <p>
              If any provision of these Terms is found to be unenforceable or invalid, that
              provision shall be limited or eliminated to the minimum extent necessary so that these
              Terms shall otherwise remain in full force and effect.
            </p>

            <h2>Entire Agreement</h2>
            <p>
              These Terms constitute the entire agreement between you and Superior Car Wash
              regarding our services and supersede all prior agreements and understandings.
            </p>
          </div>
        </Container>
      </section>
    </>
  )
}
