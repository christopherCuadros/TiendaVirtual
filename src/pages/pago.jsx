const Pago = () => {
  return (
    <div className="flex justify-center items-center bg-gray-200 max-w-full]">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="grid grid-cols-2 grid-rows-4 gap-4">
          <div className="col-span-4 text-center">
            <h3 className="font-bold">Proporcionar más información</h3>
            <p className="text-green-500">
              Tu información de pago esta segura con nosotros
            </p>
          </div>

          <div className="mb-4 col-span-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="cardName"
            >
              Nombre en la tarjeta
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="cardName"
              type="text"
              placeholder="Nombre"
            />
          </div>
          <div className="mb-4 col-span-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="cardNumber"
            >
              Número de tarjeta
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="cardNumber"
              type="text"
              placeholder="Número de tarjeta"
            />
          </div>
          <div className="mb-4 col-span-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="expiryDate"
            >
              Fecha de vencimiento
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="expiryDate"
              type="text"
              placeholder="MM/AA"
            />
          </div>
          <div className="mb-4 col-span-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="cvv"
            >
              CVV
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="cvv"
              type="text"
              placeholder="CVV"
            />
          </div>

          <button
            className="col-span-4 max-h-[50px] bg-blue-500 hover:bg-blue-700 grid-star text-white font-bold rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Pagar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Pago;
