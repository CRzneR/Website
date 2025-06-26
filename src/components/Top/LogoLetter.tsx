import React from "react";

interface LetterImageProps {
  svgPath: "/iamge/c.svg"; // Pfad zur SVG im public-Ordner
  imageSrc: "/image/nebular.jpg"; // Pfad zum Hintergrundbild
  width?: number | string;
  height?: number | string;
  className?: string;
  style?: React.CSSProperties;
}

const LetterImageCSS: React.FC<LetterImageProps> = ({
  svgPath,
  imageSrc,
  width = 300,
  height = 300,
  className = "",
  style = {},
}) => {
  return (
    <div
      className={`letter-image-container ${className}`}
      style={{
        width,
        height,
        position: "relative",
        ...style,
      }}
    >
      <div
        className="letter-image-mask"
        style={{
          width: "100%",
          height: "100%",
          backgroundImage: `url(${imageSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          // Modernes CSS Masking
          maskImage: `url(${svgPath})`,
          WebkitMaskImage: `url(${svgPath})`,
          maskSize: "contain",
          WebkitMaskSize: "contain",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskPosition: "center",
          WebkitMaskPosition: "center",
        }}
      />
    </div>
  );
};

export default LetterImageCSS;
