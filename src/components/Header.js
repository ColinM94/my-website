import { useState } from "react"
import { makeStyles, Container, Button, Menu, MenuItem, IconButton, Typography } from "@material-ui/core"
import { useHistory, useLocation } from "react-router-dom"
import headerIcon from "assets/icons/icon_192x192.png"
import MoreVertIcon from '@material-ui/icons/MoreVert'
import Brightness7Icon from '@material-ui/icons/Brightness7';


function Header({ darkMode, setDarkMode}) {
    const useStyles = makeStyles((theme) => ({
        header: {
            backgroundColor: darkMode ? "#20252b" : "#3626A7",
            display: "flex",
        },
        headerContent: {
            display: "flex",
            alignItems: "center",
            position: "relative",
            justifyContent: "center",
            height: headerHeight,
        },
        icon: {
            position: "absolute",
            left: 20, 
            [theme.breakpoints.down('sm')]: {
                display: "none"
            },
            fontSize: 22, 
            fontWeight: "bold",   
            color: "white" 
        },
        darkModeBtn: {
            position: "absolute",
            right: 20, 
            [theme.breakpoints.down('xs')]: {
                display: "none"
            }, 
            color: "white"
        },
        menuButton: {
            [theme.breakpoints.up('sm')]: {
                display: "none"
            },
        },
        button: {
            flexGrow: 1,
            height: "100%",
            borderRadius: 0,
            [theme.breakpoints.up('sm')]: {
                maxWidth: 150
            },
            color: "white"
        },
        active: {
            borderBottom: `1px solid ${theme.palette.secondary.main}`,
        }
    }))

    const headerHeight = 60
    const classes = useStyles()
    const history = useHistory()
    const location = useLocation()

    const [anchorEl, setAnchorEl] = useState(null);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }
  
    const handleClose = () => { 
      setAnchorEl(null)
    }

    return (
        <div className={classes.header}>
            <Container maxWidth="lg" disableGutters className={classes.headerContent}>  
                <Typography align="justify" className={classes.icon} onClick={() => history.push('/about')}>
                    COLIN MAHER
                </Typography>     
                <Button className={[classes.button, location.pathname==="/about" ? classes.active : null]} onClick={() => history.push('/about')}>About Me</Button>
                <Button className={[classes.button, location.pathname==="/tutoring" ? classes.active : null]} onClick={() => history.push('/tutoring')}>Tutoring</Button>
                <Button className={[classes.button, location.pathname==="/projects" ? classes.active : null]} onClick={() => history.push('/projects')}>Projects</Button>
                <IconButton onClick={toggleDarkMode} className={classes.darkModeBtn} aria-controls="menu" aria-haspopup="true">
                    <Brightness7Icon />
                </IconButton>  
                <IconButton onClick={handleClick} className={classes.menuButton} aria-controls="menu" aria-haspopup="true">
                    <MoreVertIcon />
                </IconButton> 
                <Menu id="menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                    <MenuItem onClick={() => {toggleDarkMode(); handleClose();}}>{darkMode ? "Light Mode" : "Dark Mode"}</MenuItem>
                </Menu>  
            </Container>  
        </div>     
    )
}

export default Header