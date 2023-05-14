import { ReactNode } from 'react';

const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="px-[20vw] w-full flex justify-center items-center my-auto min-h-screen">
      {children}
    </div>
  );
};

export default Wrapper;
