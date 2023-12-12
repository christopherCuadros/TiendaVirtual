import { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
} from "@material-tailwind/react";
import { getCategoriesProd, postProduct, updateProduct } from "../../services/apiService";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

const RegisterProduct = ({
  getProducts,
  product,
  iniStateProduct,
  open,
  setOpen,
  refreshProduct
}) => {
  const [category, setCategory] = useState([]);
  const handleOpen = () => setOpen((cur) => !cur);

  const [formData, setFormData] = useState(iniStateProduct);

  useEffect(() => {
    const callCategory = async () => {
      const data = await getCategoriesProd();
      setCategory(data);
    };
    callCategory();
  }, []);

  useEffect(() => {
    setFormData(product);
  }, [product]);

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData?.id) {
      
      const result = await postProduct(formData);
      if (result.status === true) {
        getProducts(result.data);
  
        setOpen(!open);
        setFormData(iniStateProduct);
        toast("Se registro con exito", {
          type: "success",
        });
      }
      return;
    }
    const resultUpdate = await updateProduct(formData)
    refreshProduct(resultUpdate.data)
    setOpen(!open);
        setFormData(iniStateProduct);
        toast("Se actualizo con exito", {
          type: "success",
        });
  };

  return (
    <>
      <Button
        variant="gradient"
        size="sm"
        className="hidden sm:inline-block"
        onClick={handleOpen}
      >
        Agregar Producto
      </Button>
      <Dialog
        size="xl"
        open={open}
        handler={handleOpen}
        dismiss={{
          outsidePress: false,
        }}
        className="bg-transparent shadow-none"
      >
        <form onSubmit={handleSubmit}>
          <Card className="mx-auto w-full max-w-[1000px]">
            <CardBody className="flex flex-col gap-4 ">
              <Typography variant="h4" color="blue-gray">
                {formData?.id ? "Actualizar Producto" : "Agregar Producto"}
              </Typography>
              <div className="grid grid-cols-2 gap-3">
                <div className="grid gap-4">
                  <Typography className="-mb-2" variant="h6">
                    Nombre
                  </Typography>
                  <Input
                    label="Nombre"
                    size="lg"
                    onChange={(e) =>
                      handleInputChange("nombre", e.target.value)
                    }
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
                    onChange={(e) =>
                      handleInputChange("descripcion", e.target.value)
                    }
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
                    onChange={(e) =>
                      handleInputChange("precio", parseFloat(e.target.value))
                    }
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
                    onChange={(e) =>
                      handleInputChange("stock", parseInt(e.target.value, 10))
                    }
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
                    onChange={(e) =>
                      handleInputChange("imagen", e.target.value)
                    }
                    value={formData.imagen}
                  />
                </div>

                <div className="grid gap-4">
                  <Typography className="-mb-2" variant="h6">
                    IdCategoria
                  </Typography>
                  <select
  className=""
  onChange={(e) =>
    handleInputChange("idCategoria", e.target.value)
  }
  value={formData.idCategoria.toString() || "0"}
>
  <option value="0">Seleccionar</option>
  {category.map((cat) => (
    <option key={cat.id} value={cat.id}>
      {cat.nombre}
    </option>
  ))}
</select>
                </div>
              </div>
            </CardBody>
            <CardFooter className="pt-0 flex gap-2">
              <Button type="submit" variant="gradient">
                {formData?.id ? "Actualizar Producto" : "Agregar Producto"}
              </Button>
              <Button
                variant="text"
                color="red"
                onClick={() => {
                  handleOpen(null), setFormData(iniStateProduct);
                }}
                className="mr-1"
              >
                <span>Cancel</span>
              </Button>
            </CardFooter>
          </Card>
        </form>
      </Dialog>
    </>
  );
};

RegisterProduct.propTypes = {
  getProducts: PropTypes.func,
  iniStateProduct: PropTypes.object,
  product: PropTypes.object,
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  refreshProduct: PropTypes.func
};

export default RegisterProduct;
