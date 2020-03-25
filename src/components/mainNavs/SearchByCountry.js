import React , {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Container from '@material-ui/core/Container';




import axios from 'axios'
const useStyles = makeStyles(theme => ({
    root: {
      padding: '2px 4px',
      display: 'flex',
      marginTop: 75,
      alignItems: 'center',
      width: 400,
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
  }));
  

const SearchByCountry = ()=> {

    const [state , formData] = useState({
        query: '',
        data: []
    })


    const classes = useStyles();
    const onChange = (e) => {
        formData({ ...state, [e.target.name]:[e.target.value] })
    }

    const onClick = (q) => {
        if(q !== '') {
        axios({
            "method":"GET",
            "url":"https://coronavirus-monitor.p.rapidapi.com/coronavirus/latest_stat_by_country.php",
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"coronavirus-monitor.p.rapidapi.com",
            "x-rapidapi-key":"de69d9e857msh910fd87746308cep152c4cjsn3d824c08d821"
            },"params":{
            "country":`${q}`
            }
            })
            .then((response)=>{
                formData({
                    data:[response.data]
                })
                console.log(response)
            })
            .catch((error)=>{
            console.log(error)
            })
        }
        console.log(state.data)
    }

    const res = state.data.map(res => {
        return (<div> 
            
            {res.country} <br/>
            {res.latest_stat_by_country[0].total_cases}<br/>
            {res.latest_stat_by_country[0].new_cases}<br/>
            {res.latest_stat_by_country[0].active_cases}<br/>
            {res.latest_stat_by_country[0].total_deaths}<br/>
            {res.latest_stat_by_country[0].new_deaths}<br/>
            {res.latest_stat_by_country[0].total_recovered}<br/>
            {res.latest_stat_by_country[0].serious_critical}<br/>
            {res.latest_stat_by_country[0].region}<br/>
            {res.latest_stat_by_country[0].total_cases_per1m}<br/>
            {res.latest_stat_by_country[0].record_date}
            
            </div>)
    })

    return (
        <Container fixed>
        <Paper component="form" className={classes.root}>
            <InputBase
                className={classes.input}
                onChange = {e => onChange(e)}
                name="query"
                value={state.query}
                placeholder="Search by country"
                inputProps={{ 'aria-label': 'search by country' }}
            />
            <IconButton className={classes.iconButton} onClick={()=> onClick(state.query)} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
        {res}
        </Container>
    )
}

export default SearchByCountry;


