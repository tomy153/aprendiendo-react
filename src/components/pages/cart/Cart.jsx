import { useContext } from "react"
import { CartContext } from "../../../context/CartContext";


const Cart = () => {
   
    const {cart} = useContext(CartContext);


  return (
    <div><h1>Estoy en el carrito</h1></div>
  )
}

export default Cart