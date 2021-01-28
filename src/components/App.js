import { useState } from "react"
import { createMuiTheme, Container, Typography, Card, CardContent, Button, CssBaseline, Paper, Grid, Link, Tooltip, IconButton, ClickAwayListener } from "@material-ui/core"
import { ThemeProvider, makeStyles } from "@material-ui/core/styles"
import Header from "components/Header"
import Footer from "components/Footer"
import "styles/style.css"
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import AssignmentIcon from '@material-ui/icons/Assignment'
import "typeface-dosis"
import { Autorenew } from "@material-ui/icons"
import EmailIcon from '@material-ui/icons/Email';

function App() {
  const [darkMode, setDarkMode] = useState(true)
  
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
    typography: {
      fontFamily: [
        'dosis'
      ],
      fontSize: 15
    },
    props: {
      MuiPaper: {
        elevation: 0,
        square: true
        
      },
      MuiButton: {
        
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
      padding: "0px 20px",
      margin: "auto",
      marginTop: 0
    },
    paper: {
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    title: {
      fontSize: 40,
      marginBottom: 10,
      marginTop: 0
    },
    button: {
      textTransform: "none",
      padding: "15px",
      margin: "auto",
      justifyContent: "flex-start"
    }
  }))

  const classes = useStyles()
  const [emailToolTipOpen, setEmailTooltipOpen] = useState(false)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
      <div className={classes.content}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
              <Typography class={classes.title}>Hey, I'm Colin.</Typography>
              <Typography variant="body1">
                I'm currently living in Cologne working as a freelance programming tutor, while I study German. 
                I have a Bachelors of Science in Software Development. I am a massive nerd and I love everything tech. 
              </Typography>                  
          </Grid>
          <Grid item xs={0} md={6}/>
          <Grid item xs={12} md={6}>
            <Typography class={classes.title}>Projects</Typography>
            <Link href="https://github.com/ColinM94/homecare-ireland-web" color="inherit">
              <Typography>Homecare Ireland</Typography>
            </Link><br/>
            <Link href="https://github.com/ColinM94/divitiae" color="inherit">
              <Typography>Divitiae</Typography>
            </Link>
          </Grid>
          <Grid item xs={0} md={6}/>
          <Grid item xs={12} md={6}>
            <Typography class={classes.title}>Skills and Tools</Typography>
            <Typography variant="body1">
              JavaScript, React, React Native, C#, C++, Java. 
            </Typography>  
          </Grid>
          <Grid item xs={0} md={6}/>
          <Grid item xs={12} md={6}>
            <Typography class={classes.title}>Tutoring</Typography>
            <Typography variant="body1">
              I can teach you general programming, or focus any specific areas you want, and/or assist you with your college assignments.
              The lessons are online through Zoom and are €25/hr.
            </Typography>
          </Grid>
          <Grid item xs={0} md={6}/>
          <Grid item xs={12}>
            <Typography class={classes.title}>Contact Me</Typography>
            <Typography variant="body1" style={{marginBottom: 10}}>I would love to hear from you!</Typography>
            <ClickAwayListener onClickAway={() => setEmailTooltipOpen(false)}>
              <Tooltip 
                title="Copied to Clipboard"
                disableFocusListener
                disableHoverListener
                onClose={() => setEmailTooltipOpen(false)}
                open={emailToolTipOpen}
                onClick={() => setEmailTooltipOpen(true)}
              >
                <Button            
                  startIcon={<EmailIcon />}
                  className={classes.button}
                  onClick={() => {navigator.clipboard.writeText("colinmaher94@gmail.com"); setEmailTooltipOpen(true)}}
                >
                  <Typography>
                    ColinMaher94@gmail.com
                  </Typography>
                </Button>
              </Tooltip>
            </ClickAwayListener>
            <br/>
            <Button            
              startIcon={<GitHubIcon />}
              className={classes.button}
              onClick={() => window.open("https://github.com/ColinM94")}
            >
              <Typography>
                GitHub
              </Typography>
            </Button>
            <br/>
            <Button     
              startIcon={<LinkedInIcon />}
              className={classes.button}
              onClick={() => window.open("https://linkedin.com/in/colinm94")}
            >
              <Typography>
                LinkedIn
              </Typography>
            </Button>
            <br/>
            <Button 
              startIcon={<AssignmentIcon />}
              className={classes.button}
              onClick={()=> window.open("cv.pdf", "_blank")}
            >
              <Typography>
                CV
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  )
}

export default App
