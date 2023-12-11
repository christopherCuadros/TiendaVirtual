import React from "react";
import {
    Button,
    Dialog,
    Card,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
  } from "@material-tailwind/react";
const RegisterProduct = () =>{
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen((cur) => !cur);

    return(
        <>
            <Button
                variant="gradient"
                size="sm"
                className="hidden lg:inline-block"
                onClick={handleOpen}>
                Iniciar Sesion
            </Button>
            <Dialog
                size="xs"
                open={open}
                handler={handleOpen}
                className="bg-transparent shadow-none"
            >
                <Card className="mx-auto w-full max-w-[24rem]">
                    <CardBody className="flex flex-col gap-4">
                        <Typography variant="h4" color="blue-gray">
                        Registrar Producto
                        </Typography>
                        
                        <Typography className="-mb-2" variant="h6">
                        Nombre
                        </Typography>
                        <Input label="Email" size="lg" />
                        <Typography className="-mb-2" variant="h6">
                        Descripción
                        </Typography>
                        <Input label="Password" size="lg" />
                        <div className="-ml-2.5 -mt-3">
                        <Checkbox label="Recordarme" />
                        </div>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button variant="gradient" onClick={handleOpen} fullWidth>
                        Iniciar Sesion
                        </Button>
                        <Typography variant="small" className="mt-4 flex justify-center">
                        ¿No tienes una cuenta?
                        <Typography
                            as="a"
                            href="#signup"
                            variant="small"
                            color="blue-gray"
                            className="ml-1 font-bold"
                            onClick={handleOpen}
                        >
                            Registrate
                        </Typography>
                        </Typography>
                    </CardFooter>
                </Card>
            </Dialog>
        </>
    );
}

export default RegisterProduct;