import { BrowserRouter, Route, Routes } from "react-router";

import Home from '@views/home';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} >
          <Route path="/gestor-de-contraseñas/generacion-de-contrasenas-seguras" element={<div>gestor-de-contraseñas</div>} />
          <Route path="/gestor-de-contraseñas/cifrado-de-contraseñas-seguras" element={<div>gestor-de-contraseñas</div>} />
          <Route path="/gestor-de-contraseñas/desbloqueo-mediante-contraseña-maestra" element={<div>gestor-de-contraseñas</div>} />
          <Route path="/gestor-de-contraseñas/almacenamiento-local-cifrado" element={<div>gestor-de-contraseñas</div>} />
          <Route path="/cifrador-y-descifrador-de-archivos/seleccionar-archivo" element={<div>cifrador-y-descifrador</div>} />
          <Route path="/cifrador-y-descifrador-de-archivos/cifrar-archivo" element={<div>cifrador-y-descifrador</div>} />
          <Route path="/cifrador-y-descifrador-de-archivos/descargar-archivo-cifrado" element={<div>cifrador-y-descifrador</div>} />
          <Route path="/cifrador-y-descifrador-de-archivos/recuperar-archivo" element={<div>cifrador-y-descifrador</div>} />
          <Route path="/generador-y-verificador-de-hashes/generar-hashes" element={<div>generador-y-verificador</div>} />
          <Route path="/generador-y-verificador-de-hashes/comparar-hashes" element={<div>generador-y-verificador</div>} />
          <Route path="/generador-y-verificador-de-hashes/verificar-integridad-de-archivos" element={<div>generador-y-verificador</div>} />
          <Route path="/generador-y-verificador-de-hashes/detectar-modificaciones-en-documentos" element={<div>generador-y-verificador</div>} />
          <Route path="/firmador-y-verificador-digital/firmar-mensajes" element={<div>firmador-y-verificador</div>} />
          <Route path="/firmador-y-verificador-digital/generar-pares-de-claves" element={<div>firmador-y-verificador</div>} />
          <Route path="/firmador-y-verificador-digital/verificar-firmas" element={<div>firmador-y-verificador</div>} />
          <Route path="/firmador-y-verificador-digital/comprobar-contenido" element={<div>firmador-y-verificador</div>} />
          <Route path="/aplicacion-de-autenticacion-2fa/generar-codigos-totp" element={<div>aplicacion-de-autenticacion</div>} />
          <Route path="/aplicacion-de-autenticacion-2fa/registrar-cuentas-via-qr" element={<div>aplicacion-de-autenticacion</div>} />
          <Route path="/aplicacion-de-autenticacion-2fa/validar-codigos" element={<div>aplicacion-de-autenticacion</div>} />
        </Route>
        <Route path="*" element={<div>404 - Página no encontrada</div>} />
      </Routes>
    </BrowserRouter>
  );
};
