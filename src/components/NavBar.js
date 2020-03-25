import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText'
import {NavLink} from 'react-router-dom'
const useStyles = makeStyles({
  list: {
    width: 250,
    textDecoration: 'none'
  },
});

export default function NavBar() {
  const classes = useStyles();
  return (
    <div>
       <List>
           <NavLink style={{ textDecoration: 'none' , color: 'black'}} to='/all'>
                <ListItem className={classes.list} button>
                    <ListItemText primary="All Data"/>
                </ListItem>
           </NavLink>
           <NavLink style={{ textDecoration: 'none' ,  color: 'black'}} to='/search'>
                <ListItem className={classes.list} button>
                    <ListItemText primary="Search By Country"/>
                </ListItem>
           </NavLink>
        </List> 
    </div>
  );
}
