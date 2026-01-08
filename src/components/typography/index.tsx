import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const typographyVariants = cva("text-foreground", {
  variants: {
    variant: {
      h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
      h2: "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
      h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
      h4: "scroll-m-20 text-xl font-semibold tracking-tight",
      h5: "scroll-m-20 text-lg font-semibold tracking-tight",
      p: "leading-7 [&:not(:first-child)]:mt-6",
      lead: "text-xl text-muted-foreground",
      large: "text-lg font-semibold",
      small: "text-sm font-medium leading-none",
      muted: "text-sm text-muted-foreground",
      blockquote: "mt-6 border-l-2 pl-6 italic",
      code: "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
      list: "my-6 ml-6 list-disc [&>li]:mt-2",
    },
  },
  defaultVariants: {
    variant: "p",
  },
});

export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  as?: React.ElementType;
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant, as, ...props }, ref) => {
    const getDefaultElement = (variant: string | null | undefined) => {
      switch (variant) {
        case "h1":
          return "h1";
        case "h2":
          return "h2";
        case "h3":
          return "h3";
        case "h4":
          return "h4";
        case "h5":
          return "h5";
        case "blockquote":
          return "blockquote";
        case "code":
          return "code";
        case "list":
          return "ul";
        default:
          return "p";
      }
    };

    const Comp = as || getDefaultElement(variant);

    return React.createElement(Comp, {
      className: cn(typographyVariants({ variant }), className),
      ref,
      ...props,
    });
  }
);
Typography.displayName = "Typography";

const H1 = React.forwardRef<
  HTMLHeadingElement,
  Omit<TypographyProps, "variant" | "as">
>(({ className, ...props }, ref) => (
  <Typography ref={ref} as="h1" variant="h1" className={className} {...props} />
));
H1.displayName = "H1";

const H2 = React.forwardRef<
  HTMLHeadingElement,
  Omit<TypographyProps, "variant" | "as">
>(({ className, ...props }, ref) => (
  <Typography ref={ref} as="h2" variant="h2" className={className} {...props} />
));
H2.displayName = "H2";

const H3 = React.forwardRef<
  HTMLHeadingElement,
  Omit<TypographyProps, "variant" | "as">
>(({ className, ...props }, ref) => (
  <Typography ref={ref} as="h3" variant="h3" className={className} {...props} />
));
H3.displayName = "H3";

const H4 = React.forwardRef<
  HTMLHeadingElement,
  Omit<TypographyProps, "variant" | "as">
>(({ className, ...props }, ref) => (
  <Typography ref={ref} as="h4" variant="h4" className={className} {...props} />
));
H4.displayName = "H4";

const H5 = React.forwardRef<
  HTMLHeadingElement,
  Omit<TypographyProps, "variant" | "as">
>(({ className, ...props }, ref) => (
  <Typography ref={ref} as="h5" variant="h5" className={className} {...props} />
));
H5.displayName = "H5";

const P = React.forwardRef<
  HTMLParagraphElement,
  Omit<TypographyProps, "variant" | "as">
>(({ className, ...props }, ref) => (
  <Typography ref={ref} as="p" variant="p" className={className} {...props} />
));
P.displayName = "P";

const Lead = React.forwardRef<
  HTMLParagraphElement,
  Omit<TypographyProps, "variant" | "as">
>(({ className, ...props }, ref) => (
  <Typography
    ref={ref}
    as="p"
    variant="lead"
    className={className}
    {...props}
  />
));
Lead.displayName = "Lead";

const Large = React.forwardRef<
  HTMLDivElement,
  Omit<TypographyProps, "variant" | "as">
>(({ className, ...props }, ref) => (
  <Typography
    ref={ref}
    as="div"
    variant="large"
    className={className}
    {...props}
  />
));
Large.displayName = "Large";

const Small = React.forwardRef<
  HTMLElement,
  Omit<TypographyProps, "variant" | "as">
>(({ className, ...props }, ref) => (
  <Typography
    ref={ref}
    as="small"
    variant="small"
    className={className}
    {...props}
  />
));
Small.displayName = "Small";

const Muted = React.forwardRef<
  HTMLParagraphElement,
  Omit<TypographyProps, "variant" | "as">
>(({ className, ...props }, ref) => (
  <Typography
    ref={ref}
    as="p"
    variant="muted"
    className={className}
    {...props}
  />
));
Muted.displayName = "Muted";

const Blockquote = React.forwardRef<
  HTMLQuoteElement,
  Omit<TypographyProps, "variant" | "as">
>(({ className, ...props }, ref) => (
  <Typography
    ref={ref}
    as="blockquote"
    variant="blockquote"
    className={className}
    {...props}
  />
));
Blockquote.displayName = "Blockquote";

const Code = React.forwardRef<
  HTMLElement,
  Omit<TypographyProps, "variant" | "as">
>(({ className, ...props }, ref) => (
  <Typography
    ref={ref}
    as="code"
    variant="code"
    className={className}
    {...props}
  />
));
Code.displayName = "Code";

const List = React.forwardRef<
  HTMLUListElement,
  Omit<TypographyProps, "variant" | "as">
>(({ className, ...props }, ref) => (
  <Typography
    ref={ref}
    as="ul"
    variant="list"
    className={className}
    {...props}
  />
));
List.displayName = "List";

export {
  Typography,
  H1,
  H2,
  H3,
  H4,
  H5,
  P,
  Lead,
  Large,
  Small,
  Muted,
  Blockquote,
  Code,
  List,
  typographyVariants,
};
