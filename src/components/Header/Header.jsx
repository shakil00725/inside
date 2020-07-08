import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InputBase from '@material-ui/core/InputBase';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Home  from "@material-ui/icons/Home";
import logo from '../../logo.png';

const useStyles = makeStyles((theme) => ({
  logo: {
    margin: theme.spacing(4),
    width: 'auto',
    height: '3rem',
  },
  headerContainer: {
	display: "flex",
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
	width: "100vw",
  textAlign: "center",
  height:'450px'
  },
  landingSearch: {
      padding: '2px 4px',
      display: 'flex',
      
  },
  inputM: {
    marginLeft: theme.spacing(1),
    flex:1
  },
  iconButtonM: {
    padding: 10,
  },
  title: {
    color: "#1967d2",
    fontWeight: 400,
    marginBottom: "3%",
    fontSize: "1.8rem",
    lineHeight: "2.5rem",
  },
  sliderLogo: {
    display: "block",
    margin: "1rem auto",
    width: 'auto',
    height: '2.5rem',
  },
  sliderContainer: {
    background: 'white',
    width: 250,
    height: "100vh",
  },
}));

const Header = ({ handleKeyPress, homeButton, singlePage, handleSearchWord, searchButtonClicked, value }) => {
  const classes = useStyles();

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ [anchor]: open });
  };

  const menuItems = [
    {
      Icon: <Home />,
      Title: "Home",
      click: homeButton
    }
  ]

  const sideList = slider => (
    <Box className={classes.sliderContainer} component="div" onClick={toggleDrawer("left", false)}>
      <CardMedia component="img" className={classes.sliderLogo} src={logo} alt="logo" />
      <Divider />
      <List>
        {
          menuItems.map((menuItem, key) => (
            <ListItem key={key} button onClick={menuItem.click}>
              <ListItemIcon>
                {menuItem.Icon}
              </ListItemIcon>
              <ListItemText primary={menuItem.Title} />
            </ListItem>
          ))}
      </List>
    </Box>
  )
  return (
    <div>
    {singlePage ?
        <React.Fragment>
          	<AppBar style={{ backgroundColor: "#2979FF" }} position="static">
            	<Toolbar>
              		<React.Fragment>
                		<IconButton onClick={toggleDrawer('left', true)} edge="start" color="inherit" aria-label="menu" >
                  			<MenuIcon />
                		</IconButton>
                    <Typography variant="h6">Insidemaps Knowledge Base</Typography>
                		<Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
                  			{sideList('left')}
            			</Drawer>
        			</React.Fragment>
            	</Toolbar>
            </AppBar>
          {/* Search Page */}
        	<Box className={classes.headerContainer}>
            	<Grid container justify="center">
              		<CardMedia component="img" className={classes.logo} src={logo} alt="logo" />
            	</Grid>
            	<Typography variant="h1" className={classes.title}>
              		How can we help you
            	</Typography>
            	<Grid container justify="center">
              		<Grid item md={4} xs={11}>
                		<Paper  elevation={2} className={classes.landingSearch}>
                  			<IconButton onClick={searchButtonClicked} type="submit" className={classes.iconButtonM} aria-label="search">
                    			<SearchIcon />
                  			</IconButton>
                  			<InputBase
                    			onKeyPress={handleKeyPress}
                    			onChange={handleSearchWord}
                    			className={classes.inputM}
                    			placeholder="Describe your issue"
                    			inputProps={{ 'aria-label': 'Describe your issue' }}
                  			/>
                		</Paper>
              		</Grid>
            	</Grid>
          	</Box>
        </React.Fragment>
        :
        <React.Fragment>
          	<AppBar style={{ backgroundColor: "#2979FF" }} position="static">
            	<Toolbar>
              		<IconButton onClick={toggleDrawer('left', true)} edge="start" color="inherit" aria-label="menu" >
                		<MenuIcon />
              		</IconButton>
              		<Grid container justify='center'>
                		<Grid item md={6} xs={11}>
                  			<Paper elevation={2}  className={classes.landingSearch}>
                    			<IconButton onClick={searchButtonClicked} type="submit" className={classes.iconButtonM} aria-label="search">
                      				<SearchIcon />
                    			</IconButton>
                    			<InputBase
                      				value={value}
                      				onKeyPress={handleKeyPress}
                      				onChange={handleSearchWord}
                      				className={classes.inputM}
                      				placeholder="Describe your issue"
                      				inputProps={{ 'aria-label': 'Describe your issue'}}
                    			/>
                  			</Paper>
                		</Grid>
                		<Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
                  			{sideList('left')}
                		</Drawer>
              		</Grid>
            	</Toolbar>
          	</AppBar>
        </React.Fragment>}
    </div>
  )
}

export default Header;