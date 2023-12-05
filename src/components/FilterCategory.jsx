import { Select, Option } from '@material-tailwind/react';
import { useState } from 'react';


const FilterCategory = () => {
  const [precioMin, setPrecioMin] = useState('');
  const [precioMax, setPrecioMax] = useState('');
  const [price, setPrice] = useState(0);

  const handlePriceChange = (event) => {
    const newPrice = parseFloat(event.target.value);
    
    // Validar que el precio esté dentro de un rango específico (puedes ajustar estos valores según tus necesidades)
    if (!isNaN(newPrice) && newPrice >= 0 && newPrice <= 100) {
      setPrice(newPrice);
    }
  };
  return (
    <div className='flex items-center'>
        <div>
          <Select
          value={"Filtrar Categoria"}
        //   onChange={handleSelect}
          className="w-full px-4 py-2 border rounded-md bg-gray-600 text-white active:border-none"
        >
            <Option>Opcion 1</Option>
            <Option>Opcion 2</Option>
            <Option>Opcion 3</Option>
            <Option>Opcion 4</Option>
            <Option>Opcion 5</Option>
            <Option>Opcion 6</Option>

          </Select>
        </div>

        <div className=' h-auto mx-4 items-center '>
          {/* <div>
            <label htmlFor="precioMin">Precio Mínimo:</label>
            <input
              type="number"
              id="precioMin"
              value={precioMin}
              onChange={(e) => setPrecioMin(e.target.value)}
              className='border border-blue-500 rounded focus:border-blue-500'
            />
          </div>

          <div className='ml-5'>
            <label htmlFor="precioMax">Precio Máximo:</label>
            <input
              type="number"
              id="precioMax"
              value={precioMax}
              onChange={(e) => setPrecioMax(e.target.value)}
              className='border border-blue-500 rounded'
            />
          </div> */}
          <p className='text-2xl text-white'>Precio</p>
          <div className='grid grid-cols-2 gap-x-5 '>
            <input
              type="range"
              min="0"
              max="100"
              step="1"
              value={price}
              onChange={handlePriceChange}
            />
            <div className="price-indicator ">
              <span className='text-3xl text-white'>S/ {price.toFixed(2)}</span>
            </div>
          </div>

        </div>
    </div>
  );
};

export default FilterCategory;
