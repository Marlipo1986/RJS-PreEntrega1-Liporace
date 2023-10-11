import "./navbar.css";
//import FoodBankIcon from '@mui/icons-material/FoodBank';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className='Header'>
      <h6>RESTAURAPP - del celu a tu mesa - PreEntrega React - Martin Liporace</h6>
      <ul className="listaNav">
        <Link to="/">Menu Completo</Link>
        <Link to="/">Entradas</Link>
        <Link to="/">Platos Principales </Link>
        <Link to="/">Guarniciones</Link>
        <Link to="/">Postres</Link>
        <Link to="/">Bebidas</Link>
      </ul>
      <span><CartWidget/></span>   
    </nav>
    
  )
}

export default NavBar




// <nav className='Header' position='static' style={{ background: '#94A684' }}>
//       <Toolbar >
//         <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
//           <FoodBankIcon/>
//         </IconButton>
//         <Typography variant='h6' component= 'div' sx={{flexGrow: 1}}>
//           RESTAURAPP - del celu a tu mesa - PreEntrega React - Martin Liporace
//         </Typography>
//         <Stack direction='row' spacing={2}>
//         <Link to="/">Inicio</link>
//         <Link to="/Entradas" color='inherit'>Entradas</link>
//         <Link to="/" color='inherit'>Platos Principales</link>
//         <Link to="/" color='inherit'>Guarniciones</link>
//         <Link to="/" color='inherit'>Postres</link>
//         <Link to="/" color='inherit'>Bebidas</link>



//         </Stack>
//         <CartWidget/>
//       </Toolbar>
//     </AppBar>
//   )
// }

// export default MuiNavBar
