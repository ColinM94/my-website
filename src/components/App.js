import { useState } from "react"
import { createMuiTheme, CssBaseline, Container, Grid } from "@material-ui/core"
import { ThemeProvider, makeStyles } from "@material-ui/core/styles"
import "styles/style.css"
import "typeface-dosis"

// My components.
import Header from "components/Header"
import About from "screens/About"
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
  const [headerHeight, setHeaderHeight] = useState(60)

  const theme = createMuiTheme({
    spacing: 8,
    palette: {
      type: darkMode ? "dark" : "light",
      secondary: {
        main: "#C20114"
      },
      text: {

      },
      background: {
        default: darkMode ? "#121212" : "#FBFBFF"
      } 
    },
    typography: {
      fontFamily: [
        'dosis'
      ],
      h1: {
        fontSize: 55
      },
      h2: {
        fontSize: 50
      },
      h3: {
        fontSize: 45
      },
      h4: {
        fontSize: 40
      },
      h5: {
        fontSize: 35
      },
      h6: {
        fontSize: 30
      },
      body1: {
        fontSize: 17
      },
      body2: {
        fontSize: 15
      },
      button: {
        fontSize: 17,
        textTransform: "none"
      }
    }
  })


  const useStyles = makeStyles((theme) => ({
    container: {
      padding: 20,
      paddingTop: 25,
      paddingBottom: 25,
      display: "flex",
/*       minHeight: `calc(75vh - ${headerHeight}px)`,
      flexDirection: "column",
      justifyContent: "center", */
    },
  }))
  const classes = useStyles()
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} headerHeight={headerHeight}/>
          <Container maxWidth="md" className={classes.container}>
            <Grid container spacing={5}>
              <Switch>
                <Route exact path="/about" component={About} />
                <Route exact path="/tutoring" component={Tutoring} />
                <Route exact path="/projects" component={Projects} />
                <Route render={() => <Redirect to={{pathname: "/about"}} />} />
              </Switch>
            </Grid>       
          </Container>
      </Router>   
    </ThemeProvider>
  )
}

export default App
