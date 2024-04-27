import React, { useState } from 'react';
import cup from '../../../public/img/coffee-cup.jpeg'
import './contact.css'
import { useNavigate } from 'react-router-dom';


export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    hiddenField1: '',
    hiddenField2: ''
  });
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario (por ejemplo, a través de una solicitud HTTP)

    // Abre el modal de agradecimiento
    setModalOpen(true);

    // Reinicia el formulario
    setFormData({
      name: '',
      email: '',
      message: '',
      hiddenField1: '',
      hiddenField2: ''
    });

    // Redirige a la página de inicio después de 2 segundos
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  return (
    <div className="container flex p-4 gap-28">
     
        <img 
        src={cup}
        width='50%'
        alt="" 
        />

      
      <div className=" flex flex-col border rounded-lg overflow-hidden relative p-10 h-[20%] bg-yellow-500 mt-32">
      <h1 className="text-3xl font-bold">Contacto</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Nombre
          </label>
          <input
            className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Nombre"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Correo electrónico
          </label>
          <input
            className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Correo electrónico"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Mensaje
          </label>
          <textarea
            className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            placeholder="Mensaje"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        {/* Campos ocultos */}
        <input type="hidden" name="hiddenField1" value="" />
        <input type="hidden" name="hiddenField2" value="" />
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Enviar
          </button>
        </div>
      </form>
      {/* Modal de agradecimiento */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="bg-white p-8 rounded-lg z-50">
            <p className="text-lg font-bold mb-4">¡Gracias por ponerse en contacto con nosotros!</p>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setModalOpen(false)}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
      </div>
    </div>
  );
}
