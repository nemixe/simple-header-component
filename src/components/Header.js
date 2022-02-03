import logo from "../logo.svg";
import { useAtom } from "jotai";
import { userAtom } from "../state";

const MenuLink = () => (
  <li>
    <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
      Learn React
    </a>
  </li>
);

// jika user null maka tipe user `guest`, jika user memiliki object user maka user `member`
const Actions = ({ user }) =>
  user ? (
    <div>
      <button data-testid="logout-button">Logout</button>
    </div>
  ) : (
    <div>
      <button data-testid="login-button">Login</button>
    </div>
  );

const Header = () => {
  // mengambil state user dari userAtom
  const [user] = useAtom(userAtom);

  return (
    <header className="flex items-center justify-between px-4 bg-white shadow">
      <div className="flex items-center">
        <img src={logo} className="w-20" alt="logo" />
        <ul className="flex space-x-4">
          <MenuLink />
          <MenuLink />
        </ul>
      </div>
      <Actions user={user} />
    </header>
  );
};

export default Header;
