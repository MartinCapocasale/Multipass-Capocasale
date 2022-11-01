import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ItemCount from "./ItemCount";
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import { useState, useContext } from "react";
import {Link} from "react-router-dom";
import { cartContext } from '../../context/cartContext';


const theme = createTheme();
const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
  };

export default function ItemDetail(props) {
    
  const value = `${props.data.estrellas}`;
  const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
        email: data.get('email'),
        password: data.get('password'),
    });
  };

  const [isInCart, setIsInCart] = useState(false);
  
  const {addItem} = useContext(cartContext);
	function handleAddToCart(count){
    addItem(props.data,count)
		setIsInCart(true);
	}

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '85vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${props.data.imagen})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: '500px',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h5">
              <b>{props.data.title}</b>
              <hr />
            </Typography>
            <Box
                sx={{
                    width: 200,
                    display: 'flex',
                    alignItems: 'center',
                }}
                >
                <Rating
                    name="text-feedback"
                    value={+value}
                    readOnly
                    precision={0.5}
                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                />
                <Box sx={{ ml: 2 }}>{labels[value]}</Box>
            </Box>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <ul className="info-grid">
                    <li>Descripción: {props.data.description}</li>
                    <li><b>Precio: ${props.data.price}</b></li>
                    <li>Director: {props.data.director}</li>
                    <li>Año: {props.data.anio}</li>
                    <li>Categoria: {props.data.category}</li>
                    <li>Estrellas: {props.data.estrellas}</li>
                    <hr />
                      { isInCart?
                        <>
                          <Link to="/"><button>Volver a Inicio</button></Link>
                          <Link to="/cart"><button >Ir Al Carrito!</button> </Link>
                        </>
                        :
                        <ItemCount onAddToCart={handleAddToCart} initial={1}stock={3}/>
				              }
                </ul>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

