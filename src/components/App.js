import { useState } from "react"
import { createMuiTheme, CssBaseline, Container } from "@material-ui/core"
import { ThemeProvider, makeStyles } from "@material-ui/core/styles"
import "styles/style.css"
import "typeface-dosis"

// My components.
import Header from "components/Header"
import Home from "screens/Home"
import Tutoring from "screens/Tutoring"
import Projects from "screens/Projects"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect 
} from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState(true)
  
  const theme = createMuiTheme({
    spacing: 8,
    palette: {
      type: darkMode ? "dark" : "light",
      secondary: {
        main: "#336699"
      },
      text: {

      },
      background: {
        default: darkMode ? "#121212" : "#fafafa"
      } 
    },
    typography: {
      fontFamily: [
        'dosis'
      ],
      h1: {
        fontSize: 70
      }
    }
  })

  const useStyles = makeStyles((theme) => ({
    container: {
      textAlign: "center",
      paddingTop: 20
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
    },
    '@media (min-width: 1024px)': {
      button: {
        width: 200
      }
    }
  }))

  const classes = useStyles()
  const [emailToolTipOpen, setEmailTooltipOpen] = useState(false)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
        <Container maxWidth="sm" className={classes.container}>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/tutoring" component={Tutoring} />
            <Route exact path="/projects" component={Projects} />
            <Route render={() => <Redirect to={{pathname: "/home"}} />} />
          </Switch>
        </Container>
      </Router>   
    </ThemeProvider>
  )
}

export default App
