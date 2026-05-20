interface ServeItem {
  icon: string;
  title: string;
  subtitle?: string;
  description: string;
  list1?: string[];
  list2?: string[]
  image: string;
  alt?: string
}

interface ServeData {
  title: string;
  subtitle: string;
  description: string;
  serve1: ServeItem[];
  serve2: ServeItem[];
  serve3: ServeItem[]
}




export const serveData: ServeData = {
  title: "Whom We",
  subtitle: "Serve",
  description:
    "We work with all kinds of businesses, from Startups to SMB’s and Large-scale enterprises!",
  serve1: [
    {
      icon: "icons/streamline.svg",
      title: "Startups",
      description: "Empowering startups with agile and scalable technology solutions that help turn innovative ideas into successful businesses. MVP Development Services Rapid Prototyping Solutions Scalable Architecture Design",
      list1: [
        'MVP Development Services',
        'Rapid Prototyping Solutions',
        'Scalable Architecture Design'
      ],
      list2: [
        'Lean & Agile Development',
        'Product Validation and Testing',
        'Growth Hacking Strategies'
      ],
      image: '/images/about/startup-business.svg',
      alt: 'Startup'

    },
  ],

  serve2: [
    {
      icon: "icons/smallbd.svg",
      title: "Small & Medium Sized",
      subtitle: "Businesses",
      description: "Empowering startups with agile and scalable technology solutions that help turn innovative ideas into successful businesses. MVP Development Services Rapid Prototyping Solutions Scalable Architecture Design",
      list1: [
        'MVP Development Services',
        'Rapid Prototyping Solutions',
        'Scalable Architecture Design',
        'Rapid Prototyping Solutions'
      ],

      image: '/images/about/small-business.svg',
      alt: 'Small Business'
    },
  ],

  serve3: [
    {
      icon: "icons/building.svg",
      title: "Large-Scale Enterprises",
      description: "Empowering startups with agile and scalable technology solutions that help turn innovative ideas into successful businesses. MVP Development Services Rapid Prototyping Solutions Scalable Architecture Design",
      list1: [
        'MVP Development Services',
        'Rapid Prototyping Solutions',
        'Scalable Architecture Design',
        'Rapid Prototyping Solutions'
      ],

      image: 'images/about/enterprise.svg',
      alt: 'Enterprise'
    },
  ]
};