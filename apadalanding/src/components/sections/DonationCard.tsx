import { useState } from "react";
// Ajusta la ruta según dónde hayas guardado el archivo del paso anterior
// Ejemplo si estás más profundo en las carpetas
import { BANK_INFO } from "../../core/constants/site-info";

export const DonationCard = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, fieldId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldId);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
      {/* Cabecera */}
      <div className="bg-blue-600 p-6 text-white text-center">
        <h3 className="text-2xl font-bold mb-2">
          Apoya nuestra misión en Ecuador
        </h3>
        <p className="text-blue-100 text-sm">
          Cada aporte que realizas nos ayuda a seguir acompañando a familias y
          personas adultas autistas en todo el país.
        </p>
      </div>

      {/* Datos bancarios */}
      <div className="p-8 space-y-6">
        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
          <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">
            Datos para Transferencia Bancaria
          </h4>

          <ul className="space-y-4 text-slate-700">
            <li className="flex flex-col sm:flex-row sm:justify-between border-b border-slate-200 pb-3">
              <span className="font-medium text-slate-900">Titular:</span>
              <span className="text-right">{BANK_INFO.accountHolder}</span>
            </li>
            <li className="flex flex-col sm:flex-row sm:justify-between border-b border-slate-200 pb-3">
              <span className="font-medium text-slate-900">Banco:</span>
              <span className="text-right">
                {BANK_INFO.bankName} ({BANK_INFO.accountType})
              </span>
            </li>

            {/* Fila copiable: Cuenta */}
            <li className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center border-b border-slate-200 pb-3">
              <span className="font-medium text-slate-900">
                Número de Cuenta:
              </span>
              <div className="flex items-center gap-3 mt-1 sm:mt-0">
                <span className="font-mono bg-blue-50 px-2 py-1 rounded text-blue-800 font-semibold tracking-wide">
                  {BANK_INFO.accountNumber}
                </span>
                <button
                  onClick={() =>
                    copyToClipboard(BANK_INFO.accountNumber, "accountNumber")
                  }
                  className="text-sm text-blue-600 hover:text-blue-800 transition-colors font-medium"
                >
                  {copiedField === "accountNumber" ? "✓ Copiado" : "Copiar"}
                </button>
              </div>
            </li>

            {/* Fila copiable: RUC */}
            <li className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center border-b border-slate-200 pb-3">
              <span className="font-medium text-slate-900">RUC:</span>
              <div className="flex items-center gap-3 mt-1 sm:mt-0">
                <span className="font-mono bg-blue-50 px-2 py-1 rounded text-blue-800 font-semibold tracking-wide">
                  {BANK_INFO.taxId}
                </span>
                <button
                  onClick={() => copyToClipboard(BANK_INFO.taxId, "taxId")}
                  className="text-sm text-blue-600 hover:text-blue-800 transition-colors font-medium"
                >
                  {copiedField === "taxId" ? "✓ Copiado" : "Copiar"}
                </button>
              </div>
            </li>

            <li className="flex flex-col sm:flex-row sm:justify-between pt-1">
              <span className="font-medium text-slate-900">
                Comprobantes a:
              </span>
              <a
                href={`mailto:${BANK_INFO.receiptEmail}`}
                className="text-blue-600 hover:underline"
              >
                {BANK_INFO.receiptEmail}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
