import { useState, useEffect } from "react"
import { Typography, Container, Button, Paper, makeStyles, Tooltip, IconButton, Link, BottomNavigation, BottomNavigationAction } from "@material-ui/core"
import Brightness7Icon from '@material-ui/icons/Brightness7'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    header: {
        backgroundColor: "#20252b",
        color: "white"
    },
    headerContent: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        color: "white"
    },
    darkModeBtn: {
     /*    marginLeft: "auto" */
    },
    button: {
        paddingTop: 10,
        paddingBottom: 10,
        color: "white"
    }
}))

function Header(props) {
    const history = useHistory();
    const classes = useStyles()
/*     const preventDefault = (event) => event.preventDefault();
    const [value, setValue] = useState(0);
    
    const handleChange = (event, newValue) => newValue==3 ? null : setValue(newValue) */

    return (
        <div className={classes.header}>
            <Container maxWidth="sm" className={classes.headerContent}>
                <Button className={classes.button} onClick={() => history.push('/home')}>Home</Button>
                <Button className={classes.button} onClick={() => history.push('/tutoring')}>Tutoring</Button>
                <Button className={classes.button} onClick={() => history.push('/projects')}>Projects</Button>

                <Tooltip title={props.darkMode ? "Light Mode" : "Dark Mode"} className={classes.darkModeBtn} onClick={() => props.setDarkMode(!props.darkMode)}>
                    <IconButton aria-label="dark mode" style={{color: "white"}}>
                        <Brightness7Icon/>
                    </IconButton>
                </Tooltip>
            </Container>  
        </div>     

    )
}

export default Header