import { useEffect, useState } from "react";
import AuthMobileNav from "../../components/AuthMobileNav/AuthMobileNav";
import Info from "../../components/Info/Info";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

const FirstPage = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, [width]);

  return (
    <>
      {width < 768 && (
        <div>
          <Info />
          <AuthMobileNav />
        </div>
      )}

      {width >= 768 && (
        <div>
          <RegistrationForm />
          <Info />
        </div>
      )}
    </>
  );
};

export default FirstPage;
