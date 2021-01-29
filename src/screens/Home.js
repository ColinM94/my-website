import { useState } from "react"
import { Typography, Container, Link, ClickAwayListener, Button, Tooltip } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

// Icons. 
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import AssignmentIcon from '@material-ui/icons/Assignment'
import EmailIcon from '@material-ui/icons/Email'

import colinPhoto from "assets/images/me.jpg"

function Home({theme}) {
    const classes = useStyles()
    const [emailToolTipOpen, setEmailTooltipOpen] = useState(false)

    return (
        <>
            <Typography variant="h1">Colin Maher</Typography>
            <img src={colinPhoto} alt="Colin Maher" height={250}/>
            <Typography variant="body1" style={{marginBottom: 10}}>
                I'm currently living in Cologne working as a freelance programmer and tutor. 
                I am currently studying German in my spare time.
                Ich spreche nicht viel Deutsch, aber ich werde jeden Tag besser. 
                I have a Bachelors of Science in Software Development. 
            </Typography>
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
        </>
    )
}

const useStyles = makeStyles((theme) => ({
        
}))

export default Home