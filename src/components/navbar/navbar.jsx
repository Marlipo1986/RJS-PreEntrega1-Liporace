import FoodBankIcon from '@mui/icons-material/FoodBank';
import { AppBar, Toolbar, IconButton, Typography, Stack ,Button } from '@mui/material';


const MuiNavBar = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
          <FoodBankIcon/>
        </IconButton>
        <Typography variant='h6' component= 'div' sx={{flexGrow: 1}}>
          RESTAURAPP - del celu a tu mesa - PreEntrega React - Martin Liporace
        </Typography>
        <Stack direction='row' spacing={2}>
        <Button color='inherit'>Inicio</Button>
        <Button color='inherit'>Menu</Button>
        <Button color='inherit'>Contacto</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default MuiNavBar
