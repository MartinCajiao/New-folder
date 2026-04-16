export const Hero = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Fondo Decorativo */}
      <div className="absolute inset-y-0 right-0 w-1/2 bg-blue-50/50 rounded-l-full -z-10 transform translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 md:pt-32 md:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Columna de Texto */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold tracking-wide uppercase">
              APADA DEL ECUADOR
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Apoyando a familias en el camino del{" "}
              <span className="text-blue-600">autismo</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 max-w-lg leading-relaxed">
              Somos una organización sin fines de lucro que reúne a familias,
              profesionales y personas interesadas en el Trastorno del Espectro
              Autista (TEA).
            </p>

            {/* Botones de Acción */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="/donaciones"
                className="inline-flex justify-center items-center px-8 py-4 text-base font-bold text-white bg-orange-500 hover:bg-orange-600 rounded-xl shadow-lg hover:shadow-orange-500/30 transition-all duration-300 transform hover:-translate-y-1"
              >
                Colabora con nosotros
              </a>
              <a
                href="/nosotros"
                className="inline-flex justify-center items-center px-8 py-4 text-base font-bold text-slate-700 bg-white border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 rounded-xl transition-all duration-300"
              >
                Conócenos
              </a>
            </div>
          </div>

          {/* Columna de Imagen */}
          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="w-full h-full bg-slate-200 flex items-center justify-center">
                <span className="text-slate-400 font-medium">
                  [Imagen de Comunidad APADA]
                </span>
              </div>
            </div>

            {/* Tarjeta de Impacto */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-4 animate-bounce-slow">
              <div className="bg-green-100 p-3 rounded-full text-green-600">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">
                  +200 Familias
                </p>
                <p className="text-xs text-slate-500">apoyadas este año</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
