import { tv } from "tailwind-variants";

export const linkStyle = tv({
  slots: {
    base: [
      "inline font-sans text-sm", 
      "outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
      "transition-colors duration-200 ease-in-out",
    ],
  },
  variants: {
    kind: {
      default: "text-color-link hover:underline visited:text-color-visited",
      primary: "text-color-default hover:underline visited:text-color-visited",
    },
  },
  defaultVariants: {
    kind: "default",
  },
});