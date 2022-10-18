/* 
*todo: show "locations" link in navbar for all users
todo: get a list of locations to show up onClick for the locations link in navbar
*/

import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
  const navigate = useNavigate();

  return (
    <ul className="navbar">
      <li className="navbar__item active">
        <Link className="navbar__link" to="/locations">
          Locations!
        </Link>
      </li>

      <li className="navbar__item active">
            <Link className="navbar__link" to="/products">Products!</Link>
        </li>


      <li className="navbar__item navbar__logout">
        <Link
          className="navbar__link"
          to=""
          onClick={() => {
            localStorage.removeItem("kandy_user");
            navigate("/", { replace: true });
          }}
        >
          Logout
        </Link>
      </li>
    </ul>
  );
};

