import { Link, useLocation } from 'react-router';

import Menu from '@core/component/Menu';
import Iconlogo from '@assets/icons/shield.png';
import { menuItems } from '@utils/data/data';


const Nav = () => {
  const { pathname: activePath } = useLocation();

  return (
    <nav className="h-full w-30 bg-black-60 py-2 desktop:border-r desktop:border-gray-700">
      <div className="flex items-center gap-1 border-b border-gray-70 p-2">
        <img src={Iconlogo} alt="Security Manager" className="h-2.5 w-2.5" />
        <h1 className="text-txt-title2 font-secondary-600">Security Manager</h1>
      </div>

      <div className="p-1.5">
        <Link
          to="/"
          className={`${
            activePath === '/' ? 'bg-green-60 text-green' : 'text-gray-70 hover:bg-gray-38 hover:text-white-50 duration-300'
          } mb-1 flex items-center gap-1 rounded-sm px-1 py-1`}
        >
          <svg className={`w-2 h-2`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <rect width="7" height="9" x="3" y="3" rx="1"></rect>
            <rect width="7" height="5" x="14" y="3" rx="1"></rect>
            <rect width="7" height="9" x="14" y="12" rx="1"></rect>
            <rect width="7" height="5" x="3" y="16" rx="1"></rect>
          </svg>
          <h3 className="text-txt-title3 font-primary-600">Panel</h3>
        </Link>

        <p className="inline-block h-auto w-full p-1 pb-0.5 text-txt-description1 font-secondary-300 text-gray-70 uppercase">
          Herramientas
        </p>

        <Menu menuItems={menuItems} />
      </div>
    </nav>
  );
};

export default Nav;
