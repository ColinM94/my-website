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

function AboutMe() {
    const style = useStyles()
    
    return (
        <>
            <h1>Colin's Programming Tutoring</h1>
            <img className={style.mainImage} src={colinPhoto} alt="Colin Maher" height="500"/>
            <p>
              Hi, I'm Colin and I have recently completed a Bachelor of Science in Software Development. 
              I can teach you general programming, or focus any specific areas you want, and/or assist you with your college assignments. 
              The lessons are online through Zoom and are €25/hr.
              C#, JavaScript, Java, C++, PHP, HTML, CSS, React, React Native and Firebase.
            </p>
            <p>Contact: colinmaher94@gmail.com</p>
            <Typography>
              <Link href="github.com/ColinM94" color="primary">GitHub</Link>
              <Link href="linkedin.com/in/ColinM94" color="primary">LinkedIn</Link>
            </Typography>
        </>
    )
}