import { Metadata } from 'next'
import Container from '@/components/ui/Container'

export const metadata: Metadata = {
  title: 'Privacy Policy | Superior Car Wash',
  description: 'Learn how Superior Car Wash collects, uses, and protects your personal information.',
}

export default function PrivacyPage() {
  return (
    <>
      {/* Hero section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 py-16 text-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-5xl font-bold">Privacy Policy</h1>
            <p className="text-xl text-primary-50">
              Last updated: October 25, 2025
            </p>
          </div>
        </Container>
      </section>

      {/* Privacy Policy Content */}
      <section className="bg-white py-16">
        <Container>
          <div className="prose prose-lg mx-auto max-w-4xl">
            <h2>Introduction</h2>
            <p>
              At Superior Car Wash, we take your privacy seriously. This Privacy Policy explains how
              we collect, use, disclose, and safeguard your information when you visit our website
              or use our services.
            </p>

            <h2>Information We Collect</h2>
            <h3>Personal Information</h3>
            <p>
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul>
              <li>Register for a membership</li>
              <li>Make a booking or reservation</li>
              <li>Subscribe to our newsletter</li>
              <li>Contact us with inquiries</li>
              <li>Participate in surveys or promotions</li>
            </ul>
            <p>
              This information may include your name, email address, phone number, vehicle
              information, payment details, and any other information you choose to provide.
            </p>

            <h3>Automatically Collected Information</h3>
            <p>
              When you visit our website, we may automatically collect certain information about
              your device, including:
            </p>
            <ul>
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Referring website</li>
              <li>Pages visited and time spent on pages</li>
              <li>Click patterns and other usage data</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, maintain, and improve our services</li>
              <li>Process your transactions and manage your membership</li>
              <li>Send you confirmations, updates, and administrative messages</li>
              <li>Respond to your comments, questions, and customer service requests</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Monitor and analyze trends, usage, and activities</li>
              <li>Detect, prevent, and address technical issues and fraudulent activity</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>Information Sharing and Disclosure</h2>
            <p>We may share your information in the following situations:</p>
            <ul>
              <li>
                <strong>Service Providers:</strong> We may share information with third-party
                vendors who perform services on our behalf, such as payment processing, data
                analysis, email delivery, and customer service.
              </li>
              <li>
                <strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or
                sale of assets, your information may be transferred as part of that transaction.
              </li>
              <li>
                <strong>Legal Requirements:</strong> We may disclose information if required by law
                or in response to valid requests by public authorities.
              </li>
              <li>
                <strong>Protection of Rights:</strong> We may disclose information to protect and
                defend our rights, property, or safety, or that of our users or others.
              </li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect
              your personal information. However, no method of transmission over the Internet or
              electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2>Your Privacy Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate or incomplete information</li>
              <li>Request deletion of your personal information</li>
              <li>Object to or restrict our processing of your information</li>
              <li>Withdraw consent where we rely on consent to process your information</li>
              <li>Opt-out of marketing communications</li>
            </ul>
            <p>
              To exercise these rights, please contact us using the information provided at the end
              of this policy.
            </p>

            <h2>Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our website and
              hold certain information. You can instruct your browser to refuse all cookies or to
              indicate when a cookie is being sent. However, if you do not accept cookies, you may
              not be able to use some portions of our website.
            </p>

            <h2>Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the
              privacy practices or content of these sites. We encourage you to read the privacy
              policies of any third-party sites you visit.
            </p>

            <h2>Children&apos;s Privacy</h2>
            <p>
              Our services are not directed to children under 13 years of age. We do not knowingly
              collect personal information from children under 13. If you believe we have collected
              information from a child under 13, please contact us immediately.
            </p>

            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes
              by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
              We encourage you to review this Privacy Policy periodically.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our privacy practices, please
              contact us at:
            </p>
            <p>
              <strong>Superior Car Wash</strong>
              <br />
              Email: privacy@superiorcarwash.com
              <br />
              Phone: (570) 459-7000
            </p>
          </div>
        </Container>
      </section>
    </>
  )
}
