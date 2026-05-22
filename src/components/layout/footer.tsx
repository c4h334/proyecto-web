const Footer = () => {
  return (
    <footer className="mt-auto bg-slate-900 text-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Columna de marca y redes */}
          <div>
            <h4 className="mb-4 text-xl font-bold text-white">
              Raul Vega
            </h4>
            <p className="mb-6 leading-relaxed text-slate-300">
              Somos la tienda departamental más grande y 
              surtida de Occidente, con una amplia variedad de 
              departamentos para toda la familia: hogar, niños, juguetería, 
              damas, cosméticos, caballeros, deportes y electrónica.
            </p>

            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 transition-colors hover:bg-blue-700"
                aria-label="Facebook"
              >
                <span className="font-bold text-white">f</span>
              </a>

              <a
                href="https://www.instagram.com/jaque_ovm/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-600 transition-colors hover:bg-pink-700"
                aria-label="Instagram"
              >
                <span className="text-lg text-white">◎</span>
              </a>

              <a
                href="mailto:correo@empresa.com"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 transition-colors hover:bg-red-700"
                aria-label="Email"
              >
                <span className="text-white">✉</span>
              </a>
            </div>
          </div>

          {/* Columna con informacion principal */}
          <div>
            <h4 className="mb-4 text-xl font-bold text-white">Info</h4>

            <div className="space-y-4">
              <div className="flex items-start gap-3 rounded-lg bg-slate-800 p-4 transition-colors hover:bg-slate-700">
                <div className="text-2xl">✉</div>
                <div>
                  <strong className="block text-white">Email</strong>
                  <div className="text-sm text-slate-400">
                    andersonJesusMonchoAlvaricoqui.@ucr.ac.cr
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-lg bg-slate-800 p-4 transition-colors hover:bg-slate-700">
                <div className="text-2xl">📍</div>
                <div>
                  <strong className="block text-white">Dirección</strong>
                  <div className="text-sm text-slate-400">
                    100 metros Oeste del parque central de grecia, Alajuela,
                    Costa Rica
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Columna de contacto rapido */}
          <div>
            <h4 className="mb-4 text-xl font-bold text-white">Contact</h4>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start">
                <span className="mr-3 mt-2 inline-block h-2 w-2 rounded-full bg-blue-500" />
                <span>Email: jose.chaconcalderon@ucr.ac.cr</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-2 inline-block h-2 w-2 rounded-full bg-blue-500" />
                <span>Celular: +506 8992 8602</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-2 inline-block h-2 w-2 rounded-full bg-blue-500" />
                <span>Horas: Lunes-Viernes 8:00AM–5:00PM</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-2 inline-block h-2 w-2 rounded-full bg-blue-500" />
                <span>Ubicación: Costa Rica</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Franja inferior con copyright */}
      <div className="border-t border-slate-700">
        <div className="mx-auto max-w-6xl px-4 py-4 text-center text-sm text-slate-400">
          © 2026 Raul Vega. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
