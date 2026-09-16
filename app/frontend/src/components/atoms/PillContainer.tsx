interface PillContainerProps {
  children: React.ReactElement;
}

const PillContainer = ({ children }: PillContainerProps) => {
  return (
    <div className="w-fit px-4 py-2 rounded-xl border border-paragraph/5 cursor-pointer bg-primary/5">
      {children}
    </div>
  );
};

export default PillContainer;
