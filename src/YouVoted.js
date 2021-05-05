import { Button, Container, Typography } from '@material-ui/core';
import {
  CheckCircle as CheckIcon,
  Twitter as TwitterIcon,
} from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import ParticipantImage from './ParticipantImage';

const useStyles = makeStyles((theme) => ({
  youVotedDiv: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 50,
    height: 120,
  },
  leftColumn: {},
  checkIcon: {
    color: 'rgb(52, 199, 113)',
    marginRight: 10,
  },
  youVotedText: {
    fontSize: 20,
    fontWeight: 600,
    color: 'rgb(85, 85, 85)',
  },
  nameText: {
    color: 'rgb(17, 17, 17)',
    fontSize: 42,
  },
  twitterIcon: {
    color: 'rgb(29, 161, 242)',
  },
  button: {
    width: '100%',
    height: 50,
    borderRadius: 2,
    marginTop: 45,
  },
}));

export default function YouVoted({ back }) {
  const classes = useStyles();

  return (
    <div>
      <Container maxWidth="sm">
        <div className={classes.youVotedDiv}>
          <div className={classes.leftColumn}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <CheckIcon className={classes.checkIcon} />
              <Typography className={classes.youVotedText}>
                Você votou em
              </Typography>
            </div>
            <Typography className={classes.nameText}>Gil do Vigor</Typography>
            <a href="https://twitter.com/vitordevdd/status/1389479201015836672">
              <TwitterIcon className={classes.twitterIcon} />
            </a>
          </div>
          <ParticipantImage name="Gil do Vigor" />
        </div>
        <Button
          color="primary"
          className={classes.button}
          variant="contained"
          onClick={back}
          disableElevation
        >
          Votar novamente
        </Button>
      </Container>
    </div>
  );
}
