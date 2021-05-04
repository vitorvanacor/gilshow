import { useState } from 'react';
import './App.css';
import { CssBaseline } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import YouVoted from './YouVoted';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgb(77, 77, 77)',
    },
    background: {
      default: '#fff',
    },
  },
});

export default function App() {
  const [hasVoted, setHasVoted] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      {hasVoted ? (
        <YouVoted back={() => setHasVoted(false)} />
      ) : (
        <Body vote={() => setHasVoted(true)} />
      )}
      <Footer />
    </ThemeProvider>
  );
}
