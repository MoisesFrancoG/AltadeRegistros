import { useState } from "react";
import Swal from "sweetalert2";
import Field from "../molecules/Field";
import Button from "../atoms/Button";
import Card from "../molecules/Card";
import "./SectionLogin.css";
import { LinkedList } from "../../data/LinkedList";

function SectionLogin() {
  const [lista, setLista] = useState(new LinkedList());
  const [prodcutos, setProductos] = useState([]);
  const [name, setName] = useState("");
  const [talla, setTall] = useState("");
  const [marca, setMarca] = useState("");
  const [stock, setStock] = useState("");
  const [precio, setPrecio] = useState("");

  const handlerClick = (event) => {
    if (!name || !talla || !marca || !stock || !precio) {
      Swal.fire({
        title: "Error",
        text: "Por favor complete todos los campos",
        icon: "error",
      });
    } else {
      lista.push({ name, talla, marca, stock, precio });
      setLista(lista);
      setName("");
      setTall("");
      setMarca("");
      setStock("");
      setPrecio("");
      Swal.fire({
        title: "Producto registrado",
        icon: "success",
        text: `Producto: ${name} Talla: ${talla} Marca: ${marca} Precio: ${precio}$`,
      });
    }
  };

  const handlerShow = () => {
    const productosData = [];
    for (let i = 0; i < lista.size(); i++) {
      const node = lista.getElementAt(i);
      const data = node.getData();
      productosData.push(data);
    }
    setProductos(productosData);
  };

  return (
    <>
      <div id="login_section">
        <Field
          type="text"
          placeholder="Nombre"
          text="Nombre del producto"
          val={name}
          fnVal={setName}
        />
        <Field
          type="text"
          placeholder="Talla"
          text="Talla del producto"
          val={talla}
          fnVal={setTall}
        />
        <Field
          type="text"
          placeholder="Marca"
          text="Marca del producto"
          val={marca}
          fnVal={setMarca}
        />
        <Field
          type="text"
          placeholder="Cantidad"
          text="Cantidad de pares"
          val={stock}
          fnVal={setStock}
        />
        <Field
          type="text"
          placeholder="$"
          text="Precio por par"
          val={precio}
          fnVal={setPrecio}
        />
        <Button title="Registrar producto" onclick={handlerClick} />
        <Button title="Mostrar datos" onclick={handlerShow} />
      </div>

      <div>
        {prodcutos.map((producto, index) => (
          <div key={index} id="productos_section">
            {
              <div>
                <Card
                  name={producto.name}
                  talla={producto.talla}
                  marca={producto.marca}
                  stock={producto.stock}
                  precio={producto.precio}
                />
              </div>
            }
          </div>
        ))}
      </div>
    </>
  );
}

export default SectionLogin;
