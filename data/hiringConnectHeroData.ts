import { IconType } from "react-icons";

export interface ContactHeroFeature {
    icon: IconType;
    text: string;
}

export interface ContactHeroData {
    title: string;
    highlight?: string;
    description: string;
    backgroundImage: string;
    features?: ContactHeroFeature[];
    buttonText: string;
    buttonLink: string;
    buttonVariant?: "glass" | "gradient" | "solid";
    buttonIcon?: string;
}

// import { HiOutlineUserGroup } from "react-icons/hi";
// import { MdOutlinePayments } from "react-icons/md";

export const hiringConnectData = {
    title: "Build Your Dream Tech Team Offshore",
    highlight: "",
    description:
        "Access pre-vetted developers across top tech stacks",
    backgroundImage: "/879587540b91e93c5048ef637642b401c8bc0f8c.jpg",
    // features: [
    //     // { icon: "MdOutlinePayments", text: "100% Safe Payment" },
    //     // { icon: "HiOutlineUserGroup", text: "1k+ People Trust Us" },
    // ],
    buttonText: "Hire Developer Now",
    buttonLink: "#contact",
    buttonVariant: "glass",
    buttonIcon: "/icons/arrow-right.svg",
};
