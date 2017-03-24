/**
*
* NavBar
*
*/

import React from 'react';
import {Link} from "react-router";

class NavBar extends React.PureComponent {
  render() {
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
    const headStyle={
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-between"
    }
    const logoStyle={
      marginTop:"10px",
      height:"80px",
      width:"auto"
    }
    return (

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
              Development
          </Link>
          <Link to="/Contact" style={{
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
              Contact
          </Link>
          <Link to="/Blog" style={{
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
              Blog
          </Link>
          </nav>
      </div>
    );
  }
}

export default NavBar;
