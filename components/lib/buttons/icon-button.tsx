import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { ButtonProps } from "./button";
import { forwardRef } from "react";
import { appearances, iconButtonSizes } from "./common";

type IconButtonProps = {
  "aria-label": string;
  icon: React.VFC<{ className?: string }>;
} & Omit<ButtonProps, "children" | "block" | "leftIcon" | "rightIcon">;

const IconButton = forwardRef(
  (
    {
      onClick,
      icon: Icon,
      "aria-label": ariaLabel,
      appearance = "primary",
      status = "default",
      type = "submit",
      rounded = false,
      size = "md",
    }: IconButtonProps,
    ref: React.Ref<HTMLButtonElement>
  ): React.ReactElement => (
    <button
      type={type}
      ref={ref}
      onClick={onClick}
      aria-label={ariaLabel}
      disabled={status === "default" ? false : true}
      className={`${rounded ? "rounded-full" : "rounded-sm"} ${
        iconButtonSizes[size]
      } ${appearances[appearance][0]} ${
        appearances[appearance][1][status]
      } transition-colors inline-flex items-center border focus:outline-none focus:ring-2 focus:ring-primary-300`}
    >
      {status === "loading" ? (
        <AiOutlineLoading3Quarters
          className={`${size === "lg" ? "h-6 w-6" : "h-5 w-5"} animate-spin`}
        />
      ) : (
        <Icon className={size === "lg" ? "h-6 w-6" : "h-5 w-5"} />
      )}
    </button>
  )
);
if (process.env.NODE_ENV === "development") {
  IconButton.displayName = "IconButton";
}

export { IconButton };
export type { IconButtonProps };
