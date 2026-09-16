interface SectionContainerProps {
  children: React.ReactElement;
  className?: string
}

const SectionContainer = ({ children, className }: SectionContainerProps) => {
  return (
    <>
      <div className={`bg-white shadow-xl/5 shadow-black/30 p-7 rounded-xl flex flex-col ${className ? className : ''}`}>
        {children}
      </div>
    </>
  );
};

export default SectionContainer;
