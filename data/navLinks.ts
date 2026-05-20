// import { AllServiceData } from "./services/index";
// import { AllPagesData } from "./pageData";

// export interface NavLink {
//   name: string;
//   href?: string;
//   isMega?: boolean;
//   type?: string;
//   children?: any; 
// }

// // 1. MEGA MENU DATA FOR PAGES
// export const getMegaMenuDataForPages = () => {
//   return Object.keys(AllPagesData).map((key) => {
//     const page = AllPagesData[key];

//     // Ensure we are mapping an array of subPages
//     const subPagesArray = page.subPages
//       ? page.subPages.map((sub: any) => ({
//           name: sub.name,
//           slug: sub.slug, 
//           href: `/${page.slug}/${sub.slug}`, // Use the parent slug for cleaner routing
//           description: sub.name + " information."
//         }))
//       : [];

//     return {
//       id: key,
//       label: page.name,
//       href: `/${page.slug}`,
//       // WE USE 'subServices' HERE SO THE COMPONENT RECOGNIZES IT
//       subServices: subPagesArray 
//     };
//   });
// };

// // 2. MEGA MENU DATA FOR SERVICES
// export const getMegaMenuData = () => {
//   return Object.keys(AllServiceData).map((key) => {
//     const service = AllServiceData[key];

//     const subServices = service.subServices
//       ? Object.keys(service.subServices).map((subKey) => ({
//           name: service.subServices![subKey].name,
//           slug: subKey,
//           href: `/services/${key}/${subKey}`,
//           description: service.subServices![subKey].name + " solutions."
//         }))
//       : [];

//     return {
//       id: key,
//       label: service.name,
//       href: `/services/${key}`,
//       subServices: subServices, 
//     };
//   });
// };

// // 3. MAIN NAVIGATION ARRAY
// export const navLinks: NavLink[] = [
//   { name: "Home", href: "/" },
//   { name: "About", href: "/about" },
//   {
//     name: "Services",
//     href: "/services",
//     isMega: true,
//     children: getMegaMenuData(), 
//   },
//   { name: "Portfolio", href: "/portfolio" },
//   { name: "Contact", href: "/contact" },
//   {
//     name: "Pages",
//     href: "/pages", // Changed from "/" to avoid home redirect on click
//     isMega: true,
//     children: getMegaMenuDataForPages() // This is now correctly isolated
//   }
// ];

import { MegaMenuResponses, MenuItem } from "./megaMenuData";
export interface Navlink {
  name: string;
  href?: string;
  type?:string;
  isMega?: boolean;
  //we will use MenuItem type to ensure level 2 and level 3 consistency
  children?:MenuItem[];
}
// Main Navigation Array
export const navLinks:Navlink[]=[
  {
    name: "Home",
    href: "/"
  },
  {
    name: "About",
    href: "/about"
  },
  {
    name: "services",
    href: "/services",
    isMega: true,
    children: MegaMenuResponses["services"].menu,
  },
  // {
  //   name: "portfolio",
  //   href: "/portfolio"
  // },
  {
    name: "contact",
    href: "/contact"
  },
  {
    name: "pages",
    href: "/",
    isMega: true,
    children: MegaMenuResponses["pages"].menu
  }
]
