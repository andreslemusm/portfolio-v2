import { forwardRef } from "react";
import { ButtonBaseProps, appearances, buttonSizes } from "./common";
import Link, { LinkProps } from "next/link";
import { classNames } from "@utils/index";

type AnchorProps = Pick<LinkProps, "href"> & ButtonBaseProps;

/**
 * @example
 * <Anchor href={href}>{name}</Anchor>
 */
const Anchor = forwardRef(
  (
    {
      href,
      children,
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      appearance = "primary",
      block = false,
      rounded = false,
      size = "md",
    }: AnchorProps,
    ref: React.Ref<HTMLAnchorElement>
  ) => (
    <Link href={href} passHref>
      <a
        ref={ref}
        className={classNames(
          "transition-colors items-center justify-center border font-medium focus:outline-none focus:ring-2 focus:ring-green-300",
          block ? "flex w-full" : "inline-flex",
          rounded ? "rounded-full" : "rounded-sm",
          buttonSizes[size][0],
          appearances[appearance][0],
          appearances[appearance][1]["default"]
        )}
      >
        {LeftIcon ? (
          <LeftIcon className={buttonSizes[size][1]["leftIcon"]} />
        ) : null}
        {children}
        {RightIcon ? (
          <RightIcon className={buttonSizes[size][1]["rightIcon"]} />
        ) : null}
      </a>
    </Link>
  )
);
if (process.env.NODE_ENV === "development") {
  Anchor.displayName = "Anchor";
}

export { Anchor };
export type { AnchorProps };
