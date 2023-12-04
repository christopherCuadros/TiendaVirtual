import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import PropTypes from 'prop-types'

const CardProduct = ({nombre,descripcion,precio}) => {
    // const style = {
    //     border:"1px solid-black"
    // }

  return (
    <Card className="w-96 mx-auto lg:w-auto  shadow-black" >
      <CardHeader shadow={false} floated={false} className="h-96">
        <img
          src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium text-3xl">
            {nombre}
          </Typography>
          <Typography color="blue-gray" className="font-medium text-2xl">
            S/{precio}
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75 text-black"
        >
          {descripcion}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          ripple={false}
          fullWidth={true}
          className=" shadow-none hover:scale-105 hover:shadow-none hover:bg-black hover:text-white focus:scale-105 focus:shadow-none active:scale-100 border-spacing-2 bg-black text-white lg:text-blue-gray-900  lg:bg-blue-gray-900/10"
        >
          Agregar al carrito
        </Button>
      </CardFooter>
    </Card>
  );
}

CardProduct.propTypes = {
    key: PropTypes.number,
    nombre: PropTypes.string,
    descripcion: PropTypes.string,
    precio: PropTypes.number
}

export default CardProduct;