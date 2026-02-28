interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
}

const sizeStyles = {
  default: "max-w-[var(--container-max)]",
  narrow: "max-w-4xl",
  wide: "max-w-7xl",
};

export function Container({
  children,
  className = "",
  size = "default",
}: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full px-[var(--container-padding)] sm:px-8 md:px-12 lg:px-16 ${sizeStyles[size]} ${className}`}
    >
      {children}
    </div>
  );
}
