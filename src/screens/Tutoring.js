import React from "react"
import { Typography, Container } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

function Tutoring({theme}) {
    const classes = useStyles()

    return (
        <>
            <Typography variant="body1">
                I love teaching and helping people understand programming. 
                I teach general programming, focus on specific areas, or help you with your projects.
                The lessons are online through Zoom and are €25/hr.
            </Typography>
        </>
    )
}

const useStyles = makeStyles((theme) => ({
        
}))

export default Tutoring