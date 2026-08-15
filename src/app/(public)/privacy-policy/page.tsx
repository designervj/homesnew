import type { Metadata } from "next";
import { MotionReveal } from "@/components/shared/motion/MotionReveal";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Privacy Policy — Lucknow Homes",
  description: "Privacy Policy and data protection guidelines for Lucknow Homes website.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-background min-h-screen pb-20">
      {/* Full Width Hero Section with Image */}
      <div className="relative w-full h-[250px] sm:h-[350px] overflow-hidden">
        <Image
          src="/homes/banner.jpg.jpeg"
          alt="Lucknow Homes Properties"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-background/80 sm:bg-background/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent" />
        
        <div className="absolute inset-0 flex flex-col justify-end">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-6 sm:pb-12">
            <MotionReveal className="max-w-3xl relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-7 h-px bg-primary" />
                <span className="text-xs text-primary uppercase tracking-widest font-medium">Legal Information</span>
              </div>
              <h1 className="mb-4 font-serif text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl">
                Privacy Policy
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, store and protect the information you provide.
              </p>
            </MotionReveal>
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-muted-foreground leading-relaxed text-[15px] pt-12">

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-medium text-foreground">Who We Are</h2>
            <p>
              Lucknow Homes is a trusted real estate consultancy helping customers buy, sell and invest in residential, commercial and plotted properties across Lucknow and nearby locations.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-medium text-foreground">Information We Collect</h2>
            <p>
              We collect information only when you voluntarily provide it to us through enquiry forms, contact forms, WhatsApp, email, telephone, or other communication channels.
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Full Name</li>
              <li>Mobile Number</li>
              <li>Email Address</li>
              <li>Property Preferences</li>
              <li>Location Preferences</li>
              <li>Budget Details</li>
              <li>Any additional information you voluntarily share with us.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-medium text-foreground">How We Use Your Information</h2>
            <p>The information collected from you is used for the following purposes:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>To respond to your enquiries and requests.</li>
              <li>To provide project details, pricing and brochures.</li>
              <li>To schedule property visits.</li>
              <li>To assist you in buying or investing in properties.</li>
              <li>To improve our website and customer experience.</li>
              <li>To send important updates regarding our projects.</li>
              <li>To inform you about new launches, offers, promotions and investment opportunities.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-medium text-foreground">Consent for Communication</h2>
            <p>
              When you voluntarily submit your information through our enquiry forms, contact forms, WhatsApp, email, telephone or any other communication channel, you expressly authorize Lucknow Homes and its representatives to contact you regarding our properties, services, offers and important updates.
            </p>
            <p>By submitting your details, you agree to receive communications through:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Phone Calls</li>
              <li>SMS</li>
              <li>Email</li>
              <li>WhatsApp Messages</li>
            </ul>
            <p>
              In case you have submitted your personal information and contact details, Lucknow Homes reserves the right to contact you via Call, SMS, Email or WhatsApp regarding our products, projects, services, offers and other important updates, even if your mobile number is registered under DND (Do Not Disturb) or NDNC (National Do Not Call Registry). Your voluntary submission of your information shall be treated as your explicit consent to receive such communications from Lucknow Homes.
            </p>
            <p>
              This consent remains valid until you choose to withdraw it by contacting us through our official communication channels.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-medium text-foreground">Information Security</h2>
            <p>
              We use appropriate administrative, technical and physical security measures to safeguard your personal information from unauthorized access, disclosure, alteration or misuse. Access to your personal information is restricted only to authorized personnel who require it for business purposes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-medium text-foreground">Sharing of Information</h2>
            <p>
              Lucknow Homes does not sell, rent or trade your personal information to third parties. Your information may be shared only with our authorized employees, business associates, channel partners or trusted service providers strictly for the purpose of responding to your enquiry, providing requested services or fulfilling legal obligations.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-medium text-foreground">Cookies</h2>
            <p>
              Our website may use cookies and similar technologies to improve website performance, remember your preferences and analyze visitor traffic. Cookies help us enhance your browsing experience and provide personalized content. You may disable cookies through your browser settings, although some website features may not function properly.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-medium text-foreground">Third-Party Websites</h2>
            <p>
              Our website may contain links to third-party websites for your convenience. Lucknow Homes is not responsible for the privacy practices, policies or content of such external websites. We encourage users to review the privacy policies of those websites before providing any personal information.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-medium text-foreground">Data Retention</h2>
            <p>
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with applicable legal requirements, resolve disputes and enforce our agreements. Once the information is no longer required, it will be securely deleted or anonymized wherever reasonably possible.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-medium text-foreground">Your Rights</h2>
            <p>
              You may request access to, correction of or deletion of your personal information by contacting us through our official contact details. We will make reasonable efforts to respond to such requests in accordance with applicable laws.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-medium text-foreground">Changes to this Privacy Policy</h2>
            <p>
              Lucknow Homes reserves the right to update or modify this Privacy Policy at any time without prior notice. Any changes will become effective immediately upon posting on this page. We encourage users to review this page periodically to stay informed about how we protect their information.
            </p>
          </section>
          
      </div>
    </div>
  );
}
