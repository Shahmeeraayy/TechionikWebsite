export type IndustrySlide = {
  title: string;
  description: string;
  icon: string;
  link: string;
  bgImage: string;
};

export type IndustriesData = {
  title: string;
  gradientTitle: string;
  afterGradientTitle?: string;
  description: string;
  slides: IndustrySlide[];
  hideViewAllButton?: boolean;
  hideCardButtons?: boolean;
  showAllDescriptions?: boolean;
};
