import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { CartContext } from "../../../context/CartContext";

const ProductsList = () => {
  const { agregarAlCarrito } = useContext(CartContext);

  const [products, setProducts] = useState([]);

  let endpoint = "https://fakestoreapi.com/products";

  useEffect(() => {
    const getData = async () => {
      const getProducts = axios.get(endpoint);
      let res = await getProducts;
      setProducts(res.data);
    };
    getData();
  }, [endpoint]);

  return (
    <div>
      {products.map(({ id, title, image }) => {
        return (
          <div key={id}>
            <h2>{title}</h2>
            <img src={image} alt="" style={{ width: "200px" }} />
            <button onClick={agregarAlCarrito}>Agregar producto</button>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsList;
