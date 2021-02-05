import { useState } from "react"
import { Grid, ClickAwayListener, Button, Typography, Tooltip } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

// Icons.
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import AssignmentIcon from '@material-ui/icons/Assignment'
import EmailIcon from '@material-ui/icons/Email'

function Links() {
    const classes = useStyles()
    const [emailToolTipOpen, setEmailTooltipOpen] = useState(false)
    const btnVariant = "contained"
    const btnSize = "large"

    return (
        <Grid container direction="column" spacing={2} justify="center" alignItems="stretch">
            <Grid item xs={12}>
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
                            style={{backgroundColor: "#C20114", color: "white"}}
                            onClick={() => {
                                navigator.clipboard.writeText("colinmaher94@gmail.com")
                                setEmailTooltipOpen(true)
                            }}
                            size={btnSize}
                            variant={btnVariant}
                        >
                            <Typography variant="button">
                                ColinMaher94@gmail.com
                            </Typography>
                        </Button>
                    </Tooltip>
                </ClickAwayListener>
            </Grid>
            <Grid item xs={12}>
                <Button 
                    startIcon={<AssignmentIcon />} 
                    className={classes.button} 
                    style={{backgroundColor: "#e68a00", color: "white"}}
                    onClick={()=> window.open("cv.pdf", "_blank")} 
                    size={btnSize}
                    variant={btnVariant}
                >
                    <Typography variant="button">
                        CV
                    </Typography>
                </Button>
            </Grid>
            <Grid item xs={12}>
                <Button 
                    startIcon={<GitHubIcon />} 
                    className={classes.button} 
                    style={{backgroundColor: "#28a445", color: "white"}}
                    onClick={() => window.open("https://github.com/ColinM94")} 
                    size={btnSize}
                    variant={btnVariant}
                    >
                        <Typography variant="button">
                            GitHub
                        </Typography>
                </Button>
            </Grid>
            <Grid item xs={12}>
                <Button 
                    startIcon={<LinkedInIcon />} 
                    className={classes.button} 
                    style={{backgroundColor: "#0E76A8", color: "white"}}
                    onClick={() => window.open("https://linkedin.com/in/colinm94")} 
                    size={btnSize}
                    variant={btnVariant}
                    >
                        <Typography variant="button">
                            LinkedIn
                        </Typography>           
                </Button>
            </Grid>
      </Grid>
    )
}

const useStyles = makeStyles((theme) => ({
    button: {
        width: "100%",
    },
  }))

export default Links