import { AnchorProps } from "./anchor";
import Link from "next/link";
import { forwardRef } from "react";
import { appearances, iconButtonSizes } from "./common";

type IconAnchorProps = {
  "aria-label": string;
  icon: React.VFC<{ className?: string }>;
} & Omit<AnchorProps, "children" | "block" | "leftIcon" | "rightIcon">;

const IconAnchor = forwardRef(
  (
    {
      href,
      icon: Icon,
      "aria-label": ariaLabel,
      appearance = "primary",
      rounded = false,
      size = "md",
    }: IconAnchorProps,
    ref: React.Ref<HTMLAnchorElement>
  ): React.ReactElement => (
    <Link href={href} passHref>
      <a
        ref={ref}
        aria-label={ariaLabel}
        className={`${rounded ? "rounded-full" : "rounded-sm"} ${
          iconButtonSizes[size]
        } ${appearances[appearance][0]} ${
          appearances[appearance][1]["default"]
        } transition inline-flex items-center border focus:outline-none focus:ring-2 focus:ring-primary-300`}
      >
        <Icon className={size === "lg" ? "h-6 w-6" : "h-5 w-5"} />
      </a>
    </Link>
  )
);
if (process.env.NODE_ENV === "development") {
  IconAnchor.displayName = "IconAnchor";
}

export { IconAnchor };
export type { IconAnchorProps };
