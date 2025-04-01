import React from "react";

function IconButton({
  icon: Icon,
  onClick,
  className,
  disabled = false,
}: {
  icon: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}) {
  return (
    <button
    onClick={onClick}
      disabled={disabled}
      type="button"
      className={`w-11 h-11 bg-red-500 rounded-full flex items-center justify-center
       cursor-pointer transition-all duration-500  hover:bg-red-700 ${className}`}
    >
     {Icon}
    </button>
  );
}

export default IconButton;
