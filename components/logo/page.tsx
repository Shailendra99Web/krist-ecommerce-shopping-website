import Link from "next/link";

interface LogoProps {
  src?: string;
}

function Logo({ src = "/icons/logo.svg" }: LogoProps) {
  return (
    <div>
      <Link href={"/"}>
        <img src={src} alt="logo" />
      </Link>
    </div>
  );
}

export default Logo;
