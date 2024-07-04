import { Link, NavLink } from "react-router-dom";

const AuthMobileNav = () => {
  return (
    <nav>
      <Link to="/auth/login">Log in</Link>
      <NavLink to="/auth/register">Register</NavLink>
    </nav>
  );
};

export default AuthMobileNav;
