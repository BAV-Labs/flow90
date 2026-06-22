import timerLight1 from "@/assets/screens/timer-light1.png";
import timerLight2 from "@/assets/screens/timer-light2.png";

import timerDark1 from "@/assets/screens/timer-dark1.png";
import timerDark2 from "@/assets/screens/timer-dark2.png";

import timerCancel from "@/assets/screens/timer-cancel.png";
import timerCancelDark from "@/assets/screens/timer-cancel-dark.png";

import settingsLight from "@/assets/screens/settings-light.png";
import settingsDark from "@/assets/screens/settings-dark.png";

import aboutLight from "@/assets/screens/about-light.png";
import aboutDark from "@/assets/screens/about-dark.png";

import infoLight from "@/assets/screens/info-light.png";
import infoDark from "@/assets/screens/info-dark.png";

import onboarding1 from "@/assets/screens/onboarding1.png";
import onboarding2 from "@/assets/screens/onboarding2.png";
import onboarding3 from "@/assets/screens/onboarding3.png";

import splashscreen from "@/assets/screens/splashscreen.png";
import themeLight from "@/assets/screens/theme-light.png";
import themeDark from "@/assets/screens/theme-dark.png"

type Screen =
  | "timer1"
  | "timer2"
  | "timerCancel"
  | "settings"
  | "about"
  | "info"
  | "theme"
  | "onboarding1"
  | "onboarding2"
  | "onboarding3"
  | "splash";

function PhoneFrame({
  screen,
  dark,
  className = "",
}: {
  screen: Screen;
  dark: boolean;
  className?: string;
}) {
  const images = {
    timer1: dark ? timerDark1 : timerLight1,
    timer2: dark ? timerDark2 : timerLight2,
    timerCancel: dark ? timerCancelDark : timerCancel,

    settings: dark ? settingsDark : settingsLight,
    about: dark ? aboutDark : aboutLight,
    info: dark ? infoDark : infoLight,

    theme: dark ? themeDark : themeLight,

    onboarding1,
    onboarding2,
    onboarding3,
    splash: splashscreen,
  };

  return (
    <div
      className={`relative mx-auto w-full max-w-[300px] rounded-[42px] p-[10px]
      bg-gradient-to-b from-neutral-100 to-neutral-200
      dark:from-neutral-800 dark:to-neutral-900
      shadow-[0_30px_80px_rgba(0,0,0,0.25)]
      ring-1 ring-black/5 dark:ring-white/10
      ${className}`}
    >
      <div className="rounded-[34px] overflow-hidden bg-white dark:bg-black">
        <img
          src={images[screen]}
          alt={screen}
          className="block w-full"
          loading="lazy"
        />
      </div>
    </div>
  );
}
export default PhoneFrame;