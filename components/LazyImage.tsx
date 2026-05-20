import Image, { ImageProps } from "next/image";

type DynamicImageProps = ImageProps & {
  variant?: "rounded" | "circle" | "card" | "none"; // border radius / style
  aspectRatio?: string; // e.g., "16/9", "4/3", "1/1"
  className?: string; // extra Tailwind classes
  priority?: boolean; // optional priority
  fill?: boolean;     // optional fill
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down"; // image fit
  style?: React.CSSProperties; // inline styles if needed
};

export function ImageComponent({
  variant = "rounded",
  aspectRatio,
  className = "",
  priority,
  fill,
  objectFit = "cover",
  style,
  ...props
}: DynamicImageProps) {
  const variantClasses: Record<string, string> = {
    rounded: "rounded-lg",
    circle: "rounded-full",
    card: "rounded-xl shadow-lg",
    none: "",
  };

  // Wrapper class for aspect ratio
  const wrapperClass = aspectRatio ? `relative w-full aspect-[${aspectRatio}]` : "relative inline-block";

  return (
    <div className={wrapperClass}>
      <Image
        {...props}
        className={`${variantClasses[variant]} ${className} object-${objectFit}`}
        style={style}
        {...(priority ? { priority: true } : {})}
        {...(fill ? { fill: true } : {})}
      />
    </div>
  );
}

export default ImageComponent;