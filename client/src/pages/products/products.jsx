import React from 'react';
import cafeData from '../../db/data.json';
import coffeeBagImage from '../../../public/img/coffee-bag.png'; // Importa la imagen aquí

function Products() {
  return (
    <div className="container mx-auto px-4 mb-4 mt-7">
      <h1 className="text-3xl font-bold mb-4 ml-[40%]">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cafeData.articulos_cafe.map((articulo) => (
          <div key={articulo.id} className="border rounded-lg overflow-hidden shadow-md">
            {/* Utiliza la imagen importada directamente */}
            <img src={coffeeBagImage} alt={articulo.nombre} className="w-full h-48 object-cover " />
            <div className="p-4 ">
              <h2 className="text-xl font-bold mb-2">{articulo.nombre}</h2>
              <p className="text-gray-700 mb-2 dark:text-white">{articulo.descripcion}</p>
              <p className="text-gray-900 font-bold dark:text-white">${articulo.precio}</p>
              {articulo.disponible ? (
                <p className="text-green-600">Disponible</p>
              ) : (
                <p className="text-red-600">No disponible</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;

