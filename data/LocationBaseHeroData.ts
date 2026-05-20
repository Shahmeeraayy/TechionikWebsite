export interface ContactData {
    header: {
        mainTitle: string;
        highlightTitle: string;
        lastTitle: string;
        description: string;
        image: string;
    };
    form: {
        title: string;
        placeholders: {
            name: string;
            email: string;
            number: string;
            country: string;
            company: string;
            message: string;
        };
        checkboxtex: string;
        Form_Description: string
        buttonText: string;
        buttonLink: string;
        buttonVariant?: "glass" | "gradient" | "solid";
        buttonIcon?: string;
    };
}

export const contactSectionData: ContactData = {
    header: {
        mainTitle: "Custom",
        highlightTitle: "Software Development",
        lastTitle: "Outsourcing Services Trusted Across North America",
        description: "Build your nearshore team in one of our 11 delivery centers across 3 countries, tapping into diverse tech talent pools while benefiting from cultural alignment and time zone compatibility for seamless collaboration.",
        image: "/3bfd051f51f4ccd9c9abe10674e2cd060cfee26b.png"
    },
    form: {
        title: "Learn more about our nearshore development service options",
        placeholders: {
            name: "Enter Your Name",
            email: "Enter Your Email",
            number: "Enter Your Number",
            country: "Country",
            company: "Company",
            message: "How we can help?",
        },
        checkboxtex: "I want to receive news and updates once in a while",
        Form_Description: "We will add your info to our CRM for contacting you regarding your request. For more info please consult our privacy policy",
        buttonText: "Send Message",
        buttonLink: "#contact",
        buttonVariant: "glass",
        buttonIcon: "/icons/arrow-right.svg",
    },
};