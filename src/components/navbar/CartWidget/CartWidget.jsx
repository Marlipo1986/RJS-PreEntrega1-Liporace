//Este JSX manejara lo relacionado al boton de comanda/carrito
import { Badge } from '@mui/material';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';

const CartWidget = () => {
  return (
    <Badge badgeContent={0} showZero color= "primary" className="cart-number" fontSize="large">
      <DinnerDiningIcon alt='cart-widget'/>
    </Badge>
  );
};

export default CartWidget;
