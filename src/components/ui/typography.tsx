// components/ui/typography.tsx
import * as React from "react"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

// Typography variants for consistent styling
const typographyVariants = cva(
  "text-foreground",
  {
    variants: {
      variant: {
        "display-1": "text-display-1 font-bold tracking-tight",
        "display-2": "text-display-2 font-bold tracking-tight", 
        "h1": "text-heading-1 font-semibold tracking-tight",
        "h2": "text-heading-2 font-semibold tracking-tight",
        "h3": "text-heading-3 font-semibold tracking-tight",
        "h4": "text-heading-4 font-semibold tracking-tight",
        "h5": "text-heading-5 font-semibold tracking-tight",
        "h6": "text-heading-6 font-semibold tracking-tight",
        "body-lg": "text-body-lg font-normal",
        "body": "text-body font-normal",
        "body-sm": "text-body-sm font-normal",
        "caption": "text-caption font-normal text-muted-foreground",
        "overline": "text-overline font-medium text-muted-foreground",
        "lead": "text-xl text-muted-foreground",
        "large": "text-lg font-semibold",
        "small": "text-sm font-medium leading-none",
        "muted": "text-sm text-muted-foreground",
      },
      responsive: {
        true: "",
        false: "",
      }
    },
    compoundVariants: [
      {
        variant: "display-1",
        responsive: true,
        class: "text-5xl sm:text-6xl lg:text-display-1"
      },
      {
        variant: "display-2", 
        responsive: true,
        class: "text-3xl sm:text-4xl lg:text-display-2"
      },
      {
        variant: "h1",
        responsive: true,
        class: "text-2xl sm:text-3xl lg:text-heading-1"
      },
      {
        variant: "h2",
        responsive: true,
        class: "text-xl sm:text-2xl lg:text-heading-2"
      },
      {
        variant: "h3",
        responsive: true,
        class: "text-lg sm:text-xl lg:text-heading-3"
      },
    ],
    defaultVariants: {
      variant: "body",
      responsive: true,
    },
  }
)

export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  as?: React.ElementType
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant, responsive, as, ...props }, ref) => {
    const Comp = as || getDefaultElement(variant)
    return (
      <Comp
        className={cn(typographyVariants({ variant, responsive, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Typography.displayName = "Typography"

// Helper function to get semantic HTML elements
function getDefaultElement(variant: TypographyProps["variant"]): React.ElementType {
  switch (variant) {
    case "display-1":
    case "display-2":
    case "h1":
      return "h1"
    case "h2":
      return "h2"
    case "h3":
      return "h3"
    case "h4":
      return "h4"
    case "h5":
      return "h5"
    case "h6":
      return "h6"
    case "caption":
    case "overline":
    case "small":
    case "muted":
      return "span"
    case "lead":
      return "p"
    default:
      return "p"
  }
}

export { Typography, typographyVariants }

// Pre-built component shortcuts for common use cases
export const H1 = React.forwardRef<HTMLHeadingElement, Omit<TypographyProps, 'variant' | 'as'>>(
  (props, ref) => <Typography variant="h1" as="h1" ref={ref} {...props} />
)
H1.displayName = "H1"

export const H2 = React.forwardRef<HTMLHeadingElement, Omit<TypographyProps, 'variant' | 'as'>>(
  (props, ref) => <Typography variant="h2" as="h2" ref={ref} {...props} />
)
H2.displayName = "H2"

export const H3 = React.forwardRef<HTMLHeadingElement, Omit<TypographyProps, 'variant' | 'as'>>(
  (props, ref) => <Typography variant="h3" as="h3" ref={ref} {...props} />
)
H3.displayName = "H3"

export const H4 = React.forwardRef<HTMLHeadingElement, Omit<TypographyProps, 'variant' | 'as'>>(
  (props, ref) => <Typography variant="h4" as="h4" ref={ref} {...props} />
)
H4.displayName = "H4"

export const Lead = React.forwardRef<HTMLParagraphElement, Omit<TypographyProps, 'variant' | 'as'>>(
  (props, ref) => <Typography variant="lead" as="p" ref={ref} {...props} />
)
Lead.displayName = "Lead"

export const Large = React.forwardRef<HTMLParagraphElement, Omit<TypographyProps, 'variant' | 'as'>>(
  (props, ref) => <Typography variant="large" as="p" ref={ref} {...props} />
)
Large.displayName = "Large"

export const Small = React.forwardRef<HTMLElement, Omit<TypographyProps, 'variant' | 'as'>>(
  (props, ref) => <Typography variant="small" as="small" ref={ref} {...props} />
)
Small.displayName = "Small"

export const Muted = React.forwardRef<HTMLParagraphElement, Omit<TypographyProps, 'variant' | 'as'>>(
  (props, ref) => <Typography variant="muted" as="p" ref={ref} {...props} />
)
Muted.displayName = "Muted"