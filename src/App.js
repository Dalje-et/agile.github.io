import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import green from "@material-ui/core/colors/green";
import {animations} from 'react-animation'
import red from "@material-ui/core/colors/red";
import questions from "./questions";

const useStyles = theme => ({
  root: {
    maxWidth: "800px",
    margin: "0 auto",
    marginTop: "200px"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }
});


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      displayedAnswer: this.filterQuestions("")
    }

    this.onFilterChange = this.onFilterChange.bind(this);
  }

  filterQuestions(filter) {
    const questionCards = [];

    questions.forEach(question => {
      if (filter === "" || question.question.includes(filter)) {
        questionCards.push(
          (
            <Grid item xs={6}>
              <Card style={{animation: animations.popIn}}>
                <CardContent>
                  <Typography color="textPrimary" gutterBottom>
                    {question.question}
                  </Typography>
                  <Typography variant="body2" component="p">
                    • <span style={{color: green[500]}}>{question.answers[0].text}</span><br/>
                    • <span style={{color: red[500]}}>{question.answers[1].text}</span><br/>
                    • <span style={{color: red[500]}}>{question.answers[2].text}</span><br/>
                    • <span style={{color: red[500]}}>{question.answers[3].text}</span><br/>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          )
        );
      }
    });

    return questionCards;
  }

  onFilterChange(event) {
    this.setState({
      displayedAnswer: this.filterQuestions(event.currentTarget.value)
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              id="filled-basic"
              label="Keyword"
              variant="outlined"
              onChange={this.onFilterChange}
              fullWidth/>
          </Grid>

          {this.state.displayedAnswer}
        </Grid>
      </div>
    );
  }
}

export default withStyles(useStyles) (App);
