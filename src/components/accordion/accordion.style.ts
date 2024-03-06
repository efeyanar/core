import { tv } from "tailwind-variants";

export const accordionStyle = tv({
  slots: {
    base: "font-sans antialiased rounded-md border border-color-default",
    header: "header flex h-[46px] cursor-pointer flex-row items-center justify-between bg-color-default px-5 py-2.5 text-lg font-medium text-color-default",
    panel: "p-5",
    icon: "",
  },
  variants: {
    open: {
      true: {
        panel: "block",
        icon: "fas fa-angle-up",
        header: "rounded-t-md",
      },
      false: {
        panel: "hidden",
        icon: "fas fa-angle-down",
        header: "rounded-md",
      },
    },
  },
  defaultVariants: {
    open: false,
  },
});
