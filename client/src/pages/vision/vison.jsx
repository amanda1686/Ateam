import React from 'react';
import video1 from '../../../public/img/video1.mp4';

function Vision() {
  return (
    <div className="text-gray-800 rounded-lg dark:text-white">
        <div className="slide">
          <video className="w-full mb-9" src={video1} autoPlay loop muted />
        </div>
      <h2 className="text-2xl font-bold mb-4 pl-8">Nuestra Visión: Sostenibilidad en Cada Sorbo</h2>
      <p className="mb-4 pl-8">En A Team, nuestra visión va más allá de simplemente ofrecer deliciosos cafés; nos esforzamos por ser una fuerza positiva para el medio ambiente en cada paso que damos. Creemos firmemente en la responsabilidad ambiental y nos comprometemos a llevar a cabo prácticas sostenibles en cada aspecto de nuestra operación.</p>
      <h3 className="text-xl font-bold mb-2 pl-8">Cultivando un Futuro Verde</h3>
      <p className="mb-4 pl-8">Desde la granja hasta la taza, nos esforzamos por minimizar nuestro impacto en el medio ambiente. Trabajamos en estrecha colaboración con agricultores que comparten nuestros valores de sostenibilidad, promoviendo prácticas agrícolas responsables y apoyando comunidades locales.</p>
      <h3 className="text-xl font-bold mb-2 pl-8">Empaque Eco-Consciente</h3>
      <p className="mb-4 pl-8">Nos comprometemos a reducir el desperdicio y minimizar nuestra huella de carbono mediante el uso de empaques eco-amigables y materiales reciclables en cada producto que ofrecemos. Además, fomentamos activamente el reciclaje y la reutilización entre nuestros clientes para promover un ciclo de vida sostenible.</p>
      <h3 className="text-xl font-bold mb-2 pl-8">Innovación para un Mundo Mejor</h3>
      <p className="mb-4 pl-8">Estamos constantemente buscando nuevas formas de innovar y mejorar nuestras prácticas comerciales para reducir nuestro impacto ambiental. Desde la introducción de métodos de producción más eficientes hasta la implementación de tecnologías eco-amigables en nuestras tiendas, estamos comprometidos con el progreso hacia un futuro más verde.</p>
      <h3 className="text-xl font-bold mb-2 pl-8">Juntos, Haciendo un Impacto Positivo</h3>
      <p className="mb-4 pl-8">En A Team, creemos en el poder de la comunidad y en el impacto positivo que podemos lograr juntos. Nos esforzamos por inspirar a otros a unirse a nosotros en nuestro viaje hacia la sostenibilidad, demostrando que es posible disfrutar de un café excepcional mientras se protege y respeta nuestro precioso planeta.</p>
      <p className="font-bold pl-8 mb-8">Únete al equipo A y sé parte de la revolución verde: donde cada sorbo cuenta para un futuro más brillante y sostenible para todos.</p>
    </div>
  );
}

export default Vision;
