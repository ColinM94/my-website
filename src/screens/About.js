import { useState } from "react"
import { Typography, Grid} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

// Icons & Images. 
import colinPhoto from "assets/images/me.jpg"

import Links from "components/Links"

function About({theme}) {
    const classes = useStyles()

    return (
        <>
            <Grid item xs={12} className={classes.title}>
              <Typography variant="h1" align="center">Hey, I'm Colin.</Typography>
              <Typography variant="subtitle1" align="center">a software developer.</Typography>
            </Grid>
            <Grid item xs={12} sm={6} align="center">
              <img src={colinPhoto} alt="Colin Maher" height={240} style={{borderRadius: "10%", objectFit: "cover"}}/>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography align="justify" gutterBottom={true}>
                I am currently working as a freelance programmer and tutor based in Cologne.
                I have a bachelors degree in Software Development from Limerick Institute of Technology. 
                I like all sorts of programming but I really love creating mobile and web apps with JavaScript, React, and React Native. 
                
              </Typography>
              <Typography align="justify" gutterBottom={true}>
                Ich lerne Deutsch. Ich kann nur etwas sprechen, aber ich werde jeden Tag besser.    
              </Typography> 
              <Typography align="justify">
                I am available to do freelance work, permanent work, or tutoring. I would love to hear from you.
              </Typography> 
            </Grid>
            <Grid item xs={12} className={classes.links}>
              <Links />
            </Grid>
        </>
    )
}

const useStyles = makeStyles((theme) => ({
  title: {
    [theme.breakpoints.up('sm')]: {
      marginBottom: 30
    },
  },
  links: {
    maxWidth: 500,
    margin: "auto",
    [theme.breakpoints.up('sm')]: {
      marginTop: 50
    }, 
  },
  button: {
    textTransform: "none",
    width: "100%",
    marginBottom: 10,
  },
}))

export default About