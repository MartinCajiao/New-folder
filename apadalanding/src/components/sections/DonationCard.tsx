import { useState } from "react";

export const DonationCard = () => {
  // Estado para manejar el feedback visual al copiar
  const [copiado, setCopiado] = useState<string | null>(null);

  // Los datos estáticos (esto luego podría venir de tu capa de constants si prefieres)
  const bankInfo = {
    titular: "APADA del Ecuador", // Versión resumida para la Card, la larga va en el legal
    banco: "Banco Internacional",
    tipo: "Cuenta Corriente",
    cuenta: "700634693",
    ruc: "1792436648001",
    email: "tesoreria@apadadelecuador.org",
  };

  const copiarAlPortapapeles = (texto: string, campo: string) => {
    navigator.clipboard.writeText(texto);
    setCopiado(campo);
    setTimeout(() => setCopiado(null), 2000); // El mensaje desaparece a los 2 segundos
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
      {/* Header de la Card */}
      <div className="bg-blue-600 p-6 text-white text-center">
        <h3 className="text-2xl font-bold mb-2">
          Apoya nuestra misión en Ecuador
        </h3>
        <p className="text-blue-100 text-sm">
          Cada aporte que realizas nos ayuda a seguir acompañando a familias y
          personas adultas autistas en todo el país.
        </p>
      </div>

      {/* Cuerpo con los datos bancarios */}
      <div className="p-8 space-y-6">
        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
          <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">
            Datos para Transferencia Bancaria
          </h4>

          <ul className="space-y-4 text-slate-700">
            <li className="flex flex-col sm:flex-row sm:justify-between border-b border-slate-200 pb-3">
              <span className="font-medium text-slate-900">Titular:</span>
              <span className="text-right">{bankInfo.titular}</span>
            </li>
            <li className="flex flex-col sm:flex-row sm:justify-between border-b border-slate-200 pb-3">
              <span className="font-medium text-slate-900">Banco:</span>
              <span className="text-right">
                {bankInfo.banco} ({bankInfo.tipo})
              </span>
            </li>

            {/* Fila copiable: Cuenta */}
            <li className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center border-b border-slate-200 pb-3">
              <span className="font-medium text-slate-900">
                Número de Cuenta:
              </span>
              <div className="flex items-center gap-3 mt-1 sm:mt-0">
                <span className="font-mono bg-blue-50 px-2 py-1 rounded text-blue-800 font-semibold tracking-wide">
                  {bankInfo.cuenta}
                </span>
                <button
                  onClick={() =>
                    copiarAlPortapapeles(bankInfo.cuenta, "cuenta")
                  }
                  className="text-sm text-blue-600 hover:text-blue-800 transition-colors font-medium"
                >
                  {copiado === "cuenta" ? "✓ Copiado" : "Copiar"}
                </button>
              </div>
            </li>

            {/* Fila copiable: RUC */}
            <li className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center border-b border-slate-200 pb-3">
              <span className="font-medium text-slate-900">RUC:</span>
              <div className="flex items-center gap-3 mt-1 sm:mt-0">
                <span className="font-mono bg-blue-50 px-2 py-1 rounded text-blue-800 font-semibold tracking-wide">
                  {bankInfo.ruc}
                </span>
                <button
                  onClick={() => copiarAlPortapapeles(bankInfo.ruc, "ruc")}
                  className="text-sm text-blue-600 hover:text-blue-800 transition-colors font-medium"
                >
                  {copiado === "ruc" ? "✓ Copiado" : "Copiar"}
                </button>
              </div>
            </li>

            <li className="flex flex-col sm:flex-row sm:justify-between pt-1">
              <span className="font-medium text-slate-900">
                Comprobantes a:
              </span>
              <a
                href={`mailto:${bankInfo.email}`}
                className="text-blue-600 hover:underline"
              >
                {bankInfo.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
