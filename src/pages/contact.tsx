import React, { useState } from 'react';

const ContactoPage: React.FC = () => {
  const [status, setStatus] = useState<{ type: 'success' | 'error' | '', msg: string }>({ type: '', msg: '' });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ type: '', msg: 'Enviando...' });
    
    // Simulación de envío
    setTimeout(() => {
      setStatus({ type: 'success', msg: '¡Mensaje enviado con éxito!' });
    }, 1500);
  };

  return (
    <div className="bg-[#fbf9f4] min-h-screen flex flex-col">
      <main>
        {/* Banner Hero */}
        <section className="relative min-h-[260px] sm:min-h-[320px] flex items-center justify-center text-center bg-[url('https://scontent.fsyq1-1.fna.fbcdn.net/v/t39.30808-6/655279211_1391049803056320_3802145026444282619_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=2a1932&_nc_ohc=byUIVkws07kQ7kNvwHh_XxG&_nc_oc=AdpSWtC0-k0T9bI3KNd-4Ipd_3SvIxy6GE5HlVr-u9Z06fNU7trhBviNjisbV0bg2aA&_nc_zt=23&_nc_ht=scontent.fsyq1-1.fna&_nc_gid=waOGAvZwLQVFLk_8MR9FWQ&_nc_ss=7b289&oh=00_Af4u6-8mMWfA1_sec02fa2J6QXAOfccxBiZvO3aDy_xIGA&oe=6A02F496')] bg-cover bg-center text-white relative">
          <div className="absolute inset-0 bg-blue-950/80"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-950/35"></div>
          <div className="relative z-10 px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 tracking-tight">Contacto</h1>
            <p className="text-sm sm:text-base md:text-lg text-blue-200 max-w-xl mx-auto leading-relaxed">
              Cuéntenos en qué podemos ayudarle y le responderemos lo antes posible.
            </p>
          </div>
        </section>

        {/* Sección de Formulario e Información */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
            
            {/* Panel de Info de Contacto */}
            <aside className="col-span-1 md:col-span-5 bg-white/80 backdrop-blur-md text-gray-800 rounded-2xl p-6 sm:p-8 shadow-md border border-white/50 flex flex-col justify-between relative">
              <div>
                <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b border-gray-100 pb-4">
                  Datos de contacto
                </h2>
                
                <ul className="space-y-6 text-gray-600">
                  <li className="flex items-start gap-4">
                    <span className="text-2xl mt-0.5">📍</span>
                    <div>
                      <strong className="block text-xs font-semibold uppercase tracking-wider text-blue-900/60 mb-0.5">Dirección</strong>
                      <span className="text-sm sm:text-base text-gray-700 font-medium">Grecia, Alajuela, Costa Rica</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-2xl mt-0.5">📞</span>
                    <div>
                      <strong className="block text-xs font-semibold uppercase tracking-wider text-blue-900/60 mb-0.5">Teléfono</strong>
                      <span className="text-sm sm:text-base text-gray-700 font-medium">+506 8992 8602</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-2xl mt-0.5">✉</span>
                    <div>
                      <strong className="block text-xs font-semibold uppercase tracking-wider text-blue-900/60 mb-0.5">Correo</strong>
                      <span className="text-sm sm:text-base text-gray-700 break-all font-medium">tiendaraulvega@gmail.com</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mt-12">
                <span className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">Síguenos en Redes</span>
                <div className="flex gap-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white transition-all duration-300 text-gray-600 hover:scale-105 shadow-sm"
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
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-pink-600 hover:text-white transition-all duration-300 text-gray-600 hover:scale-105 shadow-sm"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                </div>
              </div>
            </aside>

            {/* Formulario */}
            <section className="col-span-1 md:col-span-7 bg-white/80 backdrop-blur-md border border-white/50 rounded-2xl p-6 sm:p-8 shadow-md">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b border-gray-100 pb-4">
                Envíenos su consulta
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Honeypot anti-spam */}
                <input type="text" className="hidden" tabIndex={-1} />
                
                <div className="flex flex-col">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5">
                    Tipo de consulta *
                  </label>
                  <select 
                    name="motivo" 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/95 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 transition-all text-sm"
                  >
                    <option value="">Seleccione...</option>
                    <option value="Devolucion">Devolución</option>
                    <option value="Consulta">Consulta</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5">
                      Nombre y apellidos *
                    </label>
                    <input 
                      type="text" 
                      name="nombre" 
                      required 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/95 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 transition-all text-sm"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5">
                      Email *
                    </label>
                    <input 
                      type="email" 
                      name="correo" 
                      required 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/95 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 transition-all text-sm"
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5">
                    Número Telefónico *
                  </label>
                  <input 
                    type="text" 
                    name="telefono" 
                    required 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/95 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 transition-all text-sm"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5">
                    Mi consulta es... *
                  </label>
                  <textarea 
                    name="mensaje" 
                    rows={5} 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/95 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 transition-all text-sm resize-none"
                  ></textarea>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                  <button 
                    type="submit" 
                    className="w-full sm:w-auto bg-blue-900 hover:bg-blue-800 text-white font-bold py-3.5 px-8 rounded-xl shadow-lg transition-all active:scale-[0.98] duration-150 text-sm cursor-pointer"
                  >
                    Enviar Mensaje
                  </button>
                  {status.msg && (
                    <div className={`text-sm font-semibold ${status.type === 'success' ? 'text-green-600' : 'text-gray-500 animate-pulse'}`}>
                      {status.msg}
                    </div>
                  )}
                </div>
              </form>
            </section>
          </div>
        </section>

        {/* Mapa de Google */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="w-full h-[360px] md:h-[450px] rounded-2xl overflow-hidden shadow-md border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3554.927659419368!2d-84.31221099999999!3d10.072603100000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa059ab35612c7f%3A0x1fe558cf2b4062d7!2sRa%C3%BAl%20Vega!5e1!3m2!1ses!2scr!4v1778181528879!5m2!1ses!2scr"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="Ubicación Raúl Vega"
            ></iframe>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ContactoPage;