import acemeLogo from "@/assets/logo-acme.png";
import quantumLogo from "@/assets/logo-quantum.png";
import echologo from "@/assets/logo-echo.png";
import celestialLogo from "@/assets/logo-celestial.png";
import pulseLogo from "@/assets/logo-pulse.png";
import apexLogo from "@/assets/logo-apex.png";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="containner">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <Marquee className="flex gap-14 flex-none">
            {" "}
            <Image
              src={acemeLogo}
              alt="Acme Logo"
              className="logo-ticker-image mx-10"
            />
            <Image
              src={quantumLogo}
              alt="Quantum Logo"
              className="logo-ticker-image mx-10"
            />
            <Image
              src={echologo}
              alt="Echo Logo"
              className="logo-ticker-image mx-10"
            />
            <Image
              src={celestialLogo}
              alt="Celestial Logo"
              className="logo-ticker-image mx-10"
            />
            <Image
              src={pulseLogo}
              alt="Pulse Logo"
              className="logo-ticker-image mx-10"
            />
            <Image
              src={apexLogo}
              alt="Apex Logo"
              className="logo-ticker-image mx-10"
            />
          </Marquee>
        </div>
      </div>
    </div>
  );
};
