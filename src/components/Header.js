import React from "react"
import { Typography, Container, Button, Paper, makeStyles, Tooltip, IconButton } from "@material-ui/core"
import Brightness7Icon from '@material-ui/icons/Brightness7'

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
        width: 100
    },
    darkModeBtn: {
        marginLeft: "auto"
    }
  }))

function Header(props) {
    const classes = useStyles()

    return (
        <div className={classes.container}>
            <Button className={classes.button} color="primary">Projects</Button>
            <Button className={classes.button} color="primary">Contact</Button>
            <Button className={classes.button} color="primary">Tutoring</Button>
            <Tooltip title={props.darkMode ? "Light Mode" : "Dark Mode"} className={classes.darkModeBtn} onClick={() => props.setDarkMode(!props.darkMode)}>
                <IconButton aria-label="dark mode">
                    <Brightness7Icon color="primary"/>
                </IconButton>
            </Tooltip>
        </div>    

    )
}

export default Header