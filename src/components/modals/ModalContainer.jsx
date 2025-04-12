import React from "react";
import { useNavigate } from "react-router-dom";

function ModalContainer({ children, isOpen, setIsOpen }) {
  const navigate = useNavigate();
  if (!isOpen) return;

  const closeHandler = () => {
    setIsOpen(false);
    navigate("/");
  };

  return (
    <div
      className="fixed top-0 right-0 w-svw h-svh bg-black/20 z-10 backdrop-blur-sm"
      onClick={closeHandler}
    >
      <div className="w-full h-full flex items-center justify-center">
        <div className="min-w-10 min-h-10" onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default ModalContainer;
