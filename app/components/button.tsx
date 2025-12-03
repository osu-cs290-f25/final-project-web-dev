export const Button = ({
  children,
  className,
  ...props
}: React.ComponentProps<"button">) => {
  return (
    <button
      {...props}
      className={`${className} rounded-sm border-yellow-700 border-b-3 bg-linear-180 from-yellow-400 to-yellow-600 px-6 py-2 text-shadow-sm text-white active:scale-95`}
    >
      {children}
    </button>
  );
};
