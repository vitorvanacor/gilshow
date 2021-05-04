import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import captchaIcon from './images/rainbow.png';

const useStyles = makeStyles((theme) => ({
  captchaRoot: {
    display: 'flex',
    width: 300,
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor: 'rgb(250, 250, 250)',
    border: '1px solid rgb(224, 224, 224)',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'rgb(242, 242, 242)',
    },
  },
  checkbox: {
    height: 30,
    width: 30,
    border: '1px solid rgb(197, 197, 197)',
    borderRadius: '4px',
    backgroundColor: 'white',
    marginRight: 15,
  },
  icon: {
    flexGrow: 1,
    textAlign: 'end',
  },
}));

export default function Captcha({ vote }) {
  const classes = useStyles();
  const texts = [
    'Sou vigoroso',
    'Sou vigorento',
    'Sou indestrutível',
    'Sou da cachorrada',
    'AI BRASIIIIL',
  ];

  return (
    <div className={classes.captchaRoot} onClick={vote}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div className={classes.checkbox} />
        <Typography>
          {texts[Math.floor(Math.random() * texts.length)]}
        </Typography>
      </div>
      <img src={captchaIcon} alt="hCaptchakiTchaki" />
    </div>
  );
}
