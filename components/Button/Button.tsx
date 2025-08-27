export type ButtonProps = {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "tertiary";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function getVariant(variant: ButtonProps["variant"], disabled:  ButtonProps["disabled"]) {
  const disabledClasses = "bg-disabled text-disabled";
  switch (variant) {
    case "primary":
      return disabled ? disabledClasses : "bg-primary text-white";
    case "secondary":
      return disabled ? disabledClasses : "bg-quaternary text-primary";
    default:
      return disabled ? '' : '';
  }
}

const Button = ({children, className, disabled, variant = "primary", ...props}: ButtonProps) => {
  const classes = getVariant(variant, disabled);
  return <button 
        className={`px-4 py-2 rounded-md ${classes} ${className}`}
        {...props}
        disabled={disabled}
        {...props}
        >{ children }</button>
  }


export default Button