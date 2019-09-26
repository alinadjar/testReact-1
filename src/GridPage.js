import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';

import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';






const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  root2: {
    flexGrow: 1,
  },
  paper2: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: '#A54'
  },
  paper3: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  container: {
    display: 'flex',
  },

}));

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();


  const handleChange = event => {
    setSpacing(Number(event.target.value));
  };

  return (
    <div style={{ padding: '100px' }}>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={spacing}>
            {[0, 1, 2].map(value => (
              <Grid key={value} item>
                <Paper className={classes.paper} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.control}>
            <Grid container>
              <Grid item>
                <FormLabel>spacing</FormLabel>
                <RadioGroup
                  name="spacing"
                  aria-label="spacing"
                  value={spacing.toString()}
                  onChange={handleChange}
                  row
                >
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(value => (
                    <FormControlLabel
                      key={value}
                      value={value.toString()}
                      control={<Radio />}
                      label={value.toString()}
                    />
                  ))}
                </RadioGroup>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      <div className={classes.root2}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper2}>xs=12</Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper2}>xs=12 sm=6</Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper2}>xs=12 sm=6</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper2}>xs=6 sm=3</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper2}>xs=6 sm=3</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper2}>xs=6 sm=3</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper2}>xs=6 sm=3</Paper>
          </Grid>
        </Grid>
      </div>

      <div className={classes.root}>
        <Paper className={classes.paper3}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex" src={process.env.PUBLIC_URL + '/assets/flower.png'} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container style={{ backgroundColor: '#0FF' }}>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs style={{ backgroundColor: '#DDD' }}>
                  <Typography gutterBottom variant="subtitle1">
                    Standard license
                </Typography>
                  <Typography variant="body2" gutterBottom>
                    Full resolution 1920x1080 • JPEG
                </Typography>
                  <Typography variant="body2" color="textSecondary">
                    ID: 1030114
                </Typography>
                </Grid>
                <Grid item >
                  <Typography variant="body2" style={{ cursor: 'pointer' }}>
                    Remove
                </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">$19.00</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
      <div className={classes.root}>
        <Typography variant="subtitle1">Current width:</Typography>
        <div className={classes.container}>
          <Hidden xsUp>
            <Paper className={classes.paper2}>xsUp</Paper>
          </Hidden>
          <Hidden smUp>
            <Paper className={classes.paper2}>smUp</Paper>
          </Hidden>
          <Hidden mdUp>
            <Paper className={classes.paper2}>mdUp</Paper>
          </Hidden>
          <Hidden lgUp>
            <Paper className={classes.paper2}>lgUp</Paper>
          </Hidden>
          <Hidden xlUp>
            <Paper className={classes.paper2}>xlUp</Paper>
          </Hidden>
        </div>
      </div>





      

    </div>
  );
}