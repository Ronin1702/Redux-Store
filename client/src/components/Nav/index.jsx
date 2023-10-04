import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/orderHistory">
              Order History
            </Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/signup">
              Signup
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/login">
              Login
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">
          <div
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <span role="img" aria-label="shopping bag">🛍️</span>
            Redux Store
            <div style={{ position: 'relative', top: -20, right: -5 }}>
              <a
                href='https://redux.js.org/tutorials/fundamentals/part-4-store'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img
                  src='https://img.shields.io/badge/Redux%20Store-%23764abc?logo=Redux&color=764abc'
                  alt='Redux Store badge'
                />
              </a>
              <img
                src='https://img.shields.io/badge/D_E_M_O-blue'
                alt='DEMO badge'
                style={{marginLeft: 1 +`px`}}
              />
            </div>
          </div>
        </Link>
      </h1>

      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
