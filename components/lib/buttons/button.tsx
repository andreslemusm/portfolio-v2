import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { forwardRef } from "react";
import { ButtonBaseProps, appearances, buttonSizes } from "./common";

type ButtonProps = {
  type?: "submit" | "button" | "reset";
  status?: keyof typeof appearances["primary"][1];
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
} & ButtonBaseProps;

/**
 * @param {string} width TailwindCSS width utility class
 */
const Button = forwardRef(
  (
    {
      children,
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      appearance = "primary",
      block = false,
      rounded = false,
      size = "md",
      status = "default",
      type = "submit",
      onClick,
    }: ButtonProps,
    ref: React.Ref<HTMLButtonElement>
  ): React.ReactElement => (
    <button
      type={type}
      ref={ref}
      onClick={onClick}
      disabled={status === "default" ? false : true}
      className={`${block ? "flex w-full" : "inline-flex"} ${
        rounded ? "rounded-full" : "rounded-sm"
      } ${buttonSizes[size][0]} ${appearances[appearance][0]} ${
        appearances[appearance][1][status]
      } transition-colors items-center justify-center border font-medium focus:outline-none focus:ring-2 focus:ring-primary-300`}
    >
      {status === "loading" ? (
        <AiOutlineLoading3Quarters
          className={`${buttonSizes[size][1]["leftIcon"]} animate-spin`}
        />
      ) : LeftIcon ? (
        <LeftIcon className={buttonSizes[size][1]["leftIcon"]} />
      ) : null}
      {children}
      {status === "loading" ? null : RightIcon ? (
        <RightIcon className={buttonSizes[size][1]["rightIcon"]} />
      ) : null}
    </button>
  )
);
if (process.env.NODE_ENV === "development") {
  Button.displayName = "Button";
}

export { Button };
export type { ButtonProps };
