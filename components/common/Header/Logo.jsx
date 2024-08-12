import Image from "next/legacy/image";
import Link from "next/link";
import logoImg from "@/public/images/logo/logo.png";

function Logo() {
  return (
    <Link href="/">
      <Image src={logoImg} alt="Logo Image" width={150} height={60} priority />
    </Link>
  );
}

export default Logo;
