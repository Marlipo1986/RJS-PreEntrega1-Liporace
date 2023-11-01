import { useContext } from "react"
//import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"

const Comanda = () => {

  const { cart, clearCart, totalQuantity, total } = useContext (CartContext)

  if( totalQuantity === 0) {
    return (
      <div>
        <h1>No hay platos en la comanda</h1>
        <Link to="/" className='Option'>Menu</Link>
      </div>
    )
  }
  return (
    <div>
      {cart.map(p => <CartItem key = {p.id} {...p}/> ) }
      <h3>Total: ${total}</h3>
      <button onClick={() => clearCart()} className="Button">Borrar comanda</button>
      <Link to='/checkout' className='Option'>Checkout</Link>
    </div>
  )
}

export default Comanda