import { Grid, ButtonBase, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

// Icons.
import jsIcon from "assets/icons/js.png"
import cssIcon from "assets/icons/css.png"
import htmlIcon from "assets/icons/html.png"
import reactIcon from "assets/icons/react.png" 
import reactNativeIcon from "assets/icons/reactNative.png"
import javaIcon from "assets/icons/java.png"
import firebaseIcon from "assets/icons/firebase.png"
import csharpIcon from "assets/icons/csharp.png"

function ExperienceButtons() {
    const classes = useStyles()

    return (
        <Grid container spacing={1}>
            <Grid item xs={6}>
                <ButtonBase className={classes.button} onClick={()=> window.open("https://developer.mozilla.org/en-US/docs/Web/JavaScript", "_blank")}>
                    <img src={jsIcon} className={classes.icon}/> 
                    <Typography variant="button">
                        JavaScript
                    </Typography>
                </ButtonBase>
            </Grid>
            <Grid item xs={6}>
                <ButtonBase className={classes.button} onClick={()=> window.open("https://developer.mozilla.org/en-US/docs/Web/CSS", "_blank")}>
                    <img src={cssIcon} className={classes.icon}/> 
                    <Typography variant="button">
                        CSS
                    </Typography>
                </ButtonBase>
            </Grid>
            <Grid item xs={6}>
                <ButtonBase className={classes.button} onClick={()=> window.open("https://developer.mozilla.org/en-US/docs/Web/HTML", "_blank")}>
                    <img src={htmlIcon} className={classes.icon}/> 
                    <Typography variant="button">
                        HTML
                    </Typography>
                </ButtonBase>
            </Grid>
            <Grid item xs={6}>
                <ButtonBase className={classes.button} onClick={()=> window.open("https://reactjs.org/", "_blank")}> 
                    <img src={reactIcon} className={classes.icon}/> 
                    <Typography variant="button">
                        React JS
                    </Typography>
                </ButtonBase>
            </Grid>
            <Grid item xs={6}>
                <ButtonBase className={classes.button} onClick={()=> window.open("https://reactnative.dev/", "_blank")}> 
                    <img src={reactNativeIcon} className={classes.icon}/> 
                    <Typography variant="button" noWrap>
                        React Native
                    </Typography>
                </ButtonBase>
            </Grid>
            <Grid item xs={6}>
                <ButtonBase className={classes.button} onClick={()=> window.open("https://docs.microsoft.com/en-us/dotnet/csharp/", "_blank")}> 
                    <img src={csharpIcon} className={classes.icon}/> 
                    <Typography variant="button">
                        C#
                    </Typography>
                </ButtonBase>
            </Grid>
            <Grid item xs={6}>
                <ButtonBase className={classes.button} onClick={()=> window.open("https://docs.oracle.com/javase/tutorial/index.html", "_blank")}> 
                    <img src={javaIcon} className={classes.icon}/> 
                    <Typography variant="button">
                        Java
                    </Typography>
                </ButtonBase>
            </Grid>
            <Grid item xs={6}>
                <ButtonBase className={classes.button} onClick={()=> window.open("https://firebase.google.com/docs", "_blank")} textAlign="left"> 
                    <img src={firebaseIcon} className={classes.icon}/> 
                    <Typography variant="button">
                        Firebase
                    </Typography>
                </ButtonBase>
            </Grid>
        </Grid>
    )
}

const useStyles = makeStyles((theme) => ({
    button: {
        padding: 10,
        borderRadius: 5,
        width: "100%",
        justifyContent: "flex-start",
    },
    icon: {
        height: 50,
        width: 45,
        marginRight: 10,
    },
}))

export default ExperienceButtons