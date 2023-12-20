import { NextPage } from "next";

const Error404: NextPage = () => {
  return (
      <div className="bg-primary min-h-[100vh] max-w-[90rem] w-full flex items-center justify-center text-white">
        <h3 className="text-3xl">Oops! Page not found</h3>
      </div>
  );
};

export default Error404;
