import { useState } from 'react';
import type { MouseEvent as ReactMouseEvent, ReactElement } from 'react';
import { Link, useLocation } from 'react-router';

export interface MenuItemProps {
  menuItems?: MenuProps[];
}

interface MenuProps {
  labelMenu?: string;
  iconMenu?: string;
  iconActiveMenu?: string;
  hrefMenu?: string;
  isActive?: boolean;
  subMenuItems?: SubMenuProps[];
}

interface SubMenuProps {
  labelSubmenu?: string;
  iconSubmenu?: string;
  iconActiveSubmenu?: string;
  hrefSubmenu?: string;
  isActiveSubmenu?: boolean;
}

const Menu = ({ menuItems }: MenuItemProps): ReactElement => {
  const { pathname } = useLocation();
  const [openKey, setOpenKey] = useState<string | null>(null);

  const handleSummaryClick = (event: ReactMouseEvent<HTMLElement>, key: string) => {
    event.preventDefault();
    setOpenKey((current) => (current === key ? null : key));
  };

  return (
    <ul className="Menu flex flex-col gap-1 w-full h-auto">
      {menuItems?.map((item, index) => {
        const subMenuItems = item.subMenuItems ?? [];
        const hasSubMenu = subMenuItems.length > 1;
        const key = item.hrefMenu ?? item.labelMenu ?? String(index);
        const isOpen = openKey === key;
        const isActive =
          item.isActive ??
          (item.hrefMenu === pathname ||
            subMenuItems.some(
              (subItem) => subItem.isActiveSubmenu ?? (subItem.hrefSubmenu === pathname),
            ));

        return (
          <li key={key} className="w-full">
            {hasSubMenu ? (
              <details className="w-full" open={isOpen}>
                <summary
                  onClick={(event) => handleSummaryClick(event, key)}
                  className={`flex cursor-pointer list-none items-center gap-1 rounded-sm px-1 py-1 duration-300 hover:bg-black-70
                    ${
                    isActive
                      ? 'bg-black-40 text-white'
                      : 'text-gray-80 hover:text-white'
                  }
                  ${isOpen ? 'bg-black-70 text-white' : ''}`}
                >
                  <div>
                    <div 
                      className={`h-2 w-2 stroke-gray-80 hover:text-white ${isActive ? 'text-green' : ''}`}
                      dangerouslySetInnerHTML={{ __html: item.iconMenu || '' }} />
                  </div>
                  <span className="text-txt-title3 font-primary-600">{item.labelMenu}</span>
                  <svg
                    className={`Menu-chevron ml-auto h-2 w-2 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 7.5L10 12.5L15 7.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </summary>

                <ul className="ml-3 mt-1 flex flex-col gap-1 border-l border-gray-95 pl-3">
                  {subMenuItems.map((subItem, subIndex) => {
                    const isSubItemActive =
                      subItem.isActiveSubmenu ?? (subItem.hrefSubmenu === pathname);

                    return (
                      <li key={subItem.hrefSubmenu ?? subItem.labelSubmenu ?? subIndex}>
                        <Link
                          to={subItem.hrefSubmenu || ''}
                          className={`flex items-center gap-1 rounded-sm px-1 py-1 duration-300 focus:outline-none
                          ${
                            isSubItemActive
                              ? 'bg-green-40 text-green before:content-[""] before:absolute before:left-4.5 before:w-[0.1rem] before:h-2 before:bg-green'
                              : 'text-gray-80 hover:bg-black-40 hover:text-white'
                          }`}
                        >
                          <span className="text-txt-title4 font-primary-600">
                            {subItem.labelSubmenu}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </details>
            ) : (
              <Link
                to={item.hrefMenu || ''}
                className={`flex items-center gap-1 rounded-sm px-1 py-1 duration-300 relative
                ${
                  isActive
                    ? 'bg-green-70 text-green-10'
                    : 'text-gray-70 hover:bg-gray-40 hover:text-white-50'
                }`}
              >
                <span className="text-txt-title3 font-primary-600">{item.labelMenu}</span>
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Menu;
