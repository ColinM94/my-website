import React from "react"
import { Typography, Container } from "@material-ui/core"

function Footer() {
    return (
        <div className="footer">
            <Container maxWidth="md">
                <Typography>&copy; Colin Maher 2021</Typography>
            </Container>
        </div>
    )
}

export default Footer