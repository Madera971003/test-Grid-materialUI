import React from "react";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import car from '../img/car.png';
import styles from './styles.module.scss'; 

const App = () => {
  return(
    <React.Fragment>
      <h1 className={styles.center} >Vehicle Details</h1>
      
      <Grid container spacing={1} alignItems="center">
        {/* Cabecera */}
        {/* className={styles.boxCardHeader} */}
        <Grid item xs={12}>
          <Box border={1}>
            <Grid container spacing={1}>
              <Grid item xs={6} sm={4} md={4} lg={4}>
                <Box border={1} className={styles.bg_color_aqua}>
                  <h3>Vehicle Title</h3>
                </Box>
              </Grid>
              <Grid item xs={6} sm={4} md={4} lg={4}>
                <Box border={1} className={styles.bg_color_whitesmoke}>
                  <h4 className={styles.right}>Button</h4>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4} md={4} lg={4}>
                <Box border={1} className={styles.bg_color_blanchedalmond}>
                  <h4 className={styles.center}>Search</h4>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        {/* Detalles de Vehiculo */}
        <Grid item xs={12}>
          <Box border={1}>
            <Grid container spacing={0.5}>
              <Grid item xs={12} sm={6} md={6} lg={4}>
                <Box border={1} className={styles.boxCardDetails}>
                  <img src={car} alt="Vehiculo" width={320} />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={4}>
                <Box border={1} className={`${styles.boxCardDetails} ${styles.bg_color_lightblue}`}>
                  <h3>Ford Modelo XXXXX</h3>
                  <h2>Text</h2>
                  <h2>Text</h2>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={4}>
                <Box border={1} className={`${styles.boxCardDetails} ${styles.bg_color_peachpuff}`} >
                  <h3>Miliage XXXXX</h3>
                  <h2>Text</h2>
                  <h2>Text</h2>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        {/* Algun texto de descripcion Izquierda */}
        <Grid item xs={12} md={6} lg={5}>
          <Box border={1} className={`${styles.boxCardDescrption} ${styles.bg_color_salmon}`}>
            <div>Hola Mundo</div>
            <h3>Text XXXXX</h3>
            <h2>Text</h2>
            <h2>Text</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi accusamus cum fuga beatae commodi unde delectus itaque corporis quo distinctio perspiciatis nihil eligendi rerum autem, veniam aliquid nulla exercitationem ab?</p>
          </Box>
        </Grid>
        {/* Algun texto de descripcion Derecha */}
        <Grid item xs={12} md={6} lg={7}>
          <Box border={1} className={`${styles.boxCardDescrption} ${styles.bg_color_lightgrey}`}>
            <div>Hola Mundo</div>
            <h3>Text XXXXX</h3>
            <h2>Text</h2>
            <h2>Text</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae deleniti cum autem voluptas quod animi dignissimos unde laudantium cumque sequi nostrum ipsa, corporis tempore, debitis molestias dolor accusamus a at?</p>
          </Box>
        </Grid>
      </Grid>
      {/* Test */}
      <Grid container spacing={1} sx={{marginTop: "20px",}} display="grid" gridTemplateColumns="auto auto auto">
        <Grid item gridColumn="1/3">
          <Box border={1} className={styles.bg_color_aqua}>
            <h3>Caja 1</h3>
          </Box>
        </Grid>
        <Grid item>
          <Box border={1} className={styles.bg_color_whitesmoke}>
            <h4 className={styles.right}>Caja 2</h4>
          </Box>
        </Grid>
        <Grid item>
          <Box border={1} className={styles.bg_color_blanchedalmond}>
            <h4 className={styles.center}>Caja 3</h4>
          </Box>
        </Grid>
        <Grid item>
          <Box border={1} className={styles.bg_color_aqua}>
            <h3>Caja 4</h3>
          </Box>
        </Grid>
        <Grid item>
          <Box border={1} className={styles.bg_color_whitesmoke}>
            <h4 className={styles.right}>Caja 5</h4>
          </Box>
        </Grid>
        <Grid item gridColumn="1/4">
          <Box border={1} className={styles.bg_color_blanchedalmond}>
            <h4 className={styles.center}>Caja 6</h4>
          </Box>
        </Grid>
        <Grid item gridRow="4/ 6">
          <Box border={1} className={styles.bg_color_aqua}>
            <h3>Caja 7</h3>
          </Box>
        </Grid>
        <Grid item gridColumn="2/4">
          <Box border={1} className={styles.bg_color_whitesmoke}>
            <h4 className={styles.right}>Caja 8</h4>
          </Box>
        </Grid>
        <Grid item gridRow="5/7">
          <Box border={1} className={styles.bg_color_blanchedalmond}>
            <h4 className={styles.center}>Caja 9</h4>
          </Box>
        </Grid>
        <Grid item>
          <Box border={1} className={styles.bg_color_aqua}>
            <h3>Caja 10</h3>
          </Box>
        </Grid>
        <Grid item>
          <Box border={1} className={styles.bg_color_whitesmoke}>
            <h4 className={styles.right}>Caja 11</h4>
          </Box>
        </Grid>
        <Grid item>
          <Box border={1} className={styles.bg_color_blanchedalmond}>
            <h4 className={styles.center}>Caja 12</h4>
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  )
};

export default App;