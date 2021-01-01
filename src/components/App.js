import { useState } from "react"
import { createMuiTheme, Container, Typography, Card, CardContent, Button, CssBaseline, Paper, Grid, Link, Tooltip, IconButton } from "@material-ui/core"
import { ThemeProvider, makeStyles } from "@material-ui/core/styles"
import Header from "components/Header"
import Footer from "components/Footer"
import "styles/style.css"
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [spacing, setSpacing] = useState(3)
  
  const theme = createMuiTheme({
    spacing: 10,
    palette: {
      type: darkMode ? "dark" : "light",
      background: {
        default: darkMode ? "#121212" : "#fffff"
      },
      primary: {
        main: darkMode ? "#fffff" : "#ffffff"
      },
      secondary: {
        main: darkMode ? "#000000" : "#ffffff"
      }
    },
    props: {
      MuiPaper: {
        elevation: 0,
        square: true
        
      },
      MuiButton: {
        color: "primary"
      }
    },
    overrides: {
      MuiPaper: {
        square: true
      }
    }
  })

  const useStyles = makeStyles((theme) => ({
    content: {
      maxWidth: 1000,
      padding: theme.spacing(spacing),
      margin: "auto",
      marginTop: 0
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    button: {
      width: 150
    }
  }))

  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
      <div className={classes.content}>
        <Grid container spacing={spacing}>
          <Grid item xs={12} sm={6}>
              <Typography variant="h3">Hey, I'm Colin :)</Typography>
              <br/>
              <Typography variant="body1">
                I'm currently living in Cologne working as a freelance programming tutor, while I study German. 
                I have a Bachelors of Science in Software Development. I am a massive nerd and I love everything tech. 
              </Typography>                  
          </Grid>
          <Grid item xs={0} md={6}/>
          <Grid item xs={12}>
            <Typography variant="h4">Projects</Typography>
            <br/>
            <Link href="https://github.com/ColinM94/homecare-ireland-web" color="inherit">
              Homecare Ireland
            </Link><br/>
            <Link href="https://github.com/ColinM94/divitiae" color="inherit">
              Divitiae
            </Link>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4">Skills and Tools</Typography>
            <br/>
            <Typography variant="body1">
              JavaScript, React, React Native, C#, C++, Java. 
            </Typography>  
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4">Contact Me</Typography>
            <br/>
            <Typography variant="body1">colimaher94@gmail.com</Typography>
            <Button 
              variant="outlined"
              size="large"
              startIcon={<GitHubIcon />}
              className={classes.button}
              onClick={() => window.open("https://github.com/ColinM94")}
            >
              GitHub
            </Button>
            <Button 
              variant="outlined"
              size="large"
              startIcon={<LinkedInIcon />}
              className={classes.button}
              onClick={() => window.open("https://linkedin.com/in/colinm94")}
            >
              LinkedIn
            </Button>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  )
}

export default App
