import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {animations} from 'react-animation'
import questions from "./questions";
import _ from 'lodash';

const useStyles = theme => ({
  root: {
    height: "100%",
    width: "100%",
    position: "absolute",
    top: "0",
    left: "0"
  },
  container: {
    width: "95%",
    maxWidth: "800px",
    margin: "0 auto",
    marginTop: "100px",
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
    let correct = <span role="img" aria-label={"correct"}>✅</span>
    let incorrect = <span role="img" aria-label={"incorrect"}>❌</span>

    _.forEach(questions, question => {
      if (filter === "" || question.question.toLowerCase().includes(filter.toLowerCase()) || this.answerIncludeKeyword(question.answers, filter)) {
        questionCards.push(
          (
            <Grid item xs={12} sm={6}>
              <Card style={{animation: animations.popIn, backgroundColor: "rgba(253, 247, 237, 0.4)", maxWidth: "95%", margin: "0 auto", height: "auto"}}>
                <CardContent>
                  <Typography color="textPrimary" gutterBottom>
                    <b>{question.question}</b>
                  </Typography>
                  <p style={{lineHeight: "1.5"}}>
                    {question.answers[0].correct ? correct : incorrect} <span>{question.answers[0].text}</span><br/><br/>
                    {question.answers[1].correct ? correct : incorrect} <span>{question.answers[1].text}</span><br/><br/>
                    {question.answers[2].correct ? correct : incorrect} <span>{question.answers[2].text}</span><br/><br/>
                    {question.answers[3].correct ? correct : incorrect} <span>{question.answers[3].text}</span><br/><br/>
                  </p>
                </CardContent>
              </Card>
            </Grid>
          )
        );
      }
    });

    return questionCards;
  }

  answerIncludeKeyword(answers, filter) {
    for (let i = 0; i < answers.length; i++) {
      if (answers[i].text.toLowerCase().includes(filter.toLowerCase())) {
        return true;
      }
    }

    return false;
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
        <Grid container className={classes.container} spacing={3}>
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
