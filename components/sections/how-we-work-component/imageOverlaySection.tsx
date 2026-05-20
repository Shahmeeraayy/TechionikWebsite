import Image from "next/image";

interface ImageOverlaySectionProps {
  image: string;
  heading: string;
  description: string;
  spanText: string;
}
const ImageOverLaySection = ({
  image,
  heading,
  description,
  spanText,
}: ImageOverlaySectionProps) => {
  return (
    <>
      <div className="relative flex justify-center my-12 md:my-16 lg:my-20">
        {/* Wrapper to control fixed image width */}
        <div className="relative w-full max-w-[1200px]">
          {/* IMAGE (Width unchanged) */}
          <Image
            className="rounded-2xl w-full h-auto object-cover"
            //   src="/images/how-we-work/team-discussion.jpg"
            src={image}
            alt="About Us"
            width={1200}
            height={600}
          />

          {/* OVERLAY (Desktop Only) */}
          <div
            className="
          hidden lg:flex
          absolute bottom-0 left-0
          w-[45%]
          bg-[black]
          rounded-tr-3xl
          p-8
          items-center
        "
          >
            <div>
              <h2 className="text-muted text-3xl font-semibold">
                <span className="gradient-text">{spanText} </span>
                {heading}
              </h2>

              <p className="text-muted mt-4 text-base leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* BELOW IMAGE (Tablet + Mobile Only) */}
      <div className="lg:hidden max-w- mx-auto bg-black rounded-2xl p-6 md:p-8">
        <h2 className="text-muted text-2xl md:text-3xl font-semibold">
          <span className="gradient-text">{spanText} </span>
          {heading}
        </h2>

        <p className="text-muted mt-4 text-sm md:text-base leading-relaxed">
          {description}
        </p>
      </div>
    </>
  );
};
export default ImageOverLaySection;
