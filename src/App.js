import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import green from "@material-ui/core/colors/green";
import { animations } from 'react-animation'
import red from "@material-ui/core/colors/red";


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "800px",
    margin: "0 auto",
    marginTop: "200px"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const style = {
    animation: animations.popIn
  }

  return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField style={style} id="filled-basic" label="Keyword" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <Card>
              <CardContent>
                <Typography color="textPrimary" gutterBottom>
                  Question
                </Typography>
                <Typography variant="body2" component="p">
                  {bull}<span style={{ color: green[500] }}>  well meaning and kindly.</span> <br />
                  {bull}<span style={{ color: red[500] }}>  well meaning and kindly.</span> <br />
                  {bull}<span style={{ color: red[500] }}>  well meaning and kindly.</span> <br />
                  {bull}<span style={{ color: red[500] }}>  well meaning and kindly.</span> <br />
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card>
              <CardContent>
                <Typography color="textPrimary" gutterBottom>
                  Question
                </Typography>
                <Typography variant="body2" component="p">
                  {bull}<span style={{ color: green[500] }}>  well meaning and kindly.</span> <br />
                  {bull}<span style={{ color: red[500] }}>  well meaning and kindly.</span> <br />
                  {bull}<span style={{ color: red[500] }}>  well meaning and kindly.</span> <br />
                  {bull}<span style={{ color: red[500] }}>  well meaning and kindly.</span> <br />
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card>
              <CardContent>
                <Typography color="textPrimary" gutterBottom>
                  Question
                </Typography>
                <Typography variant="body2" component="p">
                  {bull}<span style={{ color: green[500] }}>  well meaning and kindly.</span> <br />
                  {bull}<span style={{ color: red[500] }}>  well meaning  well meaning  well meaning  well meaning  well meaning  well meaning  well meaning  well meaning and kindly.</span> <br />
                  {bull}<span style={{ color: red[500] }}>  well meaning and kindly.</span> <br />
                  {bull}<span style={{ color: red[500] }}>  well meaning and kindly.</span> <br />
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card>
              <CardContent>
                <Typography color="textPrimary" gutterBottom>
                  Question
                </Typography>
                <Typography variant="body2" component="p">
                  {bull}<span style={{ color: green[500] }}>  well meaning and kindly.</span> <br />
                  {bull}<span style={{ color: red[500] }}>  well meaning and kindly.</span> <br />
                  {bull}<span style={{ color: red[500] }}>  well meaning and kindly.</span> <br />
                  {bull}<span style={{ color: red[500] }}>  well meaning and kindly.</span> <br />
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
  );
}
export default App;
