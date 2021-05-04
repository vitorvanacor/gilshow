import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Button,
} from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';
import { Menu as MenuIcon, Search as SearchIcon } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    margin: 0,
    padding: '0 20px 0 0',
    borderRadius: 0,
    borderRight: '1px dotted white',
  },
  logo: {},
  title: {
    flexGrow: 1,
    fontSize: 32,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  toolbar: {
    minHeight: '74px',
  },
  search: {
    display: 'none',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Button
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="open drawer"
          startIcon={<MenuIcon />}
        >
          Menu
        </Button>
        <Typography variant="h5" noWrap>
          gilshow
        </Typography>
        <Typography className={classes.title} variant="h1" noWrap>
          BIG BROTHER BRASIL
        </Typography>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="BUSCAR"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>
      </Toolbar>
    </AppBar>
  );
}
