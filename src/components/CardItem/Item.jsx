//Este JSX dara formato a cada Card que mostrara los platos en el home

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import "./Item.css";

const Item = ({ product }) => {
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={product.imagen}
          title={`image ${product.nombre}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {product.nombre}
          </Typography>
          <Typography variant="h6" color="text.secondary" className="Oculto">
            {product.descripcion}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            $ {product.precio} .-
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant="outlined">
            Ver detalle
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default Item;

