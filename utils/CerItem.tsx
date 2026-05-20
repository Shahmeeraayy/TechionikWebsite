import Image from "next/image";

const CertItem = ({ src, label }: any) => (
  <div className="flex flex-col items-center gap-2 sm:gap-3">
    <Image
      src={src}
      alt={label}
      width={80}
      height={80}
      loading="lazy"
      className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 object-contain animate-bounce "
    />
    <span className="text-gray-400 text-xs sm:text-sm md:text-base text-center">
      {label}
    </span>
  </div>
);
export default CertItem;
