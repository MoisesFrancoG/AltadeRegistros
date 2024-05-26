import Text from "../atoms/Text";
import "./Card.css";
function Card(props) {
  return (
    <div id="card_box">
      <Text val={props.name} text="Nombre: "></Text>
      <Text val={props.talla} text="Talla: "></Text>
      <Text val={props.marca} text="Marca: "></Text>
      <Text val={props.stock} text="Stock: "></Text>
      <Text val={props.precio} text="Precio: $"></Text>
    </div>
  );
}
export default Card;
