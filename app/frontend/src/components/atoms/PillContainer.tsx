interface PillContainerProps {
  children: React.ReactElement;
  className?: string;
}

const PillContainer = ({ children, className }: PillContainerProps) => {
  return (
    <div
      className={`w-fit px-4 py-2 rounded-xl border border-paragraph/5 cursor-pointer bg-primary/5 ${className ? className : ""}`}
    >
      {children}
    </div>
  );
};

export default PillContainer;
