import { useEffect, useState } from "react";

function Hero() {
  const [imgScale, setImgScale] = useState(100);
  const [imgOpacitu, setImgOpacitu] = useState(5);

  useEffect(() => {
    setTimeout(() => {
      setImgScale(121);
      setImgOpacitu(100);
    });
  }, []);

  return (
    <div
      className="w-full bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: "url('/Slice 1.png')",
        aspectRatio: "1238 / 836",
      }}
    >
      <img
        src="/typo/Ecstasia26_hero_typo.svg"
        alt="Ecstasia26"
        className={`w-243 h-104.25 scale-${imgScale} opacity-${imgOpacitu} transition-transform duration-2700 linear`}
      />
    </div>
  );
}

export default Hero;
