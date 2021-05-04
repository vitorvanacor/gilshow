import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: '50px',
    backgroundColor: theme.palette.primary.main,
    color: 'white',
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      Brincadeira criada por{' '}
      <a style={{ color: 'white' }} href="https://twitter.com/vitordevdd">
        @vitordevdd
      </a>
    </footer>
  );
}
