import {
  Accordion as MuiAccordion,
  AccordionDetails as MuiAccordionDetails,
  AccordionSummary as MuiAccordionSummary,
  Typography,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Captcha from './Captcha';
import ParticipantImage from './ParticipantImage';

const Accordion = withStyles({
  root: {
    border: '1px solid rgb(211, 211, 211)',
    boxShadow: 'none',
    marginBottom: 20,
  },
  expanded: {
    border: '1px solid black',
  },
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    height: 122,
    '&$expanded': {},
  },
  content: {
    justifyContent: 'space-between',
    margin: 0,
    alignItems: 'center',
    '&$expanded': {
      //margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    justifyContent: 'center',
  },
}))(MuiAccordionDetails);

export default function Participant({ name, expanded, onChange, vote }) {
  return (
    <Accordion square expanded={expanded} onChange={onChange}>
      <AccordionSummary>
        <Typography variant="h6">{name}</Typography>
        <ParticipantImage name={name} />
      </AccordionSummary>
      <AccordionDetails>
        <Captcha vote={vote} />
      </AccordionDetails>
    </Accordion>
  );
}
