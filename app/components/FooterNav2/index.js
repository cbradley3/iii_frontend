/**
*
* FooterNav2
*
*/

import React from 'react';
import {Link} from "react-router";
import Responsive from 'react-responsive';

class FooterNav2 extends React.PureComponent {
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
    const linkStyle={
      display:"flex",
      flexDirection:"column",
      textDecoration:"none",
      color:"#000000",
      fontSize:".75em",
      fontFamily:"Josefin Sans",
      fontStyle:"light",
      fontWeight:"400",
      textAlign:"center",
      textTransform:"uppercase",
      letterSpacing:"2px",
      }
      const BodyStyle={
        color:"#ffffff",
        fontSize:"1em",
        fontFamily:"Open Sans",
        fontWeight:"400",
        textAlign:"center",
      }
      const footerStyleMobile={
        display:"flex",
        flexDirection:"column",
        textDecoration:"none",
        color:"#000000",
        fontSize:"1em",
        fontFamily:"Josefin Sans",
        fontStyle:"light",
        fontWeight:"500",
        textAlign:"center",
        textTransform:"uppercase",
        letterSpacing:"2px",
      }
      const headStyleMobile={
        display:"flex",
        marginTop:"20px",
        flexDirection:"column",
        alignItems:"center",
      }
    return (
<div>
    <Responsive minDeviceWidth={1024}>
      <div>
        <nav style={footerStyle}>
          <Link to="/" style={linkStyle}>
              Main
          </Link>
          <Link to="/Blog" style={linkStyle}>
              Blog
          </Link>
          <Link to="/Contact" style={linkStyle}>
              Contact
          </Link>
        </nav>
      </div>
    </Responsive>

      <Responsive maxDeviceWidth={1023}>
        <div style={headStyleMobile}>
          <nav style={footerStyleMobile}>
            <Link to="/" style={linkStyle}>
                Main
            </Link>
            <Link to="/Blog" style={linkStyle}>
                Blog
            </Link>
            <Link to="/Contact" style={linkStyle}>
                Contact
            </Link>
          </nav>
        </div>
      </Responsive>
</div>
    );
  }
}

export default FooterNav2;
