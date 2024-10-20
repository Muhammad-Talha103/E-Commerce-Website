interface Props {
    children: React.ReactNode;
    className?: string;
  }
  
  const Wrapper = ({ children, className }: Props) => {
    return (
      <div className={`${className} max-w-screen-xl px-4 mx-auto py-10 xl:px-0`}>
        {children}
      </div>
    );
  };
  export default Wrapper;