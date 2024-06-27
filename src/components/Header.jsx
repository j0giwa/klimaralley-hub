
function Header() {

  return (
    <div className="navbar bg-base-100 mb-2 border-solid border-b-2 border-base-200">
      <div className="flex-1">
        <a className="btn btn-ghost text-3xl text-primary" href="/">Klimaralley</a>
      </div>
      <div className="flex-none">
      <ul className="menu menu-horizontal px-1">
        <li><a>Link</a></li>
        <li>
          <details>
            <summary>Account</summary>
            <ul className="bg-base-100 rounded-t-none p-2">
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
