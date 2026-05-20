import CircleStat from "@/utils/CercleStats";
import CertItem from "@/utils/CerItem";

const WhyChoiceUs = () => {
  return (
    <section className="bg-black text-white overflow-hidden">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-16 py-20 lg:py-32">

        {/* MOBILE: STACK | DESKTOP: GRID */}
        <div className="flex flex-col gap-16 lg:grid lg:grid-cols-12 lg:gap-16 ">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-4 text-center lg:text-left space-y-5">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold ">
              <span className="gradient-text ">Company</span> Highlights
            </h2>

            <p className="text-gray-400 leading-relaxed max-w-md mx-auto lg:mx-0 text-sm sm:text-base">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>

          {/* CENTER STATS */}
          <div className="lg:col-span-3 flex justify-center gap-10 sm:gap-14 lg:flex-col">
            <CircleStat value="300+" text="Projects Delivered" />
            <CircleStat value="5+" text="Years Experience" />
          </div>

          {/* DIVIDER (DESKTOP ONLY) */}
          <div className="hidden lg:flex justify-center">
            <div className="w-px h-[320px] bg-white/20" />
          </div>

          {/* RIGHT CERTIFICATIONS */}
          <div className="lg:col-span-4 text-center lg:text-left">
            <h3 className="text-xl sm:text-2xl font-semibold mb-8">
              Certifications
            </h3>

            <div className="grid grid-cols-2 gap-8 place-items-center lg:place-items-start">
              <CertItem src="/icons/iso-certified.svg" label="ISO 9001: 2015" />
              <CertItem src="/icons/iso-certified.svg" label="ISO 14001: 2015" />
              <CertItem src="/icons/bafe-sp.svg" label="BAFE SP101" />
              <CertItem src="/icons/bafe-sp.svg" label="SSIP" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChoiceUs;
