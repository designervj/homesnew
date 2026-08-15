import type { Metadata } from "next";
import { MotionReveal } from "@/components/shared/motion/MotionReveal";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Terms of Use — Lucknow Homes",
  description: "Terms of Use and Disclaimers for Lucknow Homes website.",
};

export default function TermsOfUsePage() {
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
                Terms of Use
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Please read the following terms of use and disclaimers carefully before using the Lucknow Homes web site. Your access to and use of this site is subject to these terms.
              </p>
            </MotionReveal>
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-muted-foreground leading-relaxed text-[15px] pt-12">

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-medium text-foreground">Acceptance of Terms</h2>
            <p>
              Lucknow Homes maintains this Website (the "Site") for your personal use. Your access to and use of this Site is subject to the following Terms of Use. Lucknow Homes reserves the right to update these Terms of Use at any time without notice to you. The most current version of the Terms of Use may be accessed by clicking on the "Terms of Use" hypertext link located at the bottom of the Site. By choosing to use this Site, you accept and acknowledge, without limitation or qualification, these Terms of Use. However, if you do NOT agree to these Terms of Use, please DO NOT use this Site.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-medium text-foreground">Accuracy and Completeness of Information</h2>
            <p>
              While Lucknow Homes endeavors to provide the updated and reliable information in this Site, Lucknow Homes makes no warranties or representations as to the accuracy, correctness, reliability or otherwise with respect to such information, and assumes no liability or responsibility for any omissions or errors in the content of the information provided on this Site.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-medium text-foreground">Modification of Site</h2>
            <p>
              Lucknow Homes retains the right at all times at its sole discretion to periodically revise the information, services and resources provided on this Site and reserves the right to make such further changes, as it deems fit and proper, without any obligation to notify past, current or prospective visitors.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-medium text-foreground">Your Use of the Site</h2>
            <p>
              You may download the contents from this Site exclusively for purpose of non-commercial and personal use only, provided the copyright, trademark or other proprietary notices remain unchanged, un-altered and are visible at all times to the readers. Using our services does not give you ownership of any intellectual property rights in our services or the content you access on the Site. You further agree that no right, title or interest in the content of any downloaded materials is transferred to you as a result of any such act of downloading and/or copying. You also agree that you will not otherwise copy, modify, alter, display, distribute, sell, broadcast or transmit any materials provided on the Site in any manner without the prior written permission of Lucknow Homes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-medium text-foreground">No Unlawful or Prohibited Use</h2>
            <p>
              As a condition of your use of the Site, you will not use the Site for any purpose that is unlawful and/or prohibited by these Terms of Use or any applicable laws including but not limited to the Information Technology Act & Rules, 2002 as may be amended from time to time.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-medium text-foreground">Unsolicited Submissions</h2>
            <p>
              Lucknow Homes does not accept or consider any creative ideas, suggestions or materials from the public ("Submissions"), therefore, you are encouraged not make any Submissions to Lucknow Homes. However, if you should choose to send us a Submission, then you shall waive and grant to us all such rights and title in the said Submission and such Submission will be considered a non-confidential and non-proprietary information and shall immediately become the property of Lucknow Homes. Lucknow Homes shall exclusively thereafter own all rights, title and interest in the said Submissions. Lucknow Homes at its discretion will be free to use, host, store, reproduce, modify, create derivative works (such as those resulting from adaptations or other changes we make so that your Submissions works better with our services), communicate, publish, publicly perform, publicly display and distribute such Submissions.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-medium text-foreground">Privacy Policy</h2>
            <p>
              Lucknow Homes use of any personal data you submit to the Site is governed by the Site's Privacy Policy.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-medium text-foreground">Disclaimers</h2>
            <p>
              Other than as expressly set out in these terms, the website and its contents are provided on an "as is" basis. Lucknow Homes expressly disclaims all warranties, including the warranties of merchantability, fitness for a particular purpose and non-infringement. Lucknow Homes disclaims all responsibility for any loss, injury, claim, liability or damage of any kind resulting from, arising out of or any way related to (a) any errors in or omissions from this website and the content, including but not limited to technical inaccuracies and typographical errors, (b) any third party web sites or content therein directly or indirectly accessed through links in this website, including but not limited to any errors in or omissions therefrom, (c) the unavailability of the website or any portion thereof, (d) your use of this website or (e) your use of any equipment or software in connection with the website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-medium text-foreground">Limitation of Liability</h2>
            <p>
              In no event and under no legal or equitable theory, whether in tort, contract, strict liability or otherwise, shall Lucknow Homes be liable for any direct, indirect, special, exemplary, or punitive, incidental or consequential damages arising out of any use of the information contained herein, including, without limitation, damages for lost profits, revenues, financial losses, loss of goodwill or reputation, loss of data, work stoppage, accuracy of results, or computer failure or malfunction.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-medium text-foreground">Indemnification</h2>
            <p>
              You agree and acknowledge to defend, indemnify and hold Lucknow Homes and its affiliates, officers, agents, and employees harmless from and against any and all claims, losses, suits, damages, litigation costs and expenses or actions, and attorney's fees, arising from a third party(s) claim, and/or related to your use of the Site or violation of these terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-medium text-foreground">Copyright Notice</h2>
            <p>
              Unless otherwise noted, the graphic images, buttons and text contained in this Site are the exclusive property of Lucknow Homes and its subsidiaries. Except for personal use, these items may not be copied, distributed, displayed, reproduced, or transmitted, in any form or by any means, electronic, mechanical, photocopying, recording, or otherwise without prior written permission of Lucknow Homes. The copyright in the materials provided in the Site is vested with Lucknow Homes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-medium text-foreground">Trademarks</h2>
            <p>
              This Site features logos, brand identities and other trademarks and service marks (collectively, the "Marks") are the property of, or are licensed to Lucknow Homes and its subsidiaries. Nothing contained on this Site should be construed as granting, by implication, estoppel, or otherwise, any license or right to use any Mark displayed on this Site without prior written permission of Lucknow Homes and/or any such third party(s) that may own a Mark displayed on the Site.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-medium text-foreground">Links to Third Party Sites</h2>
            <p>
              As a convenience to users, this Site may link to other sites owned and operated by third parties and not maintained by Lucknow Homes. However, even if such third parties are affiliated with Lucknow Homes, Lucknow Homes has no control over these linked sites. The content of the site is the sole responsibility of such third parties that makes it available. Lucknow Homes is not responsible for the contents of the materials of any linked sites and does not make any representations or warranties regarding the content or accuracy of material on such sites. Viewing such third-party sites is entirely at your own consent and risk.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-medium text-foreground">Cautionary Language Regarding Forward-Looking Statements</h2>
            <p>
              This Site may contain statements, estimates or projections that constitute "forward-looking statements" as defined under U.S. federal securities laws. Any such forward looking statements are inherently speculative and are based on currently available information, operating plans and projections about future events and trends. As such, they are subject to numerous risks and uncertainties. Actual results and performance may be significantly different from Lucknow Homes historical experience and our present expectations or projections. Lucknow Homes undertakes no obligation to publicly update or revise any forward-looking statements.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-medium text-foreground">Jurisdiction</h2>
            <p>
              Lucknow Homes maintains and operates this Site from its offices in Lucknow, India. These Terms of Use are governed and interpreted under the local laws of Lucknow, India. By using this Site you consent to the jurisdiction of the courts located in Lucknow for any action and/or claims arising from these Terms of Use. If any portion of these Terms of Use is deemed unlawful, void or unenforceable, then that part shall be deemed severable and shall be construed in accordance with applicable law. Such a term will not affect the validity and enforceability of any remaining provisions. Lucknow Homes failure to act with respect to a breach of these Terms of Use by you or others does not constitute a waiver and shall not limit Lucknow Homes rights with respect to such breach or any subsequent breaches.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl font-medium text-foreground">Data Records</h2>
            <p>
              Lucknow Homes maintains and operates project websites and landing pages of partner developers. By exercising the option to access such websites and providing your personal information on it, which are collected for the purpose of providing residential real estate services by us, you waive off your right to Do Not Disturb as may be registered with your individual telecom service providers and grant Lucknow Homes the right to access, store and use these personal details and further, consent Lucknow Homes to reach out to you directly. All the voice conversation carried out between you and the employees of Lucknow Homes and/or such other third party(s) as may be engaged by Lucknow Homes, may also be monitored and recorded for record-keeping, training and quality-assurance purposes.
            </p>
          </section>
        </div>
      </div>
  );
}
