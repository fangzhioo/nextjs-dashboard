import {MoonIcon,
    MagicIcon,
    FlashIcon,
    DevicesIcon
  } from "@/components/icons";
import { Feature } from "../features-grid";
  
export const homeFeatures: Feature[] = [
    {
        title: "Themeable",
        description:
          "Provides a plugin to customize default themes, you can change all semantic tokens or create an entire new theme.",
        icon: <MagicIcon className="text-pink-500" />,
      },
      {
        title: "Fast",
        description:
          "Built on top of Tailwind CSS, which means no runtime styles, and no unnecessary classes in your bundle.",
        icon: <FlashIcon className="text-pink-500" />,
      },
      {
        title: "Light & Dark UI",
        description:
          "Automatic dark mode recognition, NextUI automatically changes the theme when detects HTML theme prop changes.",
        icon: <MoonIcon className="text-pink-500" />,
      },
      {
        title: "Unique DX",
        description:
          "NextUI is fully-typed to minimize the learning curve, and provide the best possible developer experience.",
        icon: <DevicesIcon className="text-pink-500" />,
      },
  ]