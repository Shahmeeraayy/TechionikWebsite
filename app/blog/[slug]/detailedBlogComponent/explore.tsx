import Link from "next/link";
import Image from "next/image";
interface ExploreBlog {
  image: string;
  heading: string;
  icon: string;
  href: string;
  width: string;
}
const ExploreBlog = ({
  image,
  heading,
  icon,
  width,
  href = "#",
}: ExploreBlog) => {
  return (
    <div className="space-y-3 h-46 w-full border border-(--color-muted) flex flex-col justify-center items-center px-6 rounded-lg relative overflow-hidden">
      <Link href={href}>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: `url(${image})`,
            opacity: 0.4,
          }}
        ></div>

        <div className="absolute inset-0 bg-black/40 z-1"></div>

        <div className="relative z-10 flex gap-3 justify-center items-center">
          <h5 className={`text-white ${width} font-semibold`}>{heading}</h5>

          <div className="w-10 h-10 rounded-full bg-primary-dark flex items-center justify-center">
            <Image src={icon} alt="arrow" width={20} height={20} className="w-5 h-5" />
          </div>
        </div>
      </Link>
    </div>
  );
};
export default ExploreBlog;
