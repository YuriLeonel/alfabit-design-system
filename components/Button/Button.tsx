export type ButtonProps = {
    children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;



const Button = ({children, className, ...props}: ButtonProps) => {
  return <button 
        className={`${className} bg-primary text-white px-4 py-2 rounded-md`}
        {...props}
        >{ children }</button>
}

export default Button