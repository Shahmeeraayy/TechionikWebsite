export interface TermsHeader {
    title: string;
    description: string;
}   
export const TermsHeaderData:TermsHeader={
    title:"TECHIONIK Terms of Use",
    description:"These Terms of Use (“Terms”) are a legal contract between you and/or the entity or company that you represent (“you” or “your”) and TECHIONIK Ltd (“we”, “us” or “TECHIONIK”), and govern your use of all the text, data, information, software, graphics, and other content (collectively “Content”) that we and our affiliates may make available to you Read these terms carefully before browsing this website. Using this website indicates that you have both read and accept these terms. You cannot use this website if you do not accept these terms."
}

export interface TocItem{
    name: string;
    id: string;
}

export interface TermsDataItem{
    content: string;
    toc?: TocItem[];
}

export const TermsDataItem: TermsDataItem[] = [
  {
    toc: [
      { name: "Terms of Service", id: "terms-of-service" },
      { name: "Acceptance of Terms", id: "acceptance-of-terms" },
      { name: "Copyright and Trademark Notice", id: "copyright-and-trademark-notice" },
      { name: "Permitted Use", id: "permitted-use" },
      { name: "Legal Disclaimer and Liability", id: "legal-disclaimer-and-liability" },
      { name: "Severability", id: "severability" }
    ],
    content: `
<h2 id="terms-of-service" class="text-muted">Terms of Service</h2>
<p style="color: gray;">
These Terms and Conditions govern your use of the websites located at, or linked to, the URLs www.Techionik.com and hire.www.Techionik.com, including all services offered, information provided, registration in our database, newsletters, promotional emails, and related links (collectively, the “Sites”). Please read these Terms carefully before using the Sites.
</p>

<h2 id="acceptance-of-terms" class="text-muted">Acceptance of Terms</h2>
<p style="color: gray;">
By using any of our Sites, you agree to comply with these Terms and Conditions and all applicable laws and regulations. These Terms supersede any conflicting terms included in purchase orders or other agreements, whether or not signed by Techionik Ltd (“TechionikLtd,” “we,” or “us”).
</p>
<p style="color: gray;">
We reserve the right to update these Terms at any time. Changes become effective immediately upon posting on the Sites. Violation of these Terms may result in termination of your access to the Sites, restriction from future use, and/or legal action.
</p>

<h2 id="copyright-and-trademark-notice" class="text-muted">Copyright and Trademark Notice</h2>
<p style="color: gray;">
All content on our Sites is copyrighted by TechionikLtd, unless otherwise stated. All rights are reserved. Content may not be reproduced, downloaded, distributed, or transmitted in any form without our prior written consent, except as outlined below.
</p>

<h2 id="permitted-use" class="text-muted">Permitted Use</h2>
<p style="color: gray;">
Users may download pages or other content for personal use on a single device.
</p>
<p style="color: gray;">
Material from the Sites may not be copied, modified, published, or distributed for any other purpose without express authorization and attribution to TechionikLtd.
</p>
<p style="color: gray;">
Deep-linking to the Sites is prohibited unless specifically authorized by TechionikLtd.
</p>

<h2 id="legal-disclaimer-and-liability" class="text-muted">Legal Disclaimer and Liability</h2>
<p style="color: gray;">
Our Sites and the information contained herein are provided “as is.” While we strive to provide accurate and reliable information, TechionikLtd does not guarantee its completeness, accuracy, or timeliness and does not endorse any specific products, services, or third-party content.
</p>
<p style="color: gray;">
External links on the Sites lead to independent websites not controlled by TechionikLtd. We are not responsible for the content or accuracy of such external sites. Use of information obtained from external links is voluntary and should be independently verified.
</p>
<p style="color: gray;">
TechionikLtd disclaims all liability for any damages arising from the use, reference, or reliance on information provided on the Sites or linked websites.
</p>

<h2 id="severability" class="text-muted">Severability</h2>
<p style="color: gray;">
If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will remain in full force and effect, as if the invalid provision were omitted.
</p>
`
  }
];