export const Button = ({
  children,
  ...props
}: React.ComponentProps<"button">) => {
  return (
    <button
      {...props}
      className="rounded-sm border-yellow-700 border-b-3 bg-linear-180 from-yellow-400 to-yellow-600 px-4 py-2 text-shadow-sm text-white"
    >
      {children}
    </button>
  );
};
