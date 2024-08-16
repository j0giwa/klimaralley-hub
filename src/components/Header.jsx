import { useState, useEffect } from "react";
import ThemeController from "./ThemeController";
import { getCookie, removeCookie } from "../lib/cookieUtils";

/**
 * Header Component
 *
 * @returns {JSX.Element}
 * @author Jonas Schwind
 * @version 0.3.5
 */
function Header() {

  const [token, setToken] = useState("");

  useEffect(() => {
    const jwtToken = getCookie("jwt");
    if (jwtToken) {
      setToken(jwtToken);
    }
  }, []); // Empty dependency array ensures this effect runs only once after the component mounts

  /**
   * Performs a logout i.e. deletes the login token
   */
  const logout = () => {
    removeCookie('jwt');
    setToken(null);
  };

  return (
    <div className="mb-7 border-solid border-b-2 border-base-200">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl md:text-3xl text-primary" href="/">Klimarallye</a>
          </div>
        </div>
        <div className="navbar-center">
          <ul className="menu menu-horizontal px-1">
            <li><a key="flut" className="hidden lg:block" href="/games/flut">Die Flut Kommt</a></li>
            <li><a key="recycling" className="hidden lg:block" href="/games/recycling">Räumen Recyclen Rümplen</a></li>
            <li><a key="wasserarm" className="hidden lg:block" href="/games/wasserarm">Wasserarm Satt</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <ul className="menu menu-horizontal px-1">
            <li>
            <details>
              <summary>Account</summary>
              <ul className="bg-base-100 rounded-t-none p-2 z-50">
                <li>
                  {token ? (
                    <button onClick={logout}>Logout</button>
                  ) : (
                    <a href="/auth/login/">Login</a>
                  )}
                </li>
                <li><a href="/auth/register">Register</a></li>
              </ul>
            </details>
            </li>
          </ul>
          <ThemeController />
        </div>
      </div>
      <div class="flex flex-nowrap justify-between px-10 pb-1 lg:hidden">
        <a href="/games/flut">Flut</a>
        <a href="/games/recycling">Recyclen</a>
        <a href="/games/wasserarm">Wasserarm</a>
      </div>
    </div>
  );
}

export default Header;

