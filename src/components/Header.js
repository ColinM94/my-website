import React from "react"
import { Typography, Container, Button, Paper, makeStyles, Tooltip, IconButton } from "@material-ui/core"
import Brightness7Icon from '@material-ui/icons/Brightness7'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'


const useStyles = makeStyles((theme) => ({
    header: {

    },
    container: {
        maxWidth: 1000,
        margin: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 50,
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2)
    },
    button: {
        minWidth: 100
    },
    darkModeBtn: {
        marginLeft: "auto"
    }
  }))

function Header(props) {
    const classes = useStyles()

    return (
        <div className={classes.container}>
            <Button className={classes.button}>Projects</Button>
            <Button className={classes.button}>Contact</Button>
            <Button className={classes.button} onClick={()=> window.open("cv.pdf", "_blank")}>CV</Button>

            <Tooltip title={props.darkMode ? "Light Mode" : "Dark Mode"} className={classes.darkModeBtn} onClick={() => props.setDarkMode(!props.darkMode)}>
                <IconButton aria-label="dark mode">
                    <Brightness7Icon/>
                </IconButton>
            </Tooltip>
        </div>    

    )
}

export default Header