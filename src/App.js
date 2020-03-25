import React from 'react';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import NavBar from './components/NavBar'

//main routes

import AllData from './components/mainNavs/AllData'
import SearchByCountry from './components/mainNavs/SearchByCountry'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
}));

 function App() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });


  const toggleDrawer = (clicked, boolval) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [clicked]: boolval });
  };


  return (
   <Router>
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton onClick={toggleDrawer('left' , true)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
            <NavBar/>
          </Drawer>
          <Typography variant="h6" className={classes.title}>
            Corona Updates
          </Typography>
        </Toolbar>
      </AppBar>

      <Switch>
        <Route path="/all" exact component={AllData}></Route>
        <Route path="/search" exact component={SearchByCountry}></Route>
      </Switch>
    </div>
  </Router> 
  );
}

export default App;




