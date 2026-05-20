import Image from "next/image";

interface Props {
  description: string;
  imageUrl: string;
  altText: string;
}

const CultureImageText = ({ description, imageUrl, altText }: Props) => {
  return (
    <div className="space-y-14 sm:pr-8 pr-0">
      {/* CHANGED: Added mt-2 to push the text down just enough to align perfectly with the icon on the right */}
      <p className="body-2 text-gray-400 mt-2">
        {description}
      </p>
      
      <div className="relative w-full h-71.75">
        <Image
            src={imageUrl}
            alt={altText}
            fill
            className="object-cover rounded-lg"
            />
        </div>
    </div>
  );
};

export default CultureImageText;