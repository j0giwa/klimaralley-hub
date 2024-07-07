import ThemeController from './ThemeController';

/**
 * Header Component
 * 
 * @returns {JSX.Element}
 * @author Jonas Schwind
 * @version 0.3.5
 */
function Header() {

  return (
    <div className="navbar bg-base-100 mb-7 border-solid border-b-2 border-base-200">
      <div className="navbar-start">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl md:text-3xl text-primary" href="/">Klimaralley</a>
        </div>
      </div>
      <div className="navbar-center">
        <ul className="menu menu-horizontal px-1">
          <li><a className="hidden lg:block" href="/games/flut">Die Flut Kommt</a></li>
          <li><a className="hidden lg:block" href="/games/recycling">Räumen Recyclen Rümplen</a></li>
          <li><a className="hidden lg:block" href="/games/wasserarm">Wasserarm Satt</a></li>
          </ul>
      </div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal px-1">
          <li>
          <details>
            <summary>Account</summary>
            <ul className="bg-base-100 rounded-t-none p-2 z-50">
              <li><a href="/auth/login/">Login</a></li>
              <li><a href="/auth/register">Register</a></li>
            </ul>
          </details>
          </li>
        </ul>
        <ThemeController />
      </div>
    </div>
  );
}

export default Header;
