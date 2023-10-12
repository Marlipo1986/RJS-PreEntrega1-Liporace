//Este JSX manejara lo relacionado al boton de comanda/carrito

import DinnerDiningIcon from '@mui/icons-material/DinnerDining';

const CartWidget = () => {
  return (
    <div className="cart-number" fontSize="large">
      <DinnerDiningIcon alt='cart-widget'/>
      17
    </div>
  );
};

export default CartWidget;
