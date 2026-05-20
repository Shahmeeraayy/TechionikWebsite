export interface CertificateHeadingData {
    heading: string;
    spanText: string;
    description: string;
    buttonText: string
}

export const CertificateHeadingData: CertificateHeadingData ={
    heading: "Industry Contribution",
    spanText: "Certifications",
    description: "Check TECHIONIK Software’s awards on rating and review platforms, recognized among the top software development companies, along with the certifications our team members hold.",
    buttonText: "Certifications"
}
export interface Certifications {
    image: string;
}

export const CertificationsData: Certifications[]=[
    {
        image: "/certificates/cisa.png"
    },
    {
        image: "/certificates/iso.png"
    },
    {
        image: "/certificates/aws.png"
    },
    {
        image: "/certificates/cisa.png"
    },
    {
        image: "/certificates/iso.png"
    },
    {
        image: "/certificates/aws.png"
    },
    
]