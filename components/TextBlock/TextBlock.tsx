export type TextBlockProps = {
    title: string;
    description: string;
    maxWidth?: string;
    className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const TextBlock = ({ title, description, maxWidth, className, ...props }: TextBlockProps) => {
  return (
  <div className={`flex flex-col gap-4 bg-disabled rounded-md p-4 w-full ${maxWidth} ${className}`} {...props}>
    <h3 className="text-gray-primary text-xl font-extrabold">
        {title}
    </h3>
    <p className="text-gray-primary text-md font-normal">
        {description}
    </p>
  </div>
  );
};

export default TextBlock;