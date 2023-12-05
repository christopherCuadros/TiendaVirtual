import { Carousel } from "@material-tailwind/react";
import data from "../data/product.json"
const CarrouselProduct = () =>{
    return (
        <Carousel
          className="rounded-xl h-96"
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
        >
         {data.filter(producto => producto.precio <=50)
                .map((producto) => (
                <CardProduct
                    key={producto.codigo}
                    nombre={producto.nombre}
                    descripcion={producto.descripcion}
                    precio={producto.precio}
                />
            ))}
        </Carousel>
      );
}

export default CarrouselProduct;