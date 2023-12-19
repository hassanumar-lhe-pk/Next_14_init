import React from "react";

interface ButtonProps {
  className?: string;
  text: string;
  onClick: () => void;
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  className,
  text,
  onClick,
  isLoading,
}) => {
  const loaderStyles = `
    .loader {
      border: 4px solid #f3f3f3;
      border-top: 4px solid #3498db;
      border-radius: 50%;
      width: 16px;
      height: 16px;
      animation: spin 0.8s linear infinite;
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;
  return (
    <>
      <style>{loaderStyles}</style>

      <button
        className={`justify-center bg-blue rounded-xl text-white text-sm font-bold shadow hover:shadow-lg transform transition-transform duration-150 hover:scale-90 outline-none focus:outline-none ease-linear ${className}`}
        onClick={onClick}
        disabled={isLoading}
      >
        {isLoading ? (
          <div className="flex items-center justify-center">
            <div className="loader"></div>
          </div>
        ) : (
          text
        )}
      </button>
    </>
  );
};

export default Button;
