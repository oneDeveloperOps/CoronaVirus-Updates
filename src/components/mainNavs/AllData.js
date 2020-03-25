import React, {useState} from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CssBaseline from '@material-ui/core/CssBaseline';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles({
  card: {
    minWidth: 250,
    marginTop: 15
  },
  root: {
    marginTop: 75
  },
  title: {
    fontSize: 24,
    textAlign: 'center'
  },
  pos: {
    marginBottom: 12,
    textAlign: 'center'
  },
});

const AllData = () => {
  const[state , updateState] = useState({
    data: []
  });

  
const classes = useStyles();
  

  if(state.data.length === 0) {  
    axios({
      "method":"GET",
      "url":"https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php",
      "headers":{
      "content-type":"application/octet-stream",
      "x-rapidapi-host":"coronavirus-monitor.p.rapidapi.com",
      "x-rapidapi-key":"de69d9e857msh910fd87746308cep152c4cjsn3d824c08d821"
      }
      })
      .then((response)=>{
        console.log(response)
        updateState({ data: [response.data]})
      })
      .catch((error)=>{
        console.log(error)
      })
  }

  const all = state.data.map(res => {
    return (
     <div className={classes.root}>
     <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textPrimary" gutterBottom>
         {res.total_cases}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Total Cases
        </Typography>
      </CardContent>
    </Card>
    <Card className={classes.card}>
    <CardContent>
      <Typography className={classes.title} color="textPrimary" gutterBottom>
       {res.total_deaths}
      </Typography>
      <Typography className={classes.pos} color="textSecondary">
        Total Deaths
      </Typography>
    </CardContent>
  </Card>


  <Card className={classes.card}>
    <CardContent>
      <Typography className={classes.title} color="textPrimary" gutterBottom>
       {res.total_recovered}
      </Typography>
      <Typography className={classes.pos} color="textSecondary">
        Total recovered
      </Typography>
    </CardContent>
  </Card>

  <Card className={classes.card}>
    <CardContent>
      <Typography className={classes.title} color="textPrimary" gutterBottom>
       {res.new_cases}
      </Typography>
      <Typography className={classes.pos} color="textSecondary">
        New Cases
      </Typography>
    </CardContent>
  </Card>

  <Card className={classes.card}>
    <CardContent>
      <Typography className={classes.title} color="textPrimary" gutterBottom>
       {res.new_deaths}
      </Typography>
      <Typography className={classes.pos} color="textSecondary">
        New Deaths
      </Typography>
    </CardContent>
  </Card>

  <Card className={classes.card}>
    <CardContent>
      <Typography className={classes.title} color="textPrimary" gutterBottom>
       {res.statistic_taken_at}
      </Typography>
      <Typography className={classes.pos} color="textSecondary">
        Last Update
      </Typography>
    </CardContent>  
  </Card>
  </div>
    )
  })


    return(
      <React.Fragment>
        <CssBaseline/>
      <Container fixed>
       {all}
      </Container>
      </React.Fragment>
      )
  }
export default AllData;
