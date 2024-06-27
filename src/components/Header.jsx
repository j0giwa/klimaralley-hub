
/**
 * Landing  Page
 * 
 * @returns {JSX.Element}
 * @author Jonas Schwind
 * @version 0.1.0
 */
function Header() {

  return (
    <div className="navbar bg-base-100 mb-4 border-solid border-b-2 border-base-200">
      <div className="flex-1">
        <a className="btn btn-ghost text-3xl text-primary" href="/">Klimaralley</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><a href="/games/flut">Die Flut Kommt</a></li>
          <li><a href="/games/recycling">Räumen Recyclen Rümplen</a></li>
          <li><a href="/games/wasserarm">Wasserarm Satt</a></li>
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
      </div>
    </div>
  );
}

export default Header;
