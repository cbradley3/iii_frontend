/*
 *
 * Home
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import {Link} from "react-router";
export default class Home extends React.PureComponent {
  render() {
    const divStyle={
      width:"100%",
      height:"600px",
      background:"url(http://h4z.it/Image/c98c04_DSC_0785rev.jpg)",
      backgroundSize:"cover",
      backgroundAttachment:"fixed",
      backgroundPosition:"center",
      backgroundRepeat:"no-repeat",
    }
    const divStyle2={
      width:"100%",
      height:"250px",
      background:"rgba(255, 255, 255, 1.00)"
    }
    const divStyle3={
      width:"100%",
      height:"700px",
      background:"url(http://h4z.it/Image/35e950_DSC_0266rev.jpg)",
      backgroundSize:"cover",
      backgroundAttachment:"fixed",
      backgroundPosition:"center",
      backgroundRepeat:"no-repeat"
    }
    const divStyle4={
      width:"100%",
      height:"800px",
      background:"rgba(255, 255, 255, 1.00)"
    }
    const divStyle5={
      width:"100%",
      height:"600px",
      background:"url(http://h4z.it/Image/c7fe84_da443c74crev.jpg)",
      backgroundSize:"cover",
      backgroundAttachment:"fixed",
      backgroundPosition:"center",
      backgroundRepeat:"no-repeat",
    }
    const divStyle6={
      width:"100%",
      height:"500px",
      background:"rgba(255, 255, 255, 1.00)",
      display:"flex",
      flexDirection:"column",
      flexWrap:"wrap"
    }
    const divStyle7={
      width:"100%",
      height:"600px",
      background:"url(http://h4z.it/Image/645fa8_IMG_9509rev.jpg)",
      backgroundSize:"cover",
      backgroundAttachment:"fixed",
      backgroundPosition:"center",
      backgroundRepeat:"no-repeat",
    }
      const divStyle8={
        width:"100%",
        height:"225px",
        background:"rgba(255, 255, 255, 1.00)"
    }
    const divStyle9={
      width:"100%px",
      height:"150px",
      background:"rgba(63, 191, 127, 1.00)"
  }
    const mainStyle={
      display:"flex",
      flexDirection:"column",
      background:"rgba(255, 255, 255, 1.00)"
    }
    const titleStyle={
      color:"#eeeeee",
      fontSize:"6em",
      fontFamily:"Quicksand",
      fontWeight:"300",
      textTransform:"uppercase",
      letterSpacing:"6px",
      textAlign:"center",
      marginTop:"250px"
    }
    const headerStyle={
      color:"#191919",
      fontSize:"1.5em",
      fontFamily:"Open Sans",
      fontWeight:"800",
      textAlign:"center",
      marginTop:"30px",
      textTransform:"uppercase",
      letterSpacing:"2px"
    }
    const bodyStyle={
      color:"#191919",
      fontSize:".95em",
      fontFamily:"Open Sans",
      fontWeight:"400",
      textAlign:"center",
      marginTop:"30px"
    }
    const navStyle={
      display:"flex",
      flexDirection:"row",
      justifyContent:"flex-end",
      height:"100px",
      alignItems:"center",
      paddingRight:"10px",
      textDecoration:"none",
      color:"#000000",
      fontSize:".90em",
      fontFamily:"Josefin Sans",
      fontStyle:"light",
      fontWeight:"300",
      textAlign:"right",
      textTransform:"uppercase",
      letterSpacing:"2px",
    }
    const logoStyle={
      marginTop:"10px",
      height:"80px",
      width:"auto"
    }
    const headStyle={
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-between"
    }
    const mottoStyle={
      color:"#191919",
      fontSize:"1.10em",
      fontFamily:"Open Sans",
      fontWeight:"700",
      textAlign:"center",
      marginTop:"30px",
      letterSpacing:"2px"
    }
    return (
      <div>
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>
        <header>
          <div style={headStyle}>
            <img style={logoStyle} src="http://h4z.it/Image/f02f70_llustration3.png"/>
            <nav style={navStyle}>

              <Link to="/" style={{
                display:"flex",
                flexDirection:"row",
                paddingRight:"10px",
                textDecoration:"none",
                color:"#000000",
                fontSize:".75em",
                fontFamily:"Josefin Sans",
                fontStyle:"light",
                fontWeight:"300",
                textAlign:"right",
                textTransform:"uppercase",
                letterSpacing:"2px",
                  textDecoration:'none'}}>
                  Main
              </Link>
              <Link to="/Photography" style={{
                display:"flex",
                flexDirection:"row",
                paddingRight:"10px",
                textDecoration:"none",
                color:"#000000",
                fontSize:".75em",
                fontFamily:"Josefin Sans",
                fontStyle:"light",
                fontWeight:"300",
                textAlign:"right",
                textTransform:"uppercase",
                letterSpacing:"2px",
                  textDecoration:'none'}}>
                  Photography
              </Link>
              <Link to="/Design" style={{
                display:"flex",
                flexDirection:"row",
                paddingRight:"10px",
                textDecoration:"none",
                color:"#000000",
                fontSize:".75em",
                fontFamily:"Josefin Sans",
                fontStyle:"light",
                fontWeight:"300",
                textAlign:"right",
                textTransform:"uppercase",
                letterSpacing:"2px",
                textDecoration:'none'}}>
                  Design
              </Link>
              <Link to="/Art" style={{
                display:"flex",
                flexDirection:"row",
                paddingRight:"10px",
                textDecoration:"none",
                color:"#000000",
                fontSize:".75em",
                fontFamily:"Josefin Sans",
                fontStyle:"light",
                fontWeight:"300",
                textAlign:"right",
                textTransform:"uppercase",
                letterSpacing:"2px",
                textDecoration:'none'}}>
                  Art
              </Link>
              <Link to="/Development" style={{
                display:"flex",
                flexDirection:"row",
                paddingRight:"10px",
                textDecoration:"none",
                color:"#000000",
                fontSize:".75em",
                fontFamily:"Josefin Sans",
                fontStyle:"light",
                fontWeight:"300",
                textAlign:"right",
                textTransform:"uppercase",
                letterSpacing:"2px",
                textDecoration:'none'}}>
                  Devolopment
              </Link>
              </nav>
          </div>
        </header>
        <main style={mainStyle}>
          <div style={divStyle}>
            <div style={titleStyle}> Photography </div>
          </div>
          <div style={divStyle2}>

                  <h1 style={headerStyle}>
                    Designer | Artist | Photographer | Developer
                  </h1>
              <div style={bodyStyle}>
                <p style={bodyStyle}> I am an Augutsa based designer with over 18 years of professional experience in the creative industry. </p>
                <p style={bodyStyle}> I focus on creating solutions for my clients. </p>
            </div>
            <div style={mottoStyle}>
              <p style={mottoStyle}> Design good. </p>
            </div>
          </div>
          <div style={divStyle3}>
            <div style={titleStyle}> design </div>
          </div>

          <div style={divStyle4}></div>
          <div style={divStyle5}>
            <div style={titleStyle}> art </div>
          </div>
          <div style={divStyle6}>
            <img src="http://h4z.it/Thumb/cd1a22_55978b6f8rev.jpg"/>
            <img src="http://h4z.it/Image/f3a635_af8af957crev.jpg"/>
            <img src="http://h4z.it/Image/97e5d0_bb2729ac4rev.jpg"/>



          </div>
          <div style={divStyle7}>
            <div style={titleStyle}> Development </div>
          </div>
          <div style={divStyle8}>
            <div style={bodyStyle}>
              <p style={bodyStyle}> With Full Stack Development skills, knowledge of both front and back end development are at my client's disposal. </p>
              <p style={bodyStyle}> HTML | Cascading Style Sheets (CSS) | Javascript | </p>
              <p style={bodyStyle}> PHP | MySQL / MariaDB | Linux (Ubuntu and Cloud Hosting) </p>
            </div>
            <div style={mottoStyle}>
              <p style={mottoStyle}> Design good. </p>
            </div>
          </div>
          <div style={divStyle9}></div>
        </main>
        <footer>

          <div>
           <nav style={navStyle}>

            <Link to="/" style={{
              display:"flex",
              flexDirection:"row",
              paddingRight:"10px",
              textDecoration:"none",
              color:"#000000",
              fontSize:".75em",
              fontFamily:"Josefin Sans",
              fontStyle:"light",
              fontWeight:"300",
              textAlign:"right",
              textTransform:"uppercase",
              letterSpacing:"2px",
                textDecoration:'none'}}>
                Main
            </Link>
            <Link to="/Photography" style={{
              display:"flex",
              flexDirection:"row",
              paddingRight:"10px",
              textDecoration:"none",
              color:"#000000",
              fontSize:".75em",
              fontFamily:"Josefin Sans",
              fontStyle:"light",
              fontWeight:"300",
              textAlign:"right",
              textTransform:"uppercase",
              letterSpacing:"2px",
                textDecoration:'none'}}>
                Photography
            </Link>
            <Link to="/Design" style={{
              display:"flex",
              flexDirection:"row",
              paddingRight:"10px",
              textDecoration:"none",
              color:"#000000",
              fontSize:".75em",
              fontFamily:"Josefin Sans",
              fontStyle:"light",
              fontWeight:"300",
              textAlign:"right",
              textTransform:"uppercase",
              letterSpacing:"2px",
              textDecoration:'none'}}>
                Design
            </Link>
            <Link to="/Art" style={{
              display:"flex",
              flexDirection:"row",
              paddingRight:"10px",
              textDecoration:"none",
              color:"#000000",
              fontSize:".75em",
              fontFamily:"Josefin Sans",
              fontStyle:"light",
              fontWeight:"300",
              textAlign:"right",
              textTransform:"uppercase",
              letterSpacing:"2px",
              textDecoration:'none'}}>
                Art
            </Link>
            <Link to="/Development" style={{
              display:"flex",
              flexDirection:"row",
              paddingRight:"10px",
              textDecoration:"none",
              color:"#000000",
              fontSize:".75em",
              fontFamily:"Josefin Sans",
              fontStyle:"light",
              fontWeight:"300",
              textAlign:"right",
              textTransform:"uppercase",
              letterSpacing:"2px",
              textDecoration:'none'}}>
                Devolopment
            </Link>
            </nav>
        </div>

        </footer>

      </div>
    );
  }
}
