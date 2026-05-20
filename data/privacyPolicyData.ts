export interface PrivacyPolicyData {
  title: string;
  description: string;
}
export const DummyPrivacyData = {
  title: "TECHIONIK Terms of Use",
  description: "These Terms of Use (“Terms”) are a legal contract between you and/or the entity or company that you represent (“you” or “your”) and TECHIONIK Ltd (“we”, “us” or “TECHIONIK”), and govern your use of all the text, data, information, software, graphics, and other content (collectively “Content”) that we and our affiliates may make available to you Read these terms carefully before browsing this website. Using this website indicates that you have both read and accept these terms. You cannot use this website if you do not accept these terms."
}

export interface TocItem {
  name: string;
  id: string;
}
export interface PrivacyPolicyDataItem {
  content: string;
  toc?: TocItem[];
}
export const DummyPrivacyPolicyDataItem: PrivacyPolicyDataItem[] = [
  {
    toc: [
      { name: "About This Privacy Policy", id: "about-this-privacy-policy" },
      { name: "Who We Are", id: "who-we-are" },
      { name: "Scope and Applicability of This Policy", id: "scope-and-applicability-of-this-policy" },
      { name: "Information We Collect About You", id: "information-we-collect-about-you" },
      { name: "How and Why We Use Your Information", id: "how-and-why-we-use-your-information" },
      { name: "Legal Basis for Processing Personal Information", id: "legal-basis-for-processing-personal-information" },
      { name: "Cookies and Similar Tracking Technologies", id: "cookies-and-similar-tracking-technologies" },
      { name: "Your Privacy and Data Protection Rights", id: "your-privacy-and-data-protection-rights" },
      { name: "How to Exercise Your Rights", id: "how-to-exercise-your-rights" },
      { name: "How We Share or Disclose Your Personal Information", id: "how-we-share-or-disclose-your-personal-information" },
      { name: "Data Retention and Deletion Practices", id: "data-retention-and-deletion-practices" },
      { name: "How We Protect Your Personal Information", id: "how-we-protect-your-personal-information" },
      { name: "Data Security Incidents and Breach Notification", id: "data-security-incidents-and-breach-notification" },
      { name: "Your Right to Opt-Out of Data Sale or Sharing", id: "your-right-to-opt-out-of-data-sale-or-sharing" },
      { name: "Children’s Privacy and Protection", id: "children-privacy-and-protection" },
      { name: "Where Your Personal Information Is Stored", id: "where-your-personal-information-is-stored" },
      { name: "Do Not Track (DNT) Signals", id: "do-not-track-dnt-signals" },
      { name: "Updates and Revisions to This Privacy Policy", id: "updates-and-revisions-to-this-privacy-policy" },
      { name: "How to Contact Us", id: "how-to-contact-us" },
      { name: "Compliance with International Privacy Regulations", id: "compliance-with-international-privacy-regulations" },
      { name: "Appendix I: UK GDPR & EU General Data Protection Regulation (GDPR)", id: "appendix-i-uk-gdpr-eu-general-data-protection-regulation-gdpr" },
      { name: "Appendix II: California Privacy Rights Act (CPRA)", id: "appendix-ii-california-privacy-rights-act-cpra" },
      { name: "Appendix III: Virginia Consumer Data Protection Act (VCDPA)", id: "appendix-iii-virginia-consumer-data-protection-act-vcdpa" },
      { name: "Appendix IV: Colorado Privacy Act (CPA)", id: "appendix-iv-colorado-privacy-act-cpa" },
      { name: "Appendix V: Connecticut Data Privacy Act (CTDPA)", id: "appendix-v-connecticut-data-privacy-act-ctdpa" },
  { name: "Appendix VI: Argentina Personal Data Protection Act (PDPA)", id: "appendix-vi-argentina-personal-data-protection-act-pdpa" },
  { name: "Appendix VII: Utah Consumer Privacy Act (UCPA)", id: "appendix-vii-utah-consumer-privacy-act-ucpa" },
  { name: "Appendix VIII: Texas Data Privacy and Security Act (TDPSA)", id: "appendix-viii-texas-data-privacy-and-security-act-tdpsa" },
  { name: "Appendix IX: Oregon Consumer Privacy Act (OCPA)", id: "appendix-ix-oregon-consumer-privacy-act-ocpa" },
  { name: "Appendix X: Florida Digital Bill of Rights (FDBR)", id: "appendix-x-florida-digital-bill-of-rights-fdbr" },
  { name: "Appendix XI: Montana Consumer Data Privacy Act (MCDPA)", id: "appendix-xi-montana-consumer-data-privacy-act-mcdpa" },
  { name: "Appendix XII: Delaware Personal Data Privacy Act (DPDPA)", id: "appendix-xii-delaware-personal-data-privacy-act-dpdpa" },
  { name: "Appendix XIII: Iowa Consumer Data Protection Act (ICDPA)", id: "appendix-xiii-iowa-consumer-data-protection-act-icdpa" },
  { name: "Appendix XIV: Nebraska Data Privacy Act (NDPA)", id: "appendix-xiv-nebraska-data-privacy-act-ndpa" },
  { name: "Appendix XV: Tennessee Information Protection Act (TIPA)", id: "appendix-xv-tennessee-information-protection-act-tipa" },
  { name: "Appendix XVI: New Hampshire Privacy Act (NHA)", id: "appendix-xvi-new-hampshire-privacy-act-nha" }

    ],
    content:
`
<h2 id="about-this-privacy-policy" class="text-muted">About This Privacy Policy</h2>
<p style="color: gray;">At Techionik Ltd., we value and respect your privacy. This Privacy Policy explains how we collect, use, process, store, and protect your personal information when you interact with us. Throughout this document, “Techionik Ltd.”, “we”, “us”, or “our” refers to Techionik Ltd. and its affiliated entities. This policy applies to personal information collected through various interactions with us, including through our website <a href="https://www.techionik.com" target="_blank" style="color: orange; text-decoration: underline;">www.techionik.com</a> (the “Website”), our sales and marketing activities, business communications, and any other engagement with our services. The purpose of this Privacy Policy is to provide transparency regarding the types of personal information we collect, the reasons for collecting it, and how it is used, shared, and safeguarded. It also outlines the rights you may have in relation to your personal data and the measures we take to protect your privacy. We process personal information in accordance with the <span style="color: white;">UK General Data Protection Regulation (UK GDPR)</span> and the <span style="color: white;">Data Protection Act 2018</span>. Additional information about specific privacy rights or legal requirements that may apply depending on your geographical location may be provided in supplementary sections or appendices to this policy. In cases where any appendix contains provisions that differ from the general policy, the terms outlined in the relevant appendix will apply. If you have any questions, concerns, or require further clarification regarding this Privacy Policy or our data practices, please feel free to contact us using the details provided in the Contact Information section.</p>

<h2 id="who-we-are" class="text-muted">Who We Are</h2> 
<p style="color: gray;">Techionik Ltd. is a software development and AI automation company that builds modern digital solutions for businesses. We specialize in custom software, web applications, and intelligent automation systems that improve operational efficiency. Our goal is to help organizations modernize their processes, reduce manual tasks, and scale through technology-driven innovation. Our registered office is located at <span style="color: white;">22 A High Street, Southend-on-Sea, United Kingdom, SS1 1DQ</span>. For the purposes of applicable data protection and privacy regulations, Techionik Ltd. acts as the data controller for the personal information collected through our website and related services. As the data controller, we are responsible for determining the purposes for which personal data is collected and how it is processed and safeguarded. Our website serves primarily as an informational and marketing platform through which we present our services, share insights, and communicate with potential clients, partners, and stakeholders. Any personal information collected through the website is used strictly for legitimate business purposes such as responding to inquiries and providing relevant service information. This Privacy Policy forms part of our broader website policies and should be read in conjunction with our terms and conditions. We may update this Privacy Policy periodically to reflect changes in our business practices or legal requirements. For any queries, please contact us at <a href="mailto:marketing@techionik.com" style="color: orange; text-decoration: underline;">marketing@techionik.com</a>.</p>

<h2 id="scope-and-applicability-of-this-policy" class="text-muted">Scope and Applicability of This Policy</h2>
<p style="color: gray;">This Privacy Policy governs the collection, processing, use, storage, and sharing of personal information by Techionik Ltd. through our website, digital platforms, and related services. This policy applies to all users, clients, partners, and visitors who interact with our services, regardless of location. It also applies to affiliates and authorized service providers that process data on our behalf.</p>
<p style="color: gray;">By using our website and services, you acknowledge that your personal information will be handled in accordance with this Privacy Policy.</p>

<h2 id="information-we-collect-about-you" class="text-muted">Information We Collect About You</h2>
<p style="color: gray;">Personal Information refers to any data that can identify you, such as your name, email address, phone number, or company details.</p>

<p style="color: gray;">We collect personal information through the following methods:</p>

<ul style="color: gray; list-style-type: disc; padding-left: 20px;">
  <li>Direct interactions: When you fill out contact forms, subscribe to newsletters, or communicate with us.</li>
  <li>Marketing and advertising activities: Through campaigns where we receive engagement data.</li>
  <li>Automatic collection: Through cookies and tracking technologies (e.g. IP address, browser type, pages visited).</li>
  <li>Third-party sources: From service providers supporting our business operations.</li>
</ul>

<p style="color: gray;">Categories of Personal Information We Collect:</p>

<ul style="color: gray; list-style-type: disc; padding-left: 20px;">
  <li>Contact Information: Name, email address, phone number, company name</li>
  <li>Technical Data: IP address, browser type, device information</li>
  <li>Usage Data: Website interaction, pages visited, engagement data</li>
  <li>Business Information: Service inquiries and preferences</li>
  <li>Geolocation Data: Approximate location derived from IP address</li>
</ul>

<p style="color: gray;">We may share your information with analytics providers, advertising platforms, CRM systems, and other authorized service providers that support our operations.</p>
<p style="color: gray;">We do not sell your personal information.</p>

<h2 id="how-and-why-we-use-your-information" class="text-muted">How and Why We Use Your Information</h2>
<p style="color: gray;">We use the personal information we collect to fulfil specific business, operational, and commercial purposes (the “Purposes”). These include:</p>

<ul style="color: gray; list-style-type: disc; padding-left: 20px;">
  <li>To provide the products, services, and information you request from us.</li>
  <li>To respond to your inquiries, requests, and communications promptly.</li>
  <li>To operate and manage our business, including processing orders, transactions, and service delivery.</li>
  <li>To follow up on products and services, including support via live chat, email, or phone.</li>
  <li>To provide updates on our products, services, events, and other relevant announcements.</li>
  <li>To personalize your experience, including customizing content and advertising.</li>
  <li>To improve and enhance the functionality, performance, and quality of our website and services.</li>
  <li>To analyze usage patterns and support research, testing, and development.</li>
  <li>To protect our rights, property, and the safety of our users or clients.</li>
  <li>To manage security and prevent unauthorized access or activity.</li>
  <li>To comply with applicable laws, regulations, or governmental requests.</li>
  <li>To enforce contractual rights, including billing and collections.</li>
</ul>

<p style="color: gray;">Personalization of content, analytics, and advertising is carried out only with your consent through cookies and similar tracking technologies.</p>

<p style="color: gray;">The information we collect also allows us to keep you informed about product announcements, software updates, and upcoming events. You may opt out of our mailing list at any time by contacting us at <span style="color: white;">lnfo@techionik.com</span>.</p>

<h2 id="legal-basis-for-processing-personal-information" class="text-muted">Legal Basis for Processing Personal Information</h2>
<p style="color: gray;">We process your personal information based on the following legal grounds in accordance with applicable data protection laws:</p>

<ul style="color: gray; list-style-type: disc; padding-left: 20px;">
  <li>Consent: Where you have given clear consent for us to process your personal information for a specific purpose. You have the right to withdraw your consent at any time.</li>
  <li>Performance of a Contract: Where processing is necessary to fulfil a contract with you or to take steps at your request before entering into a contract.</li>
  <li>Legal Obligation: Where we are required to process your personal information to comply with legal or regulatory obligations, including responding to requests from public authorities, courts, or regulators.</li>
  <li>Legitimate Interests: Where processing is necessary for our legitimate business interests, provided that such interests do not override your fundamental rights and freedoms. This may include improving our services, managing our operations, and ensuring the security of our systems.</li>
</ul>

<h2 id="cookies-and-similar-tracking-technologies" class="text-muted">Cookies and Similar Tracking Technologies</h2>
<p style="color: gray;">We use cookies and similar tracking technologies to recognize your device, improve your browsing experience, and analyze how our website is used. Cookies are small text files that are stored on your device when you visit a website. They help us understand user behavior, remember preferences, and improve the functionality and performance of our website. We use cookies only with your consent, except for those that are strictly necessary for the operation of the website.</p>

<p style="color: gray;">Categories of Cookies:</p>

<ul style="color: gray; list-style-type: disc; padding-left: 20px;">
  <li>Strictly Necessary Cookies: These cookies are essential for the website to function properly. They enable core features such as security, network management, and accessibility. These cookies do not require your consent.</li>
  <li>Performance and Analytics Cookies: These cookies collect information about how visitors use our website, such as pages visited and traffic sources. This data is aggregated and anonymous, and it helps us improve the performance and usability of our website.</li>
  <li>Functional Cookies: These cookies allow the website to remember your preferences, such as language or region, to provide a more personalized experience.</li>
  <li>Targeting and Advertising Cookies: These cookies are used to deliver relevant advertisements based on your interests. They may also limit the number of times you see an advertisement and help measure the effectiveness of marketing campaigns. These cookies may be set by third-party advertising platforms.</li>
</ul>

<p style="color: gray;">How We Use Cookies:</p>

<ul style="color: gray; list-style-type: disc; padding-left: 20px;">
  <li>Understand and remember your preferences for future visits</li>
  <li>Analyze website traffic and user behavior</li>
  <li>Improve website functionality and performance</li>
  <li>Personalize content and advertising (only with your consent)</li>
</ul>

<p style="color: gray;">We may use trusted third-party services such as analytics providers and advertising platforms to help us collect and analyze this information.</p>

<p style="color: gray;">Web Beacons: We may use web beacons (small graphic images embedded in web pages or emails) to monitor user activity, measure the effectiveness of our communications, and improve our services.</p>

<p style="color: gray;">Managing Your Cookie Preferences: You have full control over your cookie preferences.</p>

<ul style="color: gray; list-style-type: disc; padding-left: 20px;">
  <li>Consent Management: You can accept or reject non-essential cookies through our cookie consent banner when you first visit our website.</li>
  <li>Browser Settings: You can manage or disable cookies through your web browser settings. Please note that disabling certain cookies may affect the functionality of the website.</li>
  <li>Mobile Devices: You can limit personalized advertising through your device settings (available on both Android and iOS).</li>
</ul>

<p style="color: gray;">Third-Party Cookies: Some cookies may be placed by third-party service providers, such as analytics tools and advertising networks. These third parties may collect information about your online activities over time and across different websites. We do not control these cookies. You are encouraged to review the privacy policies of these third parties for more information on how they use your data.</p>

<h2 id="your-privacy-and-data-protection-rights" class="text-muted">Your Privacy and Data Protection Rights</h2>
<p style="color: gray;">Under applicable data protection laws, including the UK GDPR and Data Protection Act 2018, you have specific rights regarding your personal information. We are committed to providing transparency, security, and control over your data. You may exercise the following rights:</p>

<p style="color: gray;">Right to Access Your Personal Information:</p>
<ul style="color: gray; list-style-type: disc; padding-left: 20px;">
  <li>The categories of personal information we have collected</li>
  <li>The sources from which we collected the information</li>
  <li>The purpose for which the information was collected, used, or shared</li>
  <li>The categories of third parties with whom we share your information</li>
  <li>The specific pieces of personal information we hold about you</li>
</ul>

<p style="color: gray;">To make a request, please use our <a href="#" style="color: orange;">Contact Form</a> or email us at <a href="mailto:legal@techionik.com" style="color: orange; display:none">legal@techionik.com</a>.</p>

<p style="color: gray;">Right to Correct or Update Your Information: You have the right to request correction of any inaccurate or incomplete personal information we hold about you. We will take reasonable steps to ensure your information is accurate and up-to-date.</p>

<p style="color: gray;">Right to Delete Your Personal Information: You may request deletion of your personal data, subject to certain legal or contractual obligations that may prevent full deletion. We will handle such requests in accordance with applicable law.</p>

<p style="color: gray;">Right to Restrict or Limit Use of Sensitive Information:</p>
<ul style="color: gray; list-style-type: disc; padding-left: 20px;">
  <li>Racial or ethnic origin</li>
  <li>Political opinions</li>
  <li>Religious or philosophical beliefs</li>
  <li>Trade union membership</li>
  <li>Genetic or biometric data for unique identification</li>
  <li>Health data, sex life, or sexual orientation</li>
</ul>

<p style="color: gray;">We will only process sensitive data to the extent necessary to provide the services or fulfil our legal obligations.</p>

<p style="color: gray;">Right to Opt-Out of Sharing or Sale of Personal Information: You have the right to opt-out of the sale or sharing of your personal information with third parties, where applicable. Please refer to Section 14 for more details.</p>

<p style="color: gray;">Right to Transparency Regarding Disclosure:</p>
<ul style="color: gray; list-style-type: disc; padding-left: 20px;">
  <li>Categories of personal information shared or sold about you</li>
  <li>Categories of third parties to whom your information was disclosed</li>
  <li>Categories of personal information disclosed for a business purpose</li>
</ul>

<p style="color: gray;">Right to No Retaliation:</p>
<ul style="color: gray; list-style-type: disc; padding-left: 20px;">
  <li>Deny you our products or services</li>
  <li>Charge different prices or rates</li>
  <li>Provide a lower level or quality of services</li>
  <li>Take any other negative action against you</li>
</ul>

<h2 id="how-to-exercise-your-rights" class="text-muted">How to Exercise Your Rights</h2>
<p style="color: gray;">You may exercise any of your rights under this Privacy Policy by submitting a request through our Contact Form: <a href="https://www.techionik.com/contact-us/" target="_blank" style="color: orange;">https://www.techionik.com/contact-us/</a> or by contacting us via email at <a href="mailto:info@techionik.com" style="color: orange; display:none">info@techionik.com</a>.</p>

<p style="color: gray; font-weight: 700;">Verification of Identity:</p>
<p style="color: gray;">To protect your personal information, we may need to verify your identity before processing your request. We will use the information already available to us for verification purposes. If necessary, we may request additional information solely to confirm your identity. This information will only be used for verification and security purposes. If you have an account with us, we may verify your identity through your account credentials.</p>

<p style="color: gray; font-weight: 700;">Response Time:</p>
<p style="color: gray;">We will respond to your request within the timeframes required under applicable data protection laws. Where no specific timeframe is stated, we will respond within 30-45 days from the date your request is received.</p>

<p style="color: gray; font-weight: 700;">Limitations and Exceptions:</p>
<p style="color: gray;">Please note that certain rights may be subject to legal limitations or exemptions under applicable laws. In such cases, we will inform you accordingly while handling your request.</p>

<h2 id="how-we-share-or-disclose-your-personal-information" class="text-muted">How We Share or Disclose Your Personal Information</h2>
<p style="color: gray;">We process and deliver our services, as outlined in this Privacy Policy. Your personal information may be transferred to and processed in countries outside your country of residence, including the United Kingdom and other jurisdictions where our affiliates or service providers operate. In such cases, we ensure that appropriate safeguards are in place to protect your data in accordance with applicable data protection laws.</p>

<p style="color: gray; font-weight: 700">We may share your personal information with:</p>

<ul style="color: gray; list-style-type: disc; padding-left: 20px;">
  <li>Affiliates and Group Companies: To support our business operations and provide our services.</li>
  <li>Service Providers: Including analytics providers, CRM systems, cloud hosting providers, and IT support services that help us operate our business efficiently.</li>
  <li>Advertising and Marketing Platforms: To deliver relevant advertisements and measure the effectiveness of our campaigns (only with your consent where required).</li>
  <li>Business Partners and Channel Partners: Where necessary to deliver services or collaborate on projects.</li>
  <li>Legal and Regulatory Authorities: Where disclosure is required to comply with legal obligations, court orders, or governmental requests.</li>
</ul>

<p style="color: gray; font-weight: 700">International Data Transfers:</p>
<p style="color: gray;">As we operate globally, your personal information may be transferred to countries that may have different data protection laws. Where such transfers occur, we implement appropriate safeguards, such as contractual protections and compliance mechanisms, to ensure your data remains protected in line with applicable regulations.</p>

<p style="color: gray; font-weight: 700">Business Transfers:</p>
<p style="color: gray;">In the event of a merger, acquisition, restructuring, or sale of assets, your personal information may be transferred to a relevant third party. We will ensure that your information remains protected and will notify you if it becomes subject to a different privacy policy.</p>

<p style="color: gray; font-weight: 700">Third-Party Advertising and External Links:</p>
<p style="color: gray;">Our website may contain links to third-party websites or display advertisements from external providers. Please note that once you leave our website, we are not responsible for the privacy practices or content of those third-party platforms. Any personal information you provide on such websites will be governed by their respective privacy policies. We encourage you to review the privacy policies of any third-party websites you visit.</p>

<h2 id="data-retention-and-deletion-practices" class="text-muted">Data Retention and Deletion Practices</h2>
<p style="color: gray;">We retain your personal information only for as long as necessary to fulfil the purposes outlined in this Privacy Policy, including providing our services, complying with legal obligations, resolving disputes, and enforcing our agreements.</p>

<p style="color: gray;">When your personal information is no longer required, we will securely delete or anonymize it in accordance with applicable data protection laws.</p>

<p style="color: gray;">You have the right to request the deletion of your personal information at any time. Upon receiving such a request, we will take reasonable steps to delete your data, unless we are required or permitted to retain certain information for legal, regulatory, or legitimate business purposes.</p>

<h2 id="how-we-protect-your-personal-information" class="text-muted">How We Protect Your Personal Information</h2>
<p style="color: gray;">We are committed to protecting the security and confidentiality of your personal information. Our systems are designed with security and privacy in mind, and we implement appropriate technical, administrative, and organizational measures to safeguard your data.</p>

<p style="color: gray;">These measures include, but are not limited to:</p>

<ul style="color: gray; list-style-type: disc; padding-left: 20px;">
  <li>Data encryption</li>
  <li>Access controls and authentication mechanisms</li>
  <li>Pseudonymization where appropriate</li>
  <li>Secure storage and monitoring systems</li>
</ul>

<p style="color: gray;">Despite our best efforts, please note that no system or method of data transmission over the internet is completely secure. Therefore, while we strive to protect your personal information, we cannot guarantee absolute security.</p>

<p style="color: gray; font-weight: 700">Your Responsibility:</p>

<ul style="color: gray; list-style-type: disc; padding-left: 20px;">
  <li>Use strong and unique passwords</li>
  <li>Do not share your login credentials with others</li>
  <li>Log out of your account after use</li>
  <li>Ensure you are signed out when using shared or public devices</li>
</ul>

<h2 id="data-security-incidents-and-breach-notification" class="text-muted">Data Security Incidents and Breach Notification</h2>
<p style="color: gray;">While we implement appropriate technical and organizational measures to protect your personal information, no system can be guaranteed to be completely secure. In the event of a data security incident or personal data breach, we will take all necessary steps to promptly identify, contain, and mitigate its impact.</p>

<p style="color: gray;">Where required under applicable data protection laws, we will notify the relevant regulatory authorities and affected individuals within the prescribed timeframes.</p>

<p style="color: gray;">We are committed to handling any such incidents in a transparent and responsible manner, in accordance with legal and regulatory requirements.</p>

<h2 id="your-right-to-opt-out-of-data-sale-or-sharing" class="text-muted">Your Right to Opt-Out of Data Sale or Sharing</h2>
<p style="color: gray;">You have the right to request that we do not share your personal information with third parties for certain purposes.</p>

<p style="color: gray;">As outlined in this Privacy Policy, we may share your information with trusted service providers and partners to support our business operations. However, we do not sell your personal information to third parties in exchange for money or other consideration.</p>

<p style="color: gray;">If you prefer that we do not share your personal information, you may exercise your right to opt-out at any time by:</p>

<ul style="color: gray; list-style-type: disc; padding-left: 20px;">
  <li>Contacting us at <a href="mailto:info@techionik.com" style="color: orange;  display:none</a></li>
  <li>Submitting a request through our <a href="https://www.techionik.com/contact-us/" target="_blank" style="color: orange;">Contact Form</a> and including the subject line: “Do Not Share My Personal Information”</li>
</ul>

<p style="color: gray;">Important Note: Please be aware that if you choose to opt-out of certain data sharing activities, it may impact our ability to provide some features or services effectively.</p>

<h2 id="children-privacy-and-protection" class="text-muted">Children’s Privacy and Protection</h2>
<p style="color: gray;">We are committed to protecting the privacy of children. Our services are not intended for individuals under the age of <span style="color: white;">18</span>, or the minimum legal age required in the applicable jurisdiction.</p>

<p style="color: gray;">We do not knowingly collect, use, process, or store personal information from individuals under this age. If you are under the applicable age limit, please do not use our services or provide any personal information.</p>

<p style="color: gray;">If we become aware that we have inadvertently collected personal information from a child—particularly under the age of <span style="color: white;">13</span> without verifiable parental consent—we will take immediate steps to delete such information from our records.</p>

<h2 id="where-your-personal-information-is-stored" class="text-muted">Where Your Personal Information Is Stored</h2>
<p style="color: gray;">Your personal information is stored on secure servers and systems managed by us or our trusted service providers. These systems are designed to ensure the confidentiality, integrity, and availability of your data.</p>

<p style="color: gray;">Where necessary, your information may be stored or processed in different locations, including outside your country of residence. In such cases, we ensure that appropriate safeguards are in place to protect your personal information in accordance with applicable data protection laws.</p>

<h2 id="do-not-track-dnt-signals" class="text-muted">Do Not Track (DNT) Signals</h2>
<p style="color: gray;">Our website does not currently respond to or recognize “Do Not Track” (DNT) signals sent by web browsers.</p>

<p style="color: gray;">However, third-party service providers, such as analytics and advertising platforms, may collect information about users’ online activities over time and across different websites when interacting with our site. This information is generally collected in an aggregated and anonymized form.</p>

<p style="color: gray;">Please note that, in certain cases, third parties may combine this information with other data they hold, which could potentially lead to user identification. We do not control such third-party data practices, and we encourage you to review their respective privacy policies for more information.</p>

<h2 id="updates-and-revisions-to-this-privacy-policy" class="text-muted">Updates and Revisions to This Privacy Policy</h2>
<p style="color: gray;">We may update this Privacy Policy from time to time to reflect changes in our business practices, services, or legal requirements.</p>

<p style="color: gray;">We encourage you to review this page periodically to stay informed about how we protect your personal information. Unless otherwise stated, any updates will apply to all personal information we hold about you.</p>

<p style="color: gray;">Any changes to this Privacy Policy will be posted on this page. Where appropriate, we may also notify you through other communication channels, such as email.</p>

<p style="color: gray;">The most current version of this Privacy Policy will always be indicated by the effective date displayed at the bottom of this page.</p>

<h2 id="how-to-contact-us" class="text-muted">How to Contact Us</h2>
<p style="color: gray;">Thank you for taking the time to read our Privacy Policy.</p>

<p style="color: gray;">If you have any questions, requests, or concerns regarding this Privacy Policy or our data practices, please contact us at:</p>

<p style="color: gray;">Email: <a href="mailto:info@techionik.com" style="color: orange;  display:none">info@techionik.com</a></p>

<p style="color: gray;">We will make every reasonable effort to respond to your inquiry in a timely and appropriate manner.</p>

<p style="color: gray;">Last Updated: <span style="color: white;">30 March 2026</span></p>

<h2 id="compliance-with-international-privacy-regulations" class="text-muted">Compliance with International Privacy Regulations</h2>
<p style="color: gray;">We are committed to complying with applicable data protection and privacy laws in the regions where we operate or where our users are located. The following appendices outline additional rights and obligations under specific regulations.</p>

<h2 id="compliance-with-international-privacy-regulations" class="text-muted">Appendix I: UK GDPR & EU General Data Protection Regulation (GDPR)</h2>
<p style="color: gray;">We are committed to complying with applicable data protection and privacy laws in the regions where we operate or where our users are located. The following appendices outline additional rights and obligations under specific regulations.</p>

<p style="color: gray;">Appendix I: UK GDPR & EU General Data Protection Regulation (GDPR)</p>

<p style="color: gray;">Scope: This section applies to individuals located in the United Kingdom and European Economic Area (EEA), where personal data is processed under the UK GDPR and EU GDPR (Regulation <span style="color: white;">2016/679</span>).</p>

<p style="color: gray;">Your Rights as a Data Subject:</p>
<ul style="color: gray; list-style-type: disc; padding-left: 20px;">
  <li>Restrict Processing: Request limitation of how your personal data is processed</li>
  <li>Data Portability: Receive your data in a structured, machine-readable format and transfer it to another controller</li>
  <li>Object to Automated Decision-Making: Not be subject to decisions based solely on automated processing, including profiling</li>
  <li>Withdraw Consent: Withdraw your consent at any time without affecting prior lawful processing</li>
</ul>

<p style="color: gray;">How to Exercise Your Rights: We will respond to your request within <span style="color: white;">1 month</span> of receipt. In complex cases, this may be extended by up to <span style="color: white;">2 additional months</span>, and you will be informed accordingly.</p>

<p style="color: gray;">Sensitive Personal Data includes:</p>
<ul style="color: gray; list-style-type: disc; padding-left: 20px;">
  <li>Racial or ethnic origin</li>
  <li>Political opinions</li>
  <li>Religious or philosophical beliefs</li>
  <li>Trade union membership</li>
  <li>Genetic or biometric data</li>
  <li>Health information or sexual orientation</li>
</ul>

<p style="color: gray;">We process such data only when legally permitted under Article <span style="color: white;">9</span> of the GDPR.</p>

<p style="color: gray;">Children’s Data: For users under the age of <span style="color: white;">16</span>, processing is only lawful with verified parental or guardian consent.</p>

<p style="color: gray;">Data Security and Breach Notification: In the event of a data breach, we will notify affected individuals and relevant authorities as required under applicable law.</p>

<h2 id="appendix-ii-california-privacy-rights-act-cpra" class="text-muted">Appendix II: California Privacy Rights Act (CPRA)</h2>

<p style="color: gray;">Scope: This section applies to residents of California, United States.</p>

<p style="color: gray;">Your Rights include:</p>
<ul style="color: gray; list-style-type: disc; padding-left: 20px;">
  <li>Access to your personal information</li>
  <li>Request deletion (subject to legal exceptions)</li>
  <li>Correction of inaccurate data</li>
  <li>Opt-out of data sharing</li>
  <li>Limit use of sensitive personal information</li>
</ul>

<p style="color: gray;">Response Time: We will respond within <span style="color: white;">30-45 days</span>, with a possible extension of an additional <span style="color: white;">45 days</span> where necessary.</p>

<p style="color: gray;">Sensitive Personal Information includes:</p>
<ul style="color: gray; list-style-type: disc; padding-left: 20px;">
  <li>Government identification numbers</li>
  <li>Financial account details</li>
  <li>Precise geolocation</li>
  <li>Health and biometric data</li>
</ul>

<p style="color: gray;">We use such data only where necessary and in compliance with applicable laws.</p>

<h2 id="appendix-iii-virginia-consumer-data-protection-act-vcdpa" class="text-muted">Appendix III: Virginia Consumer Data Protection Act (VCDPA)</h2>

<p style="color: gray;">Scope: Applies to residents of Virginia, United States.</p>

<p style="color: gray;">Additional Rights:</p>
<ul style="color: gray; list-style-type: disc; padding-left: 20px;">
  <li>Request a portable copy of your data</li>
  <li>Opt-out of targeted advertising and profiling</li>
</ul>

<p style="color: gray;">Response Time & Appeals: Requests are handled within <span style="color: white;">45 days</span>. If denied, you may submit an appeal via <a href="mailto:info@techionik.com" style="color: orange;  display:none">info@techionik.com</a>, and we will respond within <span style="color: white;">60 days</span>.</p>

<p style="color: gray;">Sensitive Data: Processed only with your explicit consent.</p>

<h2 id="appendix-iv-colorado-privacy-act-cpa" class="text-muted">Appendix IV: Colorado Privacy Act (CPA)</h2>

<p style="color: gray;">Scope: Applies to residents of Colorado, United States.</p>

<p style="color: gray;">Your Rights:</p>
<ul style="color: gray; list-style-type: disc; padding-left: 20px;">
  <li>Data portability</li>
  <li>Opt-out of targeted advertising and profiling</li>
</ul>

<p style="color: gray;">Response & Appeals: Requests are handled within <span style="color: white;">45 days</span>, with extension options where applicable. Appeals can be submitted via <a href="mailto:info@techionik.com" style="color: orange;  display:none">info@techionik.com</a>.</p>

<p style="color: gray;">Sensitive Data: Processed only with your consent.</p>

<h2 id="appendix-v-connecticut-data-privacy-act-ctdpa" class="text-muted">Appendix V: Connecticut Data Privacy Act (CTDPA)</h2>

<p style="color: gray;">Scope: Applies to residents of Connecticut, United States.</p>

<p style="color: gray;">Your Rights:</p>
<ul style="color: gray; list-style-type: disc; padding-left: 20px;">
  <li>Access and obtain a copy of your data</li>
  <li>Request deletion or correction</li>
  <li>Opt-out of targeted advertising and profiling</li>
</ul>

<p style="color: gray;">Response & Appeals: Requests are handled within <span style="color: white;">45 days</span>, with extensions where necessary. Appeals can be submitted via <a href="mailto:info@techionik.com" style="color: orange; display:none">info@techionik.com</a>.</p>

<p style="color: gray;">Sensitive Data: Processed only with your explicit consent.</p>

<h2 id="appendix-v-connecticut-data-privacy-act-ctdpa" class="text-muted">Appendix V: Connecticut Data Privacy Act (CTDPA)</h2>

<p style="color: gray;">
This section applies to residents of Connecticut whose personal data is processed under the CTDPA.
</p>

<p style="color: gray;">
<strong>Your Rights:</strong> In addition to the rights outlined in Section 8, you have the right to:
<ul style="color: gray;">
  <li>Obtain a copy of your personal information in a portable and usable format</li>
  <li>Opt-out of targeted advertising and profiling</li>
</ul>
</p>

<p style="color: gray;">
<strong>How to Exercise Your Rights:</strong> We will respond to your request within 45 days. If necessary, this period may be extended by an additional 45 days, and you will be informed accordingly. If your request is denied, you may submit an appeal by contacting us at <a href="mailto:lnfo@techionik.com" style="color: orange; text-decoration: underline;">lnfo@techionik.com</a>. We will respond to appeals within 60 days.
</p>

<p style="color: gray;">
<strong>Sensitive Personal Information:</strong> Sensitive data includes:
<ul style="color: gray;">
  <li>Racial or ethnic origin, religious beliefs, health data, or sexual orientation</li>
  <li>Genetic or biometric data</li>
  <li>Data of a known child</li>
  <li>Precise geolocation</li>
</ul>
We process such data only with your explicit consent.
</p>

<p style="color: gray;">
<strong>Children’s Data:</strong> For individuals under 13 years of age, data processing is only permitted with parental or guardian consent, in accordance with applicable laws.
</p>

<h2 id="appendix-vi-argentina-personal-data-protection-act-pdpa" class="text-muted">Appendix VI: Argentina Personal Data Protection Act (PDPA)</h2>

<p style="color: gray;">
This section applies to residents of Argentina.
</p>

<p style="color: gray;">
<strong>Your Rights:</strong>
<ul style="color: gray;">
  <li>Request access to your personal information</li>
  <li>Request correction or updates</li>
  <li>Request deletion where applicable</li>
</ul>
You may also request information from the supervisory authority regarding how your data is processed.
</p>

<p style="color: gray;">
<strong>How to Exercise Your Rights:</strong>
<ul style="color: gray;">
  <li>Within 10 calendar days for access requests</li>
  <li>Within 5 business days for correction or deletion requests</li>
</ul>
You may contact us at <a href="mailto:lnfo@techionik.com" style="color: orange; text-decoration: underline;">lnfo@techionik.com</a>.
</p>

<p style="color: gray;">
<strong>Sensitive Personal Information:</strong> Includes data revealing:
<ul style="color: gray;">
  <li>Racial or ethnic origin</li>
  <li>Political opinions</li>
  <li>Religious beliefs</li>
  <li>Health data or sexual orientation</li>
</ul>
Such data is processed only in accordance with applicable laws.
</p>

<p style="color: gray;">
<strong>Children’s Data:</strong> For individuals under 18, processing is lawful only where consent is provided by the individual (based on maturity) or their legal guardian.
</p>

<p style="color: gray;">
<strong>Data Security:</strong> We implement appropriate technical and organizational measures to protect your personal information in accordance with applicable regulations.
</p>

<h2 id="appendix-vii-utah-consumer-privacy-act-ucpa" class="text-muted">Appendix VII: Utah Consumer Privacy Act (UCPA)</h2>

<p style="color: gray;">
This section applies to residents of Utah, United States.
</p>

<p style="color: gray;">
<strong>Your Rights:</strong>
<ul style="color: gray;">
  <li>Access and obtain a copy of your personal information</li>
  <li>Opt-out of targeted advertising</li>
  <li>Opt-out of processing of sensitive data</li>
  <li>Receive clear notice before sensitive data processing</li>
  <li>Non-discrimination for exercising your rights</li>
</ul>
</p>

<p style="color: gray;">
<strong>How to Exercise Your Rights:</strong> We will respond within 45 days, with a possible extension of an additional 45 days where necessary.
</p>

<p style="color: gray;">
<strong>Sensitive Personal Information:</strong>
<ul style="color: gray;">
  <li>Health data, religious beliefs, sexual orientation, or citizenship status</li>
  <li>Genetic or biometric data</li>
  <li>Precise geolocation</li>
</ul>
We process such data only with your consent.
</p>

<p style="color: gray;">
<strong>Children’s Data:</strong> For individuals under 13, processing is only permitted with parental consent.
</p>

<h2 id="appendix-viii-texas-data-privacy-and-security-act-tdpsa" class="text-muted">Appendix VIII: Texas Data Privacy and Security Act (TDPSA)</h2>

<p style="color: gray;">
This section applies to residents of Texas, United States.
</p>

<p style="color: gray;">
<strong>Your Rights:</strong>
<ul style="color: gray;">
  <li>Access and obtain a copy of your personal information</li>
  <li>Opt-out of targeted advertising and profiling</li>
  <li>Data portability</li>
  <li>Non-discrimination for exercising your rights</li>
</ul>
</p>

<p style="color: gray;">
<strong>How to Exercise Your Rights:</strong> We will respond within 45 days, with a possible extension where necessary. If your request is denied, you may submit an appeal via <a href="mailto:lnfo@techionik.com" style="color: orange; text-decoration: underline;">lnfo@techionik.com</a>, and we will respond within 60 days.
</p>

<p style="color: gray;">
<strong>Sensitive Personal Information:</strong>
<ul style="color: gray;">
  <li>Racial or ethnic origin, religious beliefs, health data, or sexual orientation</li>
  <li>Genetic or biometric data</li>
  <li>Data of a known child</li>
  <li>Precise geolocation</li>
</ul>
Such data is processed only with your explicit consent.
</p>

<p style="color: gray;">
<strong>Children’s Data:</strong> For individuals under 13, processing is only permitted with parental or guardian consent.
</p>

<h2 id="appendix-ix-oregon-consumer-privacy-act-ocpa" class="text-muted">Appendix IX: Oregon Consumer Privacy Act (OCPA)</h2>

<p style="color: gray;">
This section applies to residents of Oregon whose personal data is processed under the OCPA.
</p>

<p style="color: gray;">
<strong>Your Rights:</strong>
<ul style="color: gray;">
  <li>Access: Obtain a copy of your personal information in a portable and usable format</li>
  <li>Opt-out of targeted advertising and profiling: You may also designate an authorized agent to act on your behalf</li>
  <li>Non-discrimination: You will not be denied products or services, charged differently, or provided lower-quality services for exercising your rights</li>
</ul>
</p>

<p style="color: gray;">
<strong>How to Exercise Your Rights:</strong> We will respond to your request within 45 days. If necessary, this period may be extended by another 45 days, and we will notify you of the reasons for the delay. If your request is denied, you may submit an appeal to <a href="mailto:lnfo@techionik.com" style="color: orange; text-decoration: underline;">lnfo@techionik.com</a>. Appeals will be responded to within 45 days. You may also contact the Oregon Attorney General to submit a complaint.
</p>

<p style="color: gray;">
<strong>Sensitive Personal Information:</strong>
<ul style="color: gray;">
  <li>Racial or ethnic background, religion, health data, sexual orientation, gender identity, crime victim status, citizenship, or immigration status</li>
  <li>Precise geolocation (within 1,750 feet)</li>
  <li>Genetic or biometric data</li>
  <li>Data of a child</li>
</ul>
We process such data only with your explicit consent.
</p>

<p style="color: gray;">
<strong>Children’s Data:</strong> For individuals under 13, processing is permitted only with parental or guardian consent, in compliance with COPPA. Guardians or conservators may also exercise rights on behalf of a protected consumer.
</p>

<h2 id="appendix-x-florida-digital-bill-of-rights-fdbr" class="text-muted">Appendix X: Florida Digital Bill of Rights (FDBR)</h2>

<p style="color: gray;">
This section applies to residents of Florida whose personal data is processed under the FDBR.
</p>

<p style="color: gray;">
<strong>Your Rights:</strong>
<ul style="color: gray;">
  <li>Access: Obtain your personal information in a portable and usable format</li>
  <li>Opt-out of targeted advertising and profiling: Includes the sale or sharing of your personal information</li>
  <li>Non-discrimination: You will not be treated differently for exercising your rights</li>
</ul>
</p>

<p style="color: gray;">
<strong>How to Exercise Your Rights:</strong> We will respond within 45 days of receiving your request. In complex cases, this may be extended by an additional 15 days. If denied, you may appeal via <a href="mailto:lnfo@techionik.com" style="color: orange; text-decoration: underline;">lnfo@techionik.com</a>. Requests are free of charge up to twice per year unless excessive, repetitive, or unfounded.
</p>

<p style="color: gray;">
<strong>Sensitive Personal Information:</strong>
<ul style="color: gray;">
  <li>Racial or ethnic origin, religious beliefs, health data, sexual orientation, or citizenship status</li>
  <li>Genetic or biometric data used for identification</li>
  <li>Data of a known child</li>
  <li>Precise geolocation</li>
</ul>
We process such data only with your explicit consent.
</p>

<p style="color: gray;">
<strong>Children’s Data:</strong> For individuals under 18, processing is lawful only with parental or legal guardian consent, in compliance with COPPA.
</p>

<p style="color: gray;">
<strong>Data Security:</strong> We implement technical, administrative, and physical safeguards to protect your personal information and ensure integrity, security, and prevention of unauthorized access or breaches.
</p>

<h2 id="appendix-xi-montana-consumer-data-privacy-act-mcdpa" class="text-muted">Appendix XI: Montana Consumer Data Privacy Act (MCDPA)</h2>

<p style="color: gray;">
This section applies to individuals residing in Montana where their personal information is processed under the MCDPA.
</p>

<p style="color: gray;">
<strong>Your Rights:</strong>
<ul style="color: gray;">
  <li>Request access and portability of personal information in a structured, commonly used, and portable format</li>
  <li>Opt-out of processing for targeted advertising or profiling that results in significant effects</li>
</ul>
</p>

<p style="color: gray;">
<strong>Exercising Your Rights:</strong> We will respond within 45 days of receipt. If required, this may be extended by an additional 45 days. If denied, you will receive an explanation and instructions to appeal. Requests are generally free once per 12 months.
</p>

<p style="color: gray;">
<strong>Sensitive Data:</strong> May include racial or ethnic origin, religious beliefs, health information, sexual orientation, citizenship status, biometric or genetic data, children’s data, and precise geolocation. Processed only with explicit consent.
</p>

<p style="color: gray;">
<strong>Children’s Privacy:</strong> Handled in accordance with COPPA. Parents or guardians may exercise rights for children under 13.
</p>

<p style="color: gray;">
<strong>Data Security:</strong> We implement administrative, technical, and physical safeguards and notify in case of a breach.
</p>

<h2 id="appendix-xii-delaware-personal-data-privacy-act-dpdpa" class="text-muted">Appendix XII: Delaware Personal Data Privacy Act (DPDPA)</h2>

<p style="color: gray;">
This section applies to residents of Delaware where personal information is processed under the DPDPA.
</p>

<p style="color: gray;">
<strong>Your Rights:</strong>
<ul style="color: gray;">
  <li>Request a copy of personal information in a portable format</li>
  <li>Opt out of targeted advertising, profiling, and sensitive data processing</li>
  <li>Receive prior notice before sensitive data processing</li>
  <li>Request details of third parties with whom data has been shared</li>
  <li>Exercise rights without discrimination</li>
</ul>
</p>

<p style="color: gray;">
<strong>Exercising Your Rights:</strong> We aim to respond within 45 days, extendable up to 45 days if needed. Denials include explanation and appeal instructions.
</p>

<p style="color: gray;">
<strong>Sensitive Data:</strong> Includes race, religion, health, sexual orientation, biometric identifiers, children’s data, and geolocation. Processed only with consent.
</p>

<p style="color: gray;">
<strong>Data Security:</strong> We maintain safeguards and notify in case of a data breach.
</p>

<p style="color: gray;">
<strong>Children’s Privacy:</strong> Complies with COPPA. Parents or guardians may exercise rights for children under 13.
</p>
<h2 id="appendix-xiii-iowa-consumer-data-protection-act-icdpa" class="text-muted">Appendix XIII: Iowa Consumer Data Protection Act (ICDPA)</h2>

<p style="color: gray;">
This section applies to residents of Iowa where personal information is processed under the ICDPA.
</p>

<p style="color: gray;">
<strong>Your Rights:</strong>
<ul style="color: gray;">
  <li>Request a copy of your Personal Information in electronic format</li>
  <li>Opt out of the sale of your Personal Information</li>
  <li>Exercise your rights without discrimination</li>
</ul>
</p>

<p style="color: gray;">
<strong>Exercising Your Rights:</strong> We will respond within 90 days of receipt, extendable by 45 days if needed. Denials may be appealed within 60 days. Requests are generally free up to twice per year.
</p>

<p style="color: gray;">
<strong>Limitations:</strong> Requests may be refused if identity cannot be verified, or if requests are excessive, repetitive, or not permitted by law.
</p>

<p style="color: gray;">
<strong>Sensitive Data:</strong> Includes racial or ethnic origin, religious beliefs, health conditions, sexual orientation, biometric/genetic data, children’s data, and precise geolocation. Processed only with consent.
</p>

<p style="color: gray;">
<strong>Children’s Privacy:</strong> Processed in compliance with COPPA. Parents or guardians may exercise rights for children under 13.
</p>

<p style="color: gray;">
<strong>Data Security:</strong> Administrative, technical, and physical safeguards are applied. Breaches will be notified as required by law.
</p>

<h2 id="appendix-xiv-nebraska-data-privacy-act-ndpa" class="text-muted">Appendix XIV: Nebraska Data Privacy Act (NDPA)</h2>

<p style="color: gray;">
This section applies to residents of Nebraska where personal information is processed under the NDPA.
</p>

<p style="color: gray;">
<strong>Your Rights:</strong>
<ul style="color: gray;">
  <li>Right to Access and Portability: request personal information in a structured, commonly used, portable format</li>
  <li>Right to Opt-Out of Targeted Advertising and Profiling: opt out of processing for targeted advertising or profiling</li>
</ul>
</p>

<p style="color: gray;">
<strong>Exercising Your Rights:</strong> Responses within 45 days, extendable by 45 days if necessary. Denials include explanation and appeal instructions (<a href="mailto:lnfo@Techionik.com" style="color: orange; text-decoration: underline;">lnfo@Techionik.com</a>). Free of charge up to twice per year.
</p>

<p style="color: gray;">
<strong>Restrictions:</strong> Requests may be limited if identity cannot be verified or if multiple requests are submitted within 12 months.
</p>

<p style="color: gray;">
<strong>Sensitive Information:</strong> Includes racial or ethnic origin, religious beliefs, health conditions, sexual orientation, citizenship, genetic/biometric data, children’s data, and precise geolocation. Processed only with explicit consent.
</p>

<p style="color: gray;">
<strong>Children’s Privacy:</strong> For individuals under 13. Parents or legal guardians may act on their behalf per COPPA.
</p>

<p style="color: gray;">
<strong>Data Security:</strong> Administrative, technical, and physical safeguards are applied. Breaches are notified under state law.
</p>

<h2 id="appendix-xv-tennessee-information-protection-act-tipa" class="text-muted">Appendix XV: Tennessee Information Protection Act (TIPA)</h2>

<p style="color: gray;">
This section applies to residents of Tennessee where personal information is processed under TIPA.
</p>

<p style="color: gray;">
<strong>Your Rights:</strong>
<ul style="color: gray;">
  <li>Right to Access and Portability: request personal information in a structured, portable, and usable format</li>
  <li>Right to Know: request information about categories of personal information disclosed for commercial purposes, including third-party categories</li>
</ul>
</p>

<p style="color: gray;">
<strong>Exercising Your Rights:</strong> Requests answered within 45 days, extendable by 45 days. Denials include explanation and appeal instructions (<a href="mailto:lnfo@Techionik.com" style="color: orange; text-decoration: underline;">lnfo@Techionik.com</a>). Appeals resolved within 60 days. Free up to twice per year.
</p>

<p style="color: gray;">
<strong>Restrictions:</strong> Requests may be declined if identity cannot be verified, or if requests are excessive, repetitive, or not permitted by law.
</p>

<p style="color: gray;">
<strong>Sensitive Information:</strong> Includes racial or ethnic origin, religious beliefs, health conditions, sexual orientation, citizenship, biometric/genetic data, children’s data, and precise geolocation. Processed only with explicit consent.
</p>

<p style="color: gray;">
<strong>Children’s Privacy:</strong> Children under 13 protected by COPPA. Parents or guardians may act on their behalf.
</p>

<p style="color: gray;">
<strong>Data Security:</strong> Administrative, technical, and physical safeguards applied. Breaches communicated promptly per state law.
</p>

<h2 id="appendix-xvi-new-hampshire-privacy-act-nha" class="text-muted">Appendix XVI: New Hampshire Privacy Act (NHA)</h2>

<p style="color: gray;">
This section applies to residents of New Hampshire where personal information is processed under NHA regulations.
</p>

<p style="color: gray;">
<strong>Your Rights:</strong>
<ul style="color: gray;">
  <li>Right to Access and Portability: request personal information in a portable and readily usable format</li>
  <li>Right to Opt-Out of Profiling and Targeted Advertising: opt out of profiling, targeted advertising, and sale/sharing of information</li>
</ul>
</p>

<p style="color: gray;">
<strong>Exercising Your Rights:</strong> Responses within 45 days, extendable by 45 days with notice. Denials include explanation and appeal instructions (<a href="mailto:lnfo@Techionik.com" style="color: orange; text-decoration: underline;">lnfo@Techionik.com</a>). Appeals resolved within 60 days. Requests are free once per 12 months.
</p>

<p style="color: gray;">
<strong>Restrictions:</strong> Rights may be limited if identity cannot be verified, disclosure involves trade secrets, or requests are otherwise restricted by law.
</p>

<p style="color: gray;">
<strong>Sensitive Information:</strong> Includes racial or ethnic origin, religious beliefs, health conditions, sexual orientation, citizenship, biometric/genetic data, children’s data, and precise geolocation. Processed only with consent.
</p>

<p style="color: gray;">
<strong>Children’s Privacy:</strong> Children under 13 protected under COPPA. Parents or guardians may act on their behalf.
</p>

<p style="color: gray;">
<strong>Data Security:</strong> Administrative, technical, and physical safeguards applied. Breaches communicated promptly as required by law.
</p>
`
  },
];
