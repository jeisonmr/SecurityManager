import { Link, useLocation } from 'react-router';

import Menu from '@core/component/Menu';

import Iconlogo from '@assets/icons/shield.png';
import IconPanel from '@assets/icons/panel_gray.png';
import IconPanelActive from '@assets/icons/panel_green.png';

import passwordsBlack from '@assets/icons/passwords_black.png';
import passwordsGreen from '@assets/icons/passwords_green.png';
import filesBlack from '@assets/icons/files_black.png';
import filesGreen from '@assets/icons/files_green.png';
import hashesBlack from '@assets/icons/hashes_black.png';
import hashesGreen from '@assets/icons/hashes_green.png';
import signatureBlack from '@assets/icons/signature_black.png';
import signatureGreen from '@assets/icons/signature_green.png';
import twofaBlack from '@assets/icons/2fa_black.png';
import twofaGreen from '@assets/icons/2fa_green.png';

const menuItems = [
  {
    labelMenu: 'Gestor de contraseñas',
    hrefMenu: '/gestor-de-contraseñas',
    iconMenu: passwordsBlack,
    iconActiveMenu: passwordsGreen,
    subMenuItems: [
      {
        labelSubmenu: 'Generación de contraseñas seguras',
        hrefSubmenu: '/gestor-de-contraseñas/generacion-de-contrasenas-seguras',
      },
      {
        labelSubmenu: 'Cifrado de contraseñas seguras',
        hrefSubmenu: '/gestor-de-contraseñas/cifrado-de-contraseñas-seguras',
      },
      {
        labelSubmenu: 'Desbloqueo mediante contraseña maestra',
        hrefSubmenu: '/gestor-de-contraseñas/desbloqueo-mediante-contraseña-maestra',
      },
      {
        labelSubmenu: 'Almacenamiento local cifrado',
        hrefSubmenu: '/gestor-de-contraseñas/almacenamiento-local-cifrado',
      },
    ],
  },
  {
    labelMenu: 'Cifrador y descifrador de archivos',
    hrefMenu: '/cifrador-y-descifrador-de-archivos',
    iconMenu: filesBlack,
    iconActiveMenu: filesGreen,
    subMenuItems: [
      {
        labelSubmenu: 'Seleccionar archivo',
        hrefSubmenu: '/cifrador-y-descifrador-de-archivos/seleccionar-archivo',
      },
      {
        labelSubmenu: 'Cifrarlos con una contraseña',
        hrefSubmenu: '/cifrador-y-descifrador-de-archivos/cifrar-archivo',
      },
      {
        labelSubmenu: 'Descargar archivo cifrado',
        hrefSubmenu: '/cifrador-y-descifrador-de-archivos/descargar-archivo-cifrado',
      },
      {
        labelSubmenu: 'Recuperar archivo mediante clave',
        hrefSubmenu: '/cifrador-y-descifrador-de-archivos/recuperar-archivo',
      },
    ],
  },
  {
    labelMenu: 'Generador y verificador de hashes',
    hrefMenu: '/generador-y-verificador-de-hashes',
    iconMenu: hashesBlack,
    iconActiveMenu: hashesGreen,
    subMenuItems: [
      {
        labelSubmenu: 'Generar SHA-256 y SHA-512',
        hrefSubmenu: '/generador-y-verificador-de-hashes/generar-hashes',
      },
      {
        labelSubmenu: 'Comparar hashes',
        hrefSubmenu: '/generador-y-verificador-de-hashes/comparar-hashes',
      },
      {
        labelSubmenu: 'Verificar integridad de archivos',
        hrefSubmenu: '/generador-y-verificador-de-hashes/verificar-integridad-de-archivos',
      },
      {
        labelSubmenu: 'Detectar modificaciones en documentos',
        hrefSubmenu: '/generador-y-verificador-de-hashes/detectar-modificaciones-en-documentos',
      },
    ],
  },
  {
    labelMenu: 'Firmador y verificador digital',
    hrefMenu: '/firmador-y-verificador-digital',
    iconMenu: signatureBlack,
    iconActiveMenu: signatureGreen,
    subMenuItems: [
      {
        labelSubmenu: 'Firmar mensajes digitalmente',
        hrefSubmenu: '/firmador-y-verificador-digital/firmar-mensajes',
      },
      {
        labelSubmenu: 'Generar pares de claves',
        hrefSubmenu: '/firmador-y-verificador-digital/generar-pares-de-claves',
      },
      {
        labelSubmenu: 'Verificar la autenticidad de firmas',
        hrefSubmenu: '/firmador-y-verificador-digital/verificar-firmas',
      },
      {
        labelSubmenu: 'Comprobar que el contenido no sea alterado',
        hrefSubmenu: '/firmador-y-verificador-digital/comprobar-contenido',
      },
    ],
  },
  {
    labelMenu: 'Aplicación de autenticación 2FA',
    hrefMenu: '/aplicacion-de-autenticacion-2fa',
    iconMenu: twofaBlack,
    iconActiveMenu: twofaGreen,
    subMenuItems: [
      {
        labelSubmenu: 'Generar códigos temporales TOTP',
        hrefSubmenu: '/aplicacion-de-autenticacion-2fa/generar-codigos-totp',
      },
      {
        labelSubmenu: 'Registrar cuentas mediante códigos QR',
        hrefSubmenu: '/aplicacion-de-autenticacion-2fa/registrar-cuentas-via-qr',
      },
      {
        labelSubmenu: 'Validar códigos de autenticación',
        hrefSubmenu: '/aplicacion-de-autenticacion-2fa/validar-codigos',
      },
    ],
  },
];

const Nav = () => {
  const { pathname: activePath } = useLocation();

  return (
    <nav className="h-full w-30 bg-black py-2 desktop:border-r desktop:border-gray-700">
      <div className="flex items-center gap-1 border-b border-gray-700 p-2">
        <img src={Iconlogo} alt="Security Manager" className="h-2.5 w-2.5" />
        <h1 className="text-txt-title2 font-secondary-600">Security Manager</h1>
      </div>

      <div className="p-1.5">
        <div
          className={`${
            activePath === '/' ? 'bg-green-50 text-green' : 'bg-gray-62'
          } mb-1 flex items-center gap-1 rounded-sm px-1 py-1 duration-300`}
        >
          {activePath === '/' ? (
            <img src={IconPanelActive} alt="Panel activo" className="h-2 w-2" />
          ) : (
            <img src={IconPanel} alt="Panel" className="h-2 w-2" />
          )}
          <Link to="/">
            <h3 className="text-txt-title3 font-primary-600">Panel</h3>
          </Link>
        </div>

        <p className="inline-block h-auto w-full p-1 pb-0.5 text-txt-title4 font-secondary-300 text-gray-70 uppercase">
          Herramientas
        </p>

        <Menu menuItems={menuItems} />
      </div>
    </nav>
  );
};

export default Nav;
