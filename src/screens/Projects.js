import { Typography, Link, Grid, Card, CardContent, ButtonBase, Container } from "@material-ui/core"
import colinPhoto from "assets/images/me.jpg"
import { makeStyles } from "@material-ui/core/styles"


const useStyles = makeStyles((theme) => ({
    title: {
  
    },
    mainImage: {
      display: "block",
      margin: "auto"
    },
    link: {
      color: "white",
      textDecoration: "none"
    },
    cardContainer: {
      width: "100%",

    },
    card: {
      padding: 10,
      width: "100%",
      backgroundColor: theme.palette.primary.main,
      color: "white"
    },
    cardContent: {
      width: "fit-content", 
      margin: "auto"
    }
}))

function Projects() {
    const classes = useStyles()
    
    return (
        <>
{/*           <Grid item xs={12}>
            <Typography variant="h1" align="center">
                Projects
            </Typography>
          </Grid> */}
          <Grid item xs={12}>
            <ButtonBase onClick={()=> window.open("https://github.com/ColinM94/homecare-ireland-web", "_blank")} className={classes.cardContainer}>
              <Card className={classes.card} onClick={()=> window.open("https://github.com/ColinM94/my-website", "_blank")} >
                <CardContent className={classes.cardContent}>
                  <Typography variant="h5">This website</Typography>
                  <br />
                  <Typography variant="body1" align="justify">The code that makes this website work. Created using ReactJS.</Typography>       
                </CardContent>
              </Card>    
            </ButtonBase>
          </Grid>
          <Grid item xs={12}>
            <ButtonBase onClick={()=> window.open("https://github.com/ColinM94/homecare-ireland-web", "_blank")} className={classes.cardContainer}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                    <Typography variant="h5">Homecare Ireland</Typography>
                    <br />
                    <Typography variant="body1" align="justify">My final year project from college. Created using HTML, CSS, and JavaScript.</Typography>                
                </CardContent>     
              </Card>  
            </ButtonBase>   
          </Grid>
          <Grid item xs={12}>
            <ButtonBase onClick={()=> window.open("https://github.com/ColinM94/homecare-ireland-web", "_blank")} className={classes.cardContainer}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                    <Typography variant="h5">Grinds App</Typography>
                    <br />
                    <Typography variant="body1" align="justify">
                      Android and IOS app for bringing together students and tutors. Currently early in development. 
                      Created using React Native.
                    </Typography>
                </CardContent>     
              </Card>  
            </ButtonBase>   
          </Grid>
        </>
    )
}

export default Projects