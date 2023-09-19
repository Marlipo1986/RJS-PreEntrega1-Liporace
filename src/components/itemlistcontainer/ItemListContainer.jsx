import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const PlatosMenu = (props) => {
  return (
    <Card sx={{ minWidth: 275, maxWidth: 275}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.categorias}
        </Typography>
        <Typography variant="h5" component="div">
          {props.plato}
        </Typography>
        <Typography variant="h4">
          {props.precio}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Pedir</Button>
      </CardActions>
    </Card>
  );
}

export default PlatosMenu;
