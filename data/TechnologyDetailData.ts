export interface TechnologyDetail {
  id: string;
  slug: string;
  name: string;
  logo: string;
  category: string;
  description: string;
  longDescription: string;
  features: string[];
  useCases: {
    title: string;
    description: string;
  }[];
  benefits: {
    title: string;
    description: string;
  }[];
  relatedTechnologies: string[];
}

export const TechnologyDetailsData: Record<string, TechnologyDetail> = {
  "c-plus-plus": {
    id: "1",
    slug: "c-plus-plus",
    name: "C++",
    logo: "/icons/tech-c++.svg",
    category: "Web (Back-end)",
    description: "High-performance programming language for system and application software",
    longDescription:
      "C++ is a powerful, high-performance programming language that combines the benefits of low-level memory access with object-oriented programming. It's widely used for developing system software, game engines, and performance-critical applications.",
    features: [
      "High performance and efficiency",
      "Object-oriented programming support",
      "Memory management control",
      "Standard Template Library (STL)",
      "Multi-paradigm language",
      "Backward compatibility with C",
    ],
    useCases: [
      {
        title: "Game Development",
        description: "Used in major game engines like Unreal Engine for high-performance graphics and gameplay",
      },
      {
        title: "System Software",
        description: "Operating systems, embedded systems, and drivers",
      },
      {
        title: "High-Frequency Trading",
        description: "Financial systems requiring ultra-low latency",
      },
      {
        title: "Real-time Applications",
        description: "Applications requiring predictable performance and minimal latency",
      },
    ],
    benefits: [
      {
        title: "Maximum Performance",
        description: "Direct memory manipulation allows for optimized, high-speed execution",
      },
      {
        title: "Large Community",
        description: "Extensive resources, libraries, and experienced developers",
      },
      {
        title: "Cross-platform",
        description: "Code can run on various platforms from embedded systems to desktops",
      },
      {
        title: "Rich Ecosystem",
        description: "Thousands of libraries and frameworks for various use cases",
      },
    ],
    relatedTechnologies: ["Java", "GO", "Node JS"],
  },
  java: {
    id: "2",
    slug: "java",
    name: "Java",
    logo: "/icons/tech-Java.svg",
    category: "Web (Back-end)",
    description: "Versatile, object-oriented programming language for enterprise applications",
    longDescription:
      "Java is one of the most widely-used programming languages in the world. It follows the write-once, run-anywhere principle, making it ideal for building scalable, enterprise-level applications.",
    features: [
      "Object-oriented programming",
      "Platform independence (JVM)",
      "Automatic garbage collection",
      "Strong type checking",
      "Rich standard library",
      "Built-in security features",
    ],
    useCases: [
      {
        title: "Enterprise Applications",
        description: "Large-scale business applications with high reliability requirements",
      },
      {
        title: "Android Development",
        description: "Primary language for native Android app development",
      },
      {
        title: "Web Services",
        description: "Building RESTful APIs and microservices",
      },
      {
        title: "Big Data Processing",
        description: "Integration with Hadoop, Spark, and other big data frameworks",
      },
    ],
    benefits: [
      {
        title: "Platform Independent",
        description: "Write once, run anywhere with JVM support",
      },
      {
        title: "Highly Scalable",
        description: "Excellent support for multi-threading and distributed computing",
      },
      {
        title: "Security",
        description: "Built-in security features for secure application development",
      },
      {
        title: "Mature Ecosystem",
        description: "Decades of evolution with robust frameworks like Spring, Hibernate",
      },
    ],
    relatedTechnologies: ["C++", "GO", ".Net"],
  },
  go: {
    id: "3",
    slug: "go",
    name: "GO",
    logo: "/icons/tech-go.svg",
    category: "Web (Back-end)",
    description: "Modern programming language designed for simplicity and concurrent programming",
    longDescription:
      "Go (Golang) is a statically typed, compiled language designed by Google. It emphasizes simplicity, fast execution, and efficient concurrency handling, making it perfect for building scalable cloud-native applications.",
    features: [
      "Fast compilation and execution",
      "Built-in concurrency (goroutines)",
      "Simple and clean syntax",
      "Static typing with type inference",
      "Cross-platform compilation",
      "Excellent standard library",
    ],
    useCases: [
      {
        title: "Cloud Infrastructure",
        description: "Used in Docker, Kubernetes, and many cloud-native tools",
      },
      {
        title: "Microservices",
        description: "Building lightweight, scalable microservices",
      },
      {
        title: "API Development",
        description: "Fast and efficient REST API servers",
      },
      {
        title: "DevOps Tools",
        description: "Building deployment and infrastructure automation tools",
      },
    ],
    benefits: [
      {
        title: "Concurrent Programming",
        description: "Goroutines provide elegant solution for concurrent tasks",
      },
      {
        title: "Fast Deployment",
        description: "Single binary compilation eliminates dependency management",
      },
      {
        title: "Minimal Learning Curve",
        description: "Clean syntax and simple language design",
      },
      {
        title: "Production Ready",
        description: "Used in production by major tech companies like Google, Uber, Dropbox",
      },
    ],
    relatedTechnologies: ["C++", "Java", "Node JS"],
  },
  "node-js": {
    id: "4",
    slug: "node-js",
    name: "Node JS",
    logo: "/icons/tech-Node.svg",
    category: "Web (Back-end)",
    description: "JavaScript runtime for server-side development with event-driven architecture",
    longDescription:
      "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It enables developers to use JavaScript for server-side programming, combining it with client-side development for a unified full-stack experience.",
    features: [
      "Event-driven, non-blocking I/O",
      "Single-threaded event loop",
      "NPM package manager (largest ecosystem)",
      "JavaScript for full-stack development",
      "Lightweight and efficient",
      "Real-time capabilities",
    ],
    useCases: [
      {
        title: "Real-time Applications",
        description: "Chat applications, live notifications, and collaborative tools",
      },
      {
        title: "REST APIs",
        description: "Building fast and scalable API servers",
      },
      {
        title: "Single Page Applications",
        description: "Full-stack JavaScript development with React, Vue, Angular",
      },
      {
        title: "Streaming Applications",
        description: "Video/audio streaming and data processing",
      },
    ],
    benefits: [
      {
        title: "JavaScript Everywhere",
        description: "Use one language for frontend and backend development",
      },
      {
        title: "Large Ecosystem",
        description: "Millions of NPM packages for rapid development",
      },
      {
        title: "High Performance",
        description: "Non-blocking I/O model suits I/O-heavy operations",
      },
      {
        title: "Easy Scalability",
        description: "Designed to build distributed systems efficiently",
      },
    ],
    relatedTechnologies: ["Java", "GO", ".Net"],
  },
  "vue-js": {
    id: "5",
    slug: "vue-js",
    name: "Vue JS",
    logo: "/icons/tech-Vue.svg",
    category: "Web (Front-end)",
    description: "Progressive JavaScript framework for building user interfaces",
    longDescription:
      "Vue.js is a progressive JavaScript framework for building user interfaces. It features an approachable, performant, and versatile ecosystem that scales from simple interactive pages to complex single-page applications.",
    features: [
      "Reactive data binding",
      "Component-based architecture",
      "Simple and intuitive syntax",
      "Virtual DOM",
      "Composition API",
      "Single File Components",
    ],
    useCases: [
      {
        title: "Single Page Applications",
        description: "Build dynamic, interactive web applications",
      },
      {
        title: "Progressive Enhancement",
        description: "Add interactivity to existing websites incrementally",
      },
      {
        title: "Real-time Dashboards",
        description: "Create responsive data visualization interfaces",
      },
      {
        title: "Mobile Applications",
        description: "Using NativeScript or similar frameworks",
      },
    ],
    benefits: [
      {
        title: "Gentle Learning Curve",
        description: "Easier to learn compared to React and Angular",
      },
      {
        title: "Flexible",
        description: "Use as little or as much as you need in your application",
      },
      {
        title: "Excellent Documentation",
        description: "Comprehensive and beginner-friendly documentation",
      },
      {
        title: "Strong Community",
        description: "Growing ecosystem with many high-quality libraries",
      },
    ],
    relatedTechnologies: ["JavaScript", "Node JS", "HTML"],
  },
  "dot-net": {
    id: "6",
    slug: "dot-net",
    name: ".Net",
    logo: "/icons/tech-Dot-Net.svg",
    category: "Web (Back-end)",
    description: "Microsoft's powerful framework for building diverse applications",
    longDescription:
      ".NET is a free, cross-platform, open-source developer platform from Microsoft for building various types of applications including web, mobile, desktop, and gaming applications.",
    features: [
      "Cross-platform support",
      "Language interoperability",
      "Strong type system",
      "Comprehensive libraries",
      "Built-in dependency injection",
      "Entity Framework ORM",
    ],
    useCases: [
      {
        title: "Enterprise Web Applications",
        description: "Scalable business applications with high performance",
      },
      {
        title: "Cloud Applications",
        description: "Azure integration and cloud-native development",
      },
      {
        title: "Desktop Applications",
        description: "Windows desktop and WPF applications",
      },
      {
        title: "Game Development",
        description: "Using Unity game engine",
      },
    ],
    benefits: [
      {
        title: "Performance",
        description: "Industry-leading performance benchmarks",
      },
      {
        title: "Microsoft Support",
        description: "Backed by Microsoft with continuous updates",
      },
      {
        title: "Unified Platform",
        description: "Build for web, mobile, desktop with one platform",
      },
      {
        title: "Azure Integration",
        description: "Seamless integration with Microsoft Azure services",
      },
    ],
    relatedTechnologies: ["Java", "GO", "Node JS"],
  },
  php: {
    id: "7",
    slug: "php",
    name: "PHP",
    logo: "/icons/tech-Php.svg",
    category: "Web (Back-end)",
    description: "Server-side scripting language for web development",
    longDescription:
      "PHP is a popular open-source, general-purpose scripting language especially suited to web development. It can be easily embedded into HTML and has a very reasonable learning curve for beginners.",
    features: [
      "Easy to learn and use",
      "Wide hosting support",
      "Extensive built-in functions",
      "Database integration",
      "Session management",
      "Regular expression support",
    ],
    useCases: [
      {
        title: "Content Management Systems",
        description: "Powers WordPress, Drupal, and other popular CMS platforms",
      },
      {
        title: "Server-side Rendering",
        description: "Dynamic HTML generation based on user requests",
      },
      {
        title: "E-commerce Platforms",
        description: "Building online stores and shopping carts",
      },
      {
        title: "Web APIs",
        description: "Creating API endpoints for frontend applications",
      },
    ],
    benefits: [
      {
        title: "Quick Development",
        description: "Rapid prototyping and development cycles",
      },
      {
        title: "Widespread Support",
        description: "Supported by almost all web hosting providers",
      },
      {
        title: "Large Community",
        description: "Extensive resources and frameworks like Laravel, Symfony",
      },
      {
        title: "Cost-effective",
        description: "Open-source and inexpensive hosting options",
      },
    ],
    relatedTechnologies: ["JavaScript", "Node JS", "Java"],
  },
  html: {
    id: "8",
    slug: "html",
    name: "HTML",
    logo: "/icons/tech-Html.svg",
    category: "Web (Front-end)",
    description: "HyperText Markup Language for creating web pages",
    longDescription:
      "HTML is the standard markup language for creating web pages. It provides the structure and content of websites and is the foundation of all front-end web development.",
    features: [
      "Semantic markup",
      "Form elements",
      "Accessibility features",
      "Meta tags for SEO",
      "Multimedia support",
      "Responsive design capabilities",
    ],
    useCases: [
      {
        title: "Web Pages",
        description: "Creating the structure and content of websites",
      },
      {
        title: "Email Templates",
        description: "Designing HTML-based email communications",
      },
      {
        title: "Progressive Web Apps",
        description: "Foundation for app-like web experiences",
      },
      {
        title: "Digital Documents",
        description: "Creating structured documents for the web",
      },
    ],
    benefits: [
      {
        title: "Universal Standard",
        description: "Supported by all web browsers worldwide",
      },
      {
        title: "Easy to Learn",
        description: "Simple syntax and structure",
      },
      {
        title: "SEO Friendly",
        description: "Semantic markup improves search engine optimization",
      },
      {
        title: "Accessibility",
        description: "Built-in features for accessible web design",
      },
    ],
    relatedTechnologies: ["JavaScript", "Vue JS", "CSS"],
  },
  javascript: {
    id: "9",
    slug: "javascript",
    name: "JavaScript",
    logo: "/icons/tech-Javascript.svg",
    category: "Web (Front-end)",
    description: "Versatile scripting language that powers interactive web experiences",
    longDescription:
      "JavaScript is the programming language of the web. It enables interactive and dynamic content on web pages and has evolved to support full-stack development with runtimes like Node.js.",
    features: [
      "Dynamic typing",
      "First-class functions",
      "Prototypal inheritance",
      "Event handling",
      "DOM manipulation",
      "Async/await support",
    ],
    useCases: [
      {
        title: "Interactive Web Pages",
        description: "Add interactivity and dynamic behavior to websites",
      },
      {
        title: "Single Page Applications",
        description: "Build complex, responsive web applications",
      },
      {
        title: "Backend Development",
        description: "Server-side development using Node.js",
      },
      {
        title: "Cross-platform Development",
        description: "Mobile and desktop apps using frameworks",
      },
    ],
    benefits: [
      {
        title: "Universal Language",
        description: "Runs on all web browsers without compilation",
      },
      {
        title: "Full-stack Development",
        description: "Use one language for frontend and backend",
      },
      {
        title: "Rich Ecosystem",
        description: "Millions of packages via NPM",
      },
      {
        title: "Constantly Evolving",
        description: "Regular updates and new features with modern standards",
      },
    ],
    relatedTechnologies: ["HTML", "Vue JS", "Node JS"],
  },
};
