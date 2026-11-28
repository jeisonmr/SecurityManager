const IconPassword:string = `<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.5 11.875C9.5 13.6239 8.08224 15.0417 6.33333 15.0417C4.58443 15.0417 3.16667 13.6239 3.16667 11.875C3.16667 10.1261 4.58443 8.70833 6.33333 8.70833C8.08224 8.70833 9.5 10.1261 9.5 11.875Z" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor"/>
<path d="M8.70833 9.5L15.8333 2.375M12.6667 5.54167L15.0417 7.91667M14.25 3.95833L16.625 6.33333" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor"/>
</svg>`;

const IconFiles:string = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
  <polyline points="14 2 14 8 20 8" />
  <rect x="8" y="13" width="8" height="6" rx="1" />
  <path d="M12 13v-2a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v2" />
</svg>
`;

const IconHashes:string = `<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.5 8.70833C9.08007 8.70833 8.67735 8.87515 8.38041 9.17208C8.08348 9.46901 7.91667 9.87174 7.91667 10.2917C7.91667 13.0625 7.3625 14.8042 6.65 15.8333M11.0833 10.2917C11.0833 12.7458 10.7667 14.4083 10.1333 15.8333M5.7 14.0917C5.4625 14.8833 5.14583 15.5958 4.75 16.2292M4.43333 13.3792C4.67083 12.4292 4.75 11.4 4.75 10.2917C4.75 9.03189 5.25045 7.82371 6.14124 6.93291C7.03204 6.04211 8.24022 5.54167 9.5 5.54167C10.7598 5.54167 11.968 6.04211 12.8588 6.93291C13.7496 7.82371 14.25 9.03189 14.25 10.2917C14.25 12.5083 14.0917 14.3292 13.6167 15.8333M9.5 2.375C8.46037 2.375 7.43092 2.57977 6.47042 2.97762C5.50993 3.37547 4.6372 3.95861 3.90207 4.69374C2.41741 6.1784 1.58333 8.19204 1.58333 10.2917M13.3 5.7C14.2585 6.15101 15.1167 6.7898 15.8238 7.57851C16.5309 8.36722 17.0726 9.28982 17.4167 10.2917C17.4167 11.2417 17.4167 12.1125 17.3375 12.9042" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor"/>
</svg>
`;

const IconSignature:string = `<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.875 3.95833L15.0417 7.125M3.16667 15.8333L6.57083 15.1208L15.8333 5.85833C16.1483 5.54339 16.3252 5.11623 16.3252 4.67083C16.3252 4.22543 16.1483 3.79828 15.8333 3.48333C15.5184 3.16839 15.0912 2.99146 14.6458 2.99146C14.2004 2.99146 13.7733 3.16839 13.4583 3.48333L4.19583 12.7458L3.16667 15.8333Z" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor"/>
<path d="M10.2917 15.8333H16.625" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor"/>
</svg>
`;

const IconTwoFA:string = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
  <line x1="12" y1="18" x2="12.01" y2="18" />
</svg>
`;

export const menuItems = [
  {
    labelMenu: 'Gestor de contraseñas',
    hrefMenu: '/gestor-de-contrasenas',
    iconMenu: IconPassword,
    subMenuItems: [
      {
        labelSubmenu: 'Generación de contraseñas seguras',
        hrefSubmenu: '/gestor-de-contrasenas/generacion-de-contrasenas-seguras',
      },
      {
        labelSubmenu: 'Cifrado de contraseñas seguras',
        hrefSubmenu: '/gestor-de-contrasenas/cifrado-de-contrasenas-seguras',
      },
      // {
      //   labelSubmenu: 'Desbloqueo mediante contraseña maestra',
      //   hrefSubmenu: '/gestor-de-contrasenas/desbloqueo-mediante-contrasena-maestra',
      // },
      // {
      //   labelSubmenu: 'Almacenamiento local cifrado',
      //   hrefSubmenu: '/gestor-de-contrasenas/almacenamiento-local-cifrado',
      // },
    ],
  },
  {
    labelMenu: 'Cifrador y descifrador de archivos',
    hrefMenu: '/cifrador-y-descifrador-de-archivos',
    iconMenu: IconFiles,
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
    iconMenu: IconHashes,
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
    iconMenu: IconSignature,
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
    iconMenu: IconTwoFA,
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