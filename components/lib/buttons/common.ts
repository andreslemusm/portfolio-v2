const appearances = {
  primary: [
    "border-green-300 text-green-300 bg-transparent shadow-sm",
    {
      default: "hover:bg-green-800",
      loading: "opacity-70 cursor-default",
      disabled: "opacity-50 cursor-not-allowed",
    },
  ],
  ghost: [
    "border-transparent text-green-300",
    {
      default: "hover:text-green-400 hover:bg-green-300 hover:bg-opacity-5",
      loading: "opacity-80 cursor-default",
      disabled: "opacity-60 cursor-not-allowed",
    },
  ],
  link: [
    "border-transparent text-white",
    {
      default: "hover:text-green-300",
      loading: "opacity-70 cursor-default",
      disabled: "opacity-50 cursor-not-allowed",
    },
  ],
} as const;

const buttonSizes = {
  sm: [
    "text-xs px-2.5 py-1.5",
    {
      leftIcon: "-ml-0.5 mr-2 h-4 w-4",
      rightIcon: "ml-2 -mr-0.5 h-4 w-4",
    },
  ],
  md: [
    "text-sm leading-4 px-3 py-2",
    {
      leftIcon: "-ml-0.5 mr-2 h-4 w-4",
      rightIcon: "ml-2 -mr-0.5 h-4 w-4",
    },
  ],
  lg: [
    "text-base px-4 py-2",
    {
      leftIcon: "-ml-1 mr-3 h-5 w-5",
      rightIcon: "ml-3 -mr-1 h-5 w-5",
    },
  ],
} as const;

const iconButtonSizes = {
  sm: "p-1",
  md: "p-1.5",
  lg: "p-2",
};

type ButtonBaseProps = {
  children?: string;
  block?: boolean;
  rounded?: boolean;
  rightIcon?: React.VFC<{ className: string }>;
  leftIcon?: React.VFC<{ className: string }>;
  size?: keyof typeof buttonSizes;
  appearance?: keyof typeof appearances;
};

export { appearances, buttonSizes, iconButtonSizes };
export type { ButtonBaseProps };
