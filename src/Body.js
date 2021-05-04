import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import Participant from './Participant';

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: 'center',
    margin: '40px',
  },
}));

export default function Body({ vote }) {
  const classes = useStyles();

  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Typography className={classes.title} variant="h3" component="h2">
        Quem deve vencer o BBB21?
      </Typography>
      <Container maxWidth="sm">
        <Participant
          name="Camilla de Lucas"
          expanded={expanded === 'camilla'}
          onChange={handleChange('camilla')}
          vote={() => setExpanded('gil')}
        />
        <Participant
          name="Gil do Vigor"
          expanded={expanded === 'gil'}
          onChange={handleChange('gil')}
          vote={vote}
        />
        <Participant
          name="Juliette"
          expanded={expanded === 'juliette'}
          onChange={handleChange('juliette')}
          vote={() => setExpanded('gil')}
        />
      </Container>
    </div>
  );
}
