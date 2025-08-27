// components/ui/container.tsx
import * as React from "react"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const containerVariants = cva(
  "mx-auto w-full",
  {
    variants: {
      size: {
        "sm": "max-w-2xl",
        "md": "max-w-4xl", 
        "lg": "max-w-6xl",
        "xl": "max-w-7xl",
        "full": "max-w-full",
        "screen": "max-w-screen-2xl",
      },
      padding: {
        "none": "",
        "sm": "px-4 sm:px-6",
        "md": "px-4 sm:px-6 lg:px-8",
        "lg": "px-8 sm:px-12 lg:px-22",
      }
    },
    defaultVariants: {
      size: "lg",
      padding: "md",
    },
  }
)

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size, padding, ...props }, ref) => {
    return (
      <div
        className={cn(containerVariants({ size, padding, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Container.displayName = "Container"

export { Container, containerVariants }

// Section wrapper component for consistent spacing
export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType
  container?: boolean
  containerSize?: ContainerProps["size"]
  spacing?: "sm" | "md" | "lg" | "xl" | "none"
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ 
    className, 
    as = "section", 
    container = true, 
    containerSize = "lg",
    spacing = "lg",
    children,
    ...props 
  }, ref) => {
    const Comp = as
    
    const spacingClasses = {
      "none": "",
      "sm": "py-6",
      "md": "py-16", 
      "lg": "py-20",
      "xl": "py-24",
    }
    
    const content = container ? (
      <Container size={containerSize}>
        {children}
      </Container>
    ) : (
      children
    )
    
    return (
      <Comp
        className={cn(spacingClasses[spacing], className)}
        ref={ref}
        {...props}
      >
        {content}
      </Comp>
    )
  }
)
Section.displayName = "Section"

export { Section }