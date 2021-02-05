import React from "react"
import { Typography, Container, Grid, Button, SvgIcon, ButtonBase, Card, CardContent } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import ExperienceButtons from "components/ExperienceButtons"

function Tutoring({theme}) {
    const classes = useStyles()

    return (
        <>     
{/*             <Grid item xs={12}>
                <Typography variant="h1" align="center">
                    Tutoring
                </Typography>
            </Grid> */}
            <Grid item xs={12}>
                <Container maxWidth="sm">
                    <Typography variant="body1" align="justify">
                        I love teaching and I have students of all ages.
                        The lessons are online through Zoom.
                        I can help you with understanding programming or with specific problems you are having. 
                        I would love to hear from you.
                    </Typography>   
                </Container>         
            </Grid>
            <Grid item xs={12}>
                <Container maxWidth="sm">
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography align="center" style={{fontSize: 30, color: "white"}}>
                                €20 per hour
                            </Typography>
                        </CardContent>
                    </Card>
                </Container>
            </Grid>
            <Grid item xs={12}>
                <Container maxWidth="md" disableGutters style={{width: "fit-content"}}>
                    <Typography variant="body1" align="justify">
                        I am experienced with the languages, libraries, and services below. 
                    </Typography>
                </Container>
            </Grid>
            <Grid item xs={12}>
                <Container maxWidth="xs" disableGutters>
                    <ExperienceButtons />
                </Container>
            </Grid>
        </>
    )
}

const useStyles = makeStyles((theme) => ({


    card: {
        padding: 5,
        width: "100%",
        backgroundColor: theme.palette.primary.main
      }
}))

export default Tutoring