import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children, isOpen, setIsOpen }) {

  return (
    <div className={`w-full lg:w-[1440px] mx-auto bg-amber-50`}>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
