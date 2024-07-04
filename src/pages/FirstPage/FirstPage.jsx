import { useEffect, useState } from "react";
import AuthMobileNav from "../../components/AuthMobileNav/AuthMobileNav";
import Info from "../../components/Info/Info";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

const windowWidth = window.innerWidth;

const FirstPage = () => {
  return (
    <>
      {windowWidth < 768 && (
        <div>
          <Info />
          <AuthMobileNav />
        </div>
      )}

      {windowWidth >= 768 && (
        <div>
          <RegistrationForm />
          <Info />
        </div>
      )}
    </>
  );
};

export default FirstPage;
