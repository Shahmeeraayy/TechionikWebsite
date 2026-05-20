import { SoftwareSolutions} from "../SoftwareSolution";
import { HeroSlide } from "../HeroIndustryData";
import { ServiceWeProvide, Services} from "../ServiceWeProvideData"
import {WhatYouGett} from "../WhatYouGetData"
import {TechnologyExpertise} from "../technologyExpertiseData"
import { SoftwareInsights } from "../softwareInsightsData";
import { ContactHeroData } from "../ConnectHero";
import { WhatWeDo } from "../what-we-do-data";
import { FAQ } from "../FAQS";
import { IndustriesData } from "../Industries Data/types";
import { OutsourcingSlide } from "../outSourceModel";

export interface SingleService{
    slug: string;
    name: string;
    SoftwareSolutions?: SoftwareSolutions;
    HeroServiceData?: HeroSlide[];
    ServiceWeProvideLeftSection?: ServiceWeProvide;
    ServiceWeProvideRightSection?: Services[];
    WhatYouGet?: WhatYouGett;
    TechnologyExpertise?: TechnologyExpertise;
    SoftwareInsights?: SoftwareInsights
    ContactHero?: ContactHeroData;
    ContactHero1?: ContactHeroData;
    IndustriesSection?: IndustriesData;
    WhatWeDo?: WhatWeDo
    faqComponent?: FAQ
    OutsourcingModels?: OutsourcingSlide;
}

export interface MainCategory{
    name: string;
    subServices?: Record<string, SingleService>
    directData?: SingleService; 
}