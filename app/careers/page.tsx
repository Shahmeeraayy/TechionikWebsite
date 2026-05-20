import LifeAtTechionik from "@/components/career/lifeAtTechionik";
import OpenPositions from "@/components/career/openPositions";
import HeroSection from "@/components/sections/home/hero/HeroSection";
import { CareerHeroData } from "@/data/career/careerHero";
import { lifeAtTechionikData } from "@/data/career/LifeAtTechionik";
import {
  getCareerDepartments,
  getCareerLocations,
  getCareers,
} from "../api/career/utils/getCareers";

export default async function CareerPage() {
  const [jobsRes, deptsRes, locsRes] = await Promise.all([
    getCareers(),
    getCareerDepartments(),
    getCareerLocations(),
  ]);

  const jobs = jobsRes?.data || [];
  const departments = deptsRes?.data || [];
  const locations = locsRes?.data || [];
  return (
    <div>
      <HeroSection slides={CareerHeroData} />
      <LifeAtTechionik data={lifeAtTechionikData} />
      <OpenPositions
        initialJobs={jobs}
        departments={departments}
        locations={locations}
      />
    </div>
  );
}
