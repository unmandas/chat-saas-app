import LogoImage from "@logos/v.png";
import { AspectRatio } from "./ui/aspect-ratio";
import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center w-72 h-14">
        <AspectRatio
          ratio={16 / 9}
          className="flex items-center justify-center"
        >
          <Image
            priority
            src={LogoImage}
            alt="logo"
            className="dark:filter dark:invert"
            height={20}
          />
        </AspectRatio>
      </div>
    </Link>
  );
};

export default Logo;
