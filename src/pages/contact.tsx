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
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        :root {
          --accent: #0e00a4;
          --border: rgba(0, 0, 0, 0.1);
          --surface: #1d008fe7;
          --text: #ffffff;
          --muted: #ffffff;
          --radius: 12px;
          --shadow: 0 4px 20px rgba(6, 17, 70, 0.93);
        }

        .contact-hero {
          position: relative;
          min-height: 340px;
          display: grid;
          place-items: center;
          text-align: center;
          padding: 80px 20px;
          background: linear-gradient(90deg, rgba(0,0,0,.65), rgba(0,0,0,.35)), url("https://scontent.fsyq1-1.fna.fbcdn.net/v/t39.30808-6/655279211_1391049803056320_3802145026444282619_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=2a1932&_nc_ohc=byUIVkws07kQ7kNvwHh_XxG&_nc_oc=AdpSWtC0-k0T9bI3KNd-4Ipd_3SvIxy6GE5HlVr-u9Z06fNU7trhBviNjisbV0bg2aA&_nc_zt=23&_nc_ht=scontent.fsyq1-1.fna&_nc_gid=waOGAvZwLQVFLk_8MR9FWQ&_nc_ss=7b289&oh=00_Af4u6-8mMWfA1_sec02fa2J6QXAOfccxBiZvO3aDy_xIGA&oe=6A02F496");
          background-size: cover;
          background-position: center;
          border-bottom: 1px solid var(--border);
          color: white;
        }

        .contact-hero__overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 30% 30%, rgba(255,255,255,.08), transparent 55%);
          pointer-events: none;
        }

        .contact-hero h1 { margin: 0 0 12px; font-size: clamp(32px, 4vw, 52px); }
        .contact-hero p { color: rgba(255,255,255,.85); font-size: clamp(15px, 1.5vw, 18px); }

        .contact-page { padding: 50px 20px; max-width: 1150px; margin: 0 auto; color: var(--text); }
        .contact-grid { display: grid; grid-template-columns: 1fr 1.2fr; gap: 32px; }

        .contact-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 32px;
          box-shadow: var(--shadow);
        }

        .contact-list { list-style: none; padding: 0; margin: 0 0 24px; display: grid; gap: 16px; }
        .contact-list .k { display: block; font-size: 12px; color: var(--muted); margin-bottom: 4px; }
        .contact-list .v { display: block; font-size: 14px; }

        .form-group { display: flex; flex-direction: column; margin-bottom: 18px; }
        .form-group label { font-size: 14px; margin-bottom: 6px; color: var(--muted); }

        .form-group input, .form-group select, .form-group textarea {
          padding: 12px 14px;
          border-radius: 12px;
          border: 1px solid var(--border);
          background: rgba(208, 240, 241, 0.89);
          color: var(--text);
          font-size: 14px;
          transition: all .2s ease;
        }

        .form-group input:focus, .form-group select:focus, .form-group textarea:focus {
          outline: none;
          border-color: var(--accent);
          box-shadow: 0 0 0 4px rgba(255, 111, 0, 0.2);
        }

        .row-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }

        .btn-primary {
          width: fit-content;
          padding: 12px 22px;
          border-radius: 12px;
          border: none;
          background: var(--accent);
          color: #ffffff;
          cursor: pointer;
          font-weight: 600;
          transition: transform .15s ease;
        }

        .btn-primary:hover { opacity: .9; transform: translateY(-1px); }
        .form-status.success { color: #16a34a; margin-top: 10px; }

        .contact-map-full { width: 100%; height: 520px; margin-top: 60px; border-top: 1px solid var(--border); }
        .hp { display: none; }

        @media (max-width: 900px) {
          .contact-grid, .row-2 { grid-template-columns: 1fr; }
          .contact-map-full { height: 360px; }
        }
      ` }} />

      <main>
        <section className="contact-hero">
          <div className="contact-hero__overlay"></div>
          <div className="contact-hero__inner">
            <h1>Contacto</h1>
            <p>Cuéntenos en qué podemos ayudarle y le respondemos lo antes posible.</p>
          </div>
        </section>

        <section className="contact-page">
          <div className="contact-grid">
            {/* Panel Info */}
            <aside className="contact-card">
              <h2>Datos de contacto</h2>
              <ul className="contact-list">
                <li><span className="k">Dirección</span><span className="v">Grecia, Alajuela, Costa Rica</span></li>
                <li><span className="k">Teléfono</span><span className="v">+506 XXXX-XXXX</span></li>
                <li><span className="k">Correo</span><span className="v">tiendaraulvega@gmail.com</span></li>
              </ul>
            </aside>

            {/* Formulario */}
            <section className="contact-card">
              <h2>Envíenos su consulta</h2>
              <form onSubmit={handleSubmit}>
                <input type="text" className="hp" tabIndex={-1} />
                
                <div className="form-group">
                  <label>Tipo de consulta *</label>
                  <select name="motivo" required>
                    <option value="">Seleccione...</option>
                    <option value="Devolucion">Devolucion</option>
                    <option value="Consulta">Consulta</option>
                  </select>
                </div>

                <div className="row-2">
                  <div className="form-group">
                    <label>Nombre y apellidos *</label>
                    <input type="text" name="nombre" required />
                  </div>
                  <div className="form-group">
                    <label>Email *</label>
                    <input type="email" name="correo" required />
                  </div>
                </div>

                <div className="row-3">
                  <div className="form-group">
                    <label>Número Telefónico *</label>
                    <input type="text" name="telefono" required />
                  </div>
                </div>

                <div className="form-group">
                  <label>Mi consulta es... *</label>
                  <textarea name="mensaje" rows={6} required></textarea>
                </div>

                <div className="form-actions">
                  <button type="submit" className="btn-primary">Enviar</button>
                  {status.msg && <div className={`form-status ${status.type}`}>{status.msg}</div>}
                </div>
              </form>
            </section>
          </div>
        </section>

        <section className="contact-map-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3554.927659419368!2d-84.31221099999999!3d10.072603100000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa059ab35612c7f%3A0x1fe558cf2b4062d7!2sRa%C3%BAl%20Vega!5e1!3m2!1ses!2scr!4v1778181528879!5m2!1ses!2scr"
            width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
          ></iframe>
        </section>
      </main>
    </>
  );
};

export default ContactoPage;