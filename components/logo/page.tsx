interface LogoProps {
  src?: string;
}

function Logo({ src = "/icons/logo.svg" }: LogoProps) {
  return (
    <div>
      <img src={src} alt="logo" />
    </div>
  );
}

export default Logo;
