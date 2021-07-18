export const classNames = (...classes: Array<string | boolean>): string => {
  return classes.filter(Boolean).join(" ");
};
