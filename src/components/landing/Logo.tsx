import logoLight from "@/assets/logo_light.png";
import logoDark from "@/assets/logo_dark.png";

function Logo({ className = "h-8 w-8", dark }: { className?: string; dark: boolean }) {
  return (
    <img
      src={dark ? logoDark : logoLight}
      alt="Flow90"
      className={className}
      width={64}
      height={64}
    />
  );
}
export default Logo;