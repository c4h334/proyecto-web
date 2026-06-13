const Footer = () => {
  return (
    <footer className="mt-auto bg-[#014681] text-blue-50/90">
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
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1877F2] transition-colors hover:bg-[#1877F2]/90 text-white"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                </svg>
              </a>

              <a
                href="https://www.instagram.com/jaque_ovm/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-600 transition-colors hover:bg-pink-700 text-white"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
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
              <div className="flex items-start gap-3 rounded-lg bg-[#014681] p-4 transition-colors hover:bg-blue-950/60 border border-white/5">
                <div className="text-2xl">✉</div>
                <div>
                  <strong className="block text-white">Email</strong>
                  <div className="text-sm text-blue-200/80">
                    andersonJesusMonchoAlvaricoqui.@ucr.ac.cr
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-lg bg-[#014681] p-4 transition-colors hover:bg-blue-950/60 border border-white/5">
                <div className="text-2xl">📍</div>
                <div>
                  <strong className="block text-white">Dirección</strong>
                  <div className="text-sm text-blue-200/80">
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
                <span className="mr-3 mt-2 inline-block h-2 w-2 rounded-full bg-[#014681]" />
                <span>Email: jose.chaconcalderon@ucr.ac.cr</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-2 inline-block h-2 w-2 rounded-full bg-[#014681]" />
                <span>Celular: +506 8992 8602</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-2 inline-block h-2 w-2 rounded-full bg-[#014681]" />
                <span>Horas: Lunes-Viernes 8:00AM–5:00PM</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-2 inline-block h-2 w-2 rounded-full bg-[#014681]" />
                <span>Ubicación: Costa Rica</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Franja inferior con copyright */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-4 text-center text-sm text-blue-200/60">
          © 2026 Raul Vega. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
