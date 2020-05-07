import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Button from '@material-ui/core/Button'

import logo from '../../assets/logo.svg'


function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

//https://material-ui.com/styles/basics/
const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em"
  },
  logo: {
    height : "7em"
  },
  tabsContainer: {
    marginLeft: "auto"
  },
  tab:{
    ...theme.typography.tab,
    minWidth : 10,
    marginLeft:"25px"
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    height : "45px",
  }
}))

function Header(props){

  const classes = useStyles()
  const [value, setValue] = useState(0)
  const handleChange = (e, value) => {
    setValue(value)
  }

  //https://material-ui.com/components/tabs/
  //https://material-ui.com/components/buttons/
  return(
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" color="primary">
          <ToolBar disableGutters>
            <img alt="company logo" src={logo} className={classes.logo}/>
            <Tabs value={value} onChange={handleChange} className={classes.tabsContainer}
            indicatorColor="secondary"
            >
              <Tab className={classes.tab} label="Home"/>
              <Tab className={classes.tab} label="Services"/>
              <Tab className={classes.tab} label="The Revolution"/>
              <Tab className={classes.tab} label="About Us"/>
              <Tab className={classes.tab} label="Contact Us"/>
            </Tabs>
            <Button variant="contained" color="secondary" className={classes.button}>Free Estimate</Button>
          </ToolBar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin}/>
    </React.Fragment>
  )
}

export default Header