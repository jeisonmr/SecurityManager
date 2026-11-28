import { BrowserRouter, Route, Routes } from "react-router";

import Home from '@views/home';
import GenerationPassword from "@views/GenerationPassword";
import EncryptionStoredPassword from "../views/EncryptionStoredPassword";
import SelectFiles from "../views/SelectFiles";
import EncryptPassword from "../views/EncryptPassword";
import DownloadEncryptedFile from "../views/DownloadEncryptedFile";
import RecoverFile from "../views/RecoverFile";
import GenerateHashes from "../views/GenerateHashes";
import CompareHashes from "../views/CompareHashes";
import VerifyFileIntegrity from "../views/VerifyFileIntegrity";
import DetectDocumentChanges from "../views/DetectDocumentChanges";
import SignMessages from "../views/SignMessages";
import GenerateKeyPairs from "../views/GenerateKeyPairs";
import VerifySignatures from "../views/VerifySignatures";
import VerifyContent from "../views/VerifyContent";
import GenerateTOTP from "../views/GenerateTOTP";
import RegisterAccountsQR from "../views/RegisterAccountsQR";
import ValidateCodes from "../views/ValidateCodes";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} >
          <Route path="/gestor-de-contrasenas/generacion-de-contrasenas-seguras" element={<GenerationPassword />} />
          <Route path="/gestor-de-contrasenas/cifrado-de-contrasenas-seguras" element={<EncryptionStoredPassword/>} />
          {/* <Route path="/gestor-de-contrasenas/desbloqueo-mediante-contrasena-maestra" element={<div>gestor-de-contraseñas</div>} /> */}
          {/* <Route path="/gestor-de-contrasenas/almacenamiento-local-cifrado" element={<div>gestor-de-contraseñas</div>} /> */}
          <Route path="/cifrador-y-descifrador-de-archivos/seleccionar-archivo" element={<SelectFiles />} />
          <Route path="/cifrador-y-descifrador-de-archivos/cifrar-archivo" element={<EncryptPassword />} />
          <Route path="/cifrador-y-descifrador-de-archivos/descargar-archivo-cifrado" element={<DownloadEncryptedFile />} />
          <Route path="/cifrador-y-descifrador-de-archivos/recuperar-archivo" element={<RecoverFile />} />
          <Route path="/generador-y-verificador-de-hashes/generar-hashes" element={<GenerateHashes />} />
          <Route path="/generador-y-verificador-de-hashes/comparar-hashes" element={<CompareHashes />} />
          <Route path="/generador-y-verificador-de-hashes/verificar-integridad-de-archivos" element={<VerifyFileIntegrity />} />
          <Route path="/generador-y-verificador-de-hashes/detectar-modificaciones-en-documentos" element={<DetectDocumentChanges />} />
          <Route path="/firmador-y-verificador-digital/firmar-mensajes" element={<SignMessages />} />
          <Route path="/firmador-y-verificador-digital/generar-pares-de-claves" element={<GenerateKeyPairs />} />
          <Route path="/firmador-y-verificador-digital/verificar-firmas" element={<VerifySignatures />} />
          <Route path="/firmador-y-verificador-digital/comprobar-contenido" element={<VerifyContent />} />
          <Route path="/aplicacion-de-autenticacion-2fa/generar-codigos-totp" element={<GenerateTOTP />} />
          <Route path="/aplicacion-de-autenticacion-2fa/registrar-cuentas-via-qr" element={<RegisterAccountsQR />} />
          <Route path="/aplicacion-de-autenticacion-2fa/validar-codigos" element={<ValidateCodes />} />
        </Route>
        <Route path="*" element={<div>404 - Página no encontrada</div>} />
      </Routes>
    </BrowserRouter>
  );
};
