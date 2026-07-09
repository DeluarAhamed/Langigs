import * as React from "react";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
const buttonVariants = cva("inline-flex items-center justify-center gap-3 rounded-button whitespace-nowrap transition-all duration-200 ease-in-out focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50", {
    variants: {
        variant: {
            default: "bg-neutral bg-[linear-gradient(135deg,var(--color-downriver)_20%,var(--color-tall-poppy))] font-medium text-scheme-btn-text hover:bg-[linear-gradient(135deg,var(--color-downriver-dark),var(--color-tall-poppy-dark))] btn-light:bg-white btn-light:bg-none btn-light:text-neutral-darkest btn-light:hover:bg-neutral-lighter",
            alternate: "bg-white text-neutral-darkest hover:bg-neutral-lighter",
            secondary: "bg-neutral-darkest-5 font-medium backdrop-blur-[10px] hover:bg-neutral-darkest-15 alternate:bg-white-10 alternate:hover:bg-white-20",
            "secondary-alt": "bg-white-10 font-medium backdrop-blur-[10px] hover:bg-white-20",
            link: "gap-2 text-scheme-text",
            "link-alt": "gap-2 text-white",
            ghost: "hover:bg-neutral-darkest hover:text-white",
            none: "",
        },
        size: {
            default: "px-6 py-3",
            sm: "px-5 py-2",
            link: "p-0",
            icon: "size-10",
            none: "",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "default",
    },
});
function Button({ className, variant, size, asChild = false, iconLeft, iconRight, children, ...props }) {
    const Comp = asChild ? Slot : "button";
    return (<Comp data-slot="button" data-variant={variant || "default"} className={cn(buttonVariants({ variant, size, className }))} {...props}>
      {iconLeft && iconLeft}
      <Slottable>{children}</Slottable>
      {iconRight && iconRight}
    </Comp>);
}
export { Button, buttonVariants };
