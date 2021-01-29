import { Typography, Link } from "@material-ui/core"
import colinPhoto from "assets/images/me.jpg"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
    title: {
  
    },
    mainImage: {
      display: "block",
      margin: "auto"
    },
    link: {
      color: "white",
      textDecoration: "none"
    }
  })

function Projects() {
    const style = useStyles()
    
    return (
        <>
          <Link href="https://github.com/ColinM94/homecare-ireland-web" color="inherit">
            <Typography>Homecare Ireland</Typography>
          </Link><br/>
          <Link href="https://github.com/ColinM94/divitiae" color="inherit">
            <Typography>Divitiae</Typography>
          </Link>
        </>
    )
}

export default Projects