import React from "react";
import { useState } from "react";
import {
    Button,
    Dialog,
    Card,
    CardBody,
    CardFooter,
    Typography,
    Input
  } from "@material-tailwind/react";
const RegisterProduct = () =>{
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen((cur) => !cur);

    const [formData, setFormData] = useState({
        nombre: '',
        descripcion: '',
        precio: 0,
        stock: 0,
        imagen: '',
        idCategoria: 0,
        estado: true,
      });
    
      const handleInputChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        // Aquí puedes implementar la lógica para enviar los datos al servidor
        console.log('Datos del formulario enviados:', formData);
      };

    return(
        <>
            <Button
                variant="gradient"
                size="sm"
                className="hidden lg:inline-block"
                onClick={handleOpen}>
                Agregar Producto
            </Button>
            <Dialog
                size="xl"
                open={open}
                handler={handleOpen}
                className="bg-transparent shadow-none"
            >
               <form onSubmit={handleSubmit}>
                    <Card className="mx-auto w-full max-w-[1000px]">
                        <CardBody className="flex flex-col gap-4 ">
                            <Typography variant="h4" color="blue-gray">
                                Registrar Producto
                            </Typography>

                            <div className="grid grid-cols-2 gap-3">
                                <div className="grid gap-4">
                                    <Typography className="-mb-2" variant="h6">
                                        Nombre
                                    </Typography>
                                    <Input
                                        label="Nombre"
                                        size="lg"
                                        onChange={(e) => handleInputChange('nombre', e.target.value)}
                                        value={formData.nombre}
                                    />
                                </div>

                                <div className="grid gap-4">
                                    <Typography className="-mb-2" variant="h6">
                                        Descripción
                                    </Typography>
                                    <Input
                                        label="Descripción"
                                        size="lg"
                                        onChange={(e) => handleInputChange('descripcion', e.target.value)}
                                        value={formData.descripcion}
                                    />
                                </div>

                                <div className="grid gap-4">
                                    <Typography className="-mb-2" variant="h6">
                                        Precio
                                    </Typography>
                                    <Input
                                        label="Precio"
                                        size="lg"
                                        type="number"
                                        onChange={(e) => handleInputChange('precio', parseFloat(e.target.value))}
                                        value={formData.precio}
                                    />
                                </div>

                                <div className="grid gap-4">
                                    <Typography className="-mb-2" variant="h6">
                                        Stock
                                    </Typography>
                                    <Input
                                        label="Stock"
                                        size="lg"
                                        type="number"
                                        onChange={(e) => handleInputChange('stock', parseInt(e.target.value, 10))}
                                        value={formData.stock}
                                    />

                                </div>
                                
                                <div className="grid gap-4">
                                    <Typography className="-mb-2" variant="h6">
                                        Imagen
                                    </Typography>
                                    <Input
                                        label="Imagen"
                                        size="lg"
                                        onChange={(e) => handleInputChange('imagen', e.target.value)}
                                        value={formData.imagen}
                                    />
                                </div>

                                <div className="grid gap-4">
                                    <Typography className="-mb-2" variant="h6">
                                        IdCategoria
                                    </Typography>
                                    <Input
                                        label="IdCategoria"
                                        size="lg"
                                        type="number"
                                        onChange={(e) => handleInputChange('idCategoria', parseInt(e.target.value, 10))}
                                        value={formData.idCategoria}
                                    />
                                </div>
                            </div>

                        </CardBody>
                        <CardFooter className="pt-0 w-80">
                            <Button type="submit" variant="gradient" fullWidth>
                                Registrar Producto
                            </Button>
                            {/* Agrega aquí cualquier otro contenido del pie de tarjeta si es necesario */}
                        </CardFooter>
                    </Card>
                </form>
            </Dialog>
        </>
    );
}

export default RegisterProduct;