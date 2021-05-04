import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer as MuiDrawer, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: 300,
    padding: 10,
  },
  text: {
    fontSize: 24,
    fontWeight: 600,
  },
}));

export default function Drawer({ isOpen, toggleDrawer }) {
  const classes = useStyles();

  return (
    <MuiDrawer anchor="left" open={isOpen} onClose={toggleDrawer(false)}>
      <div className={classes.container}>
        <Typography className={classes.text}>Foco no Gil Show!</Typography>
        <hr />
        <Typography className={classes.text}>
          Site criado para você que gostaria que o Gil estivesse na final e quer
          matar a vontade de votar para ele vencer o programa :)
        </Typography>
        <hr />
        <Typography className={classes.text}>
          É uma brincadeira puramente visual, nenhum dado é transmitido, nenhum
          "voto" é armazenado.
        </Typography>
        <hr />
        <Typography className={classes.text}>#FocoNoGilShow</Typography>
      </div>
    </MuiDrawer>
  );
}
