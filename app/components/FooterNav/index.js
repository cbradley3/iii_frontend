/**
*
* FooterNav
*
*/

import React from 'react';
import {Link} from "react-router";

class FooterNav extends React.PureComponent {
  render() {
    const footerStyle={
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-around",
      backgroundColor:"rgba(0, 0, 0, 0.10)",
      height:"100px",
      alignItems:"center",
      paddingRight:"10px",
      textDecoration:"none",
      color:"#000000",
      fontSize:"1.10em",
      fontFamily:"Josefin Sans",
      fontStyle:"light",
      fontWeight:"300",
      textAlign:"right",
      textTransform:"uppercase",
      letterSpacing:"2px",
    }

    return (
      <div>
       <nav style={footerStyle}>

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
            contact
        </Link>
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

export default FooterNav;
