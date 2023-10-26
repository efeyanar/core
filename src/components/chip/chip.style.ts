import { tv } from "tailwind-variants";

export const chipStyle = tv({
  slots: {
    base: ["font-sans inline-flex items-center justify-center text-center whitespace-nowrap z-auto rounded-full gap-2 border border-solid"],
  },
  variants: {
    size: {
      sm: {
        base: "text-xs px-1 py-0.5",
      },
      md: {
        base: "text-sm px-2 py-1",
      },
      lg: {
        base: "text-base px-3 py-2",
      },
    },
    kind: {
      filled: {
        base: "rounded-full border-transparent",
      },
      outlined: {
        base: "bg-transparent",
      },
    },
    status: {
      success: {
        base: "bg-color-success text-color-base",
      },
      warning: {
        base: "bg-color-warning text-color-base",
      },
      error: {
        base: "bg-color-error text-color-base",
      },
      info: {
        base: "bg-color-information text-color-base",
      },
      default: {
        base: "bg-color-default text-color-default",
      },
    },
    disabled: {
      true: {
        base: "bg-color-disabled text-color-disabled cursor-not-allowed",
      },
    },
  },
  compoundVariants: [
    {
      kind: "outlined",
      class: {
        base: ["border border-solid bg-transparent"],
      }
    },
    {
      kind: "outlined",
      status: "info",
      class: {
        base: ["text-color-primary border-color-primary"],
      }
    },
    {
      kind: "outlined",
      status: "success",
      class: {
        base: ["text-color-success border-color-success"],
      }
    },
    {
      kind: "outlined",
      status: "warning",
      class: {
        base: ["text-color-warning border-color-warning"],
      }
    },
    {
      kind: "outlined",
      status: "error",
      class: {
        base: ["text-color-error border-color-error"],
      }
    },
    {
      kind: "outlined",
      status: "default",
      class: {
        base: ["text-color-default border-color-default"],
      }
    }
  ],
  defaultVariants: {
    size: "md",
    status: "default",
    kind: "filled",
    disabled: false,
  },
});
