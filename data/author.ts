// data/author.ts
export interface AuthorData {
    title: string
    name: string;
    role: string;
    image: string;
    linkedinUrl: string;
    bio: string;
}

export const authorData: AuthorData = {
    title: "About Author",
    name: "Ahmad Hassan",
    role: "Content Writer",
    image: "/images/home/ali-haider.webp",
    linkedinUrl: "https://linkedin.com/in/yourprofile",
    bio: "Ahmed Hassan is the Assistant Manager, Brand & Communications at TECHIONIK, bringing five years of deep expertise in the IT outsourcing industry. He crafts thought leadership on staff augmentation, dedicated development teams, and full-cycle outsourcing, with a focus on building and scaling Global Capability Centers and Offshore Capability Centers. Ahmed’s insights span cloud services, back-end frameworks (Java, .NET, Node.js), and front-end technologies (React, Angular, Vue.js), positioning TECHIONIK as a trusted partner for end-to-end outsourced software delivery worldwide."
};