/**
*
* NavBar
*
*/

import React from 'react';
import {Link} from "react-router";
import Responsive from 'react-responsive';
import MenuIcon from "material-ui/svg-icons/navigation/menu";
import IconButton from 'material-ui/IconButton';

class NavBar extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      menuOpen:false,
    }
  }

  handleMenu = () => {
    if(this.state.menuOpen == false)
    {
      this.setState({
        menuOpen:true
      })
    }
    else if(this.state.menuOpen == true)
    {
      this.setState({
        menuOpen:false
      })
    }
  }

  showMenu = () => {

          const nav={
                    display:"flex",
                    flexDirection:"column",
                    alignSelf:'center'
                    }

    const linkStyle={
                     textDecoration:"none",
                     color:"#000000",
                     fontSize:"2em",
                     fontFamily:"Josefin Sans",
                     fontStyle:"light",
                     fontWeight:"300",
                     textAlign:"center"
                    };

    if(this.state.menuOpen == true)
    {
      return(
        <nav style={nav}>
          <Link style={linkStyle} to= "/"> Home </Link>
          <Link to="/" style={linkStyle}>Photography</Link>
          <Link onTouchTap={()=>this.handleScroll(1000)} style={linkStyle}>Design</Link>
          <Link onTouchTap={()=>this.handleScroll(3700)} style={linkStyle}>Art</Link>
          <Link onTouchTap={()=>this.handleScroll(6700)}
          style={linkStyle}>Development</Link>
          <Link style={linkStyle} to= "/Blog"> Blog </Link>
          <Link style={linkStyle} to= "/Contact"> Contact </Link>
          <Link style={linkStyle} to= "/Dashboard"> Dashboard </Link>
        </nav>
      )
    }
  }
  activeMenu = () => {
    const navStyle={
                     margin:"0",
                     padding:"10px",
                     width:"100%",
                     fontSize:"2em",
                     fontFamily:"Josefin Sans",
                     fontStyle:"light",
                     fontWeight:"300",
                     borderTop:"2px solid #000000",
                     borderBottom:"1px solid #000000",
                     textAlign:"center",
                     }
    const linkStyle={
                     textDecoration:"none",
                     color:"#000000",
                     fontSize:"2em",
                     fontFamily:"Josefin Sans",
                     fontStyle:"light",
                     fontWeight:"300",
                     textAlign:"center"
                     }
    const activeStyle={
                      color:"#000000",
                      fontSize:"2em",
                      fontFamily:"Josefin Sans",
                      fontStyle:"light",
                      fontWeight:"300",
                      textAlign:"center",
                      textDecoration:"none"

  }
    if(this.props.page == "Home"){
      return(
        <nav style={navStyle}>
          <Link style={linkStyle} to= "/"> Home </Link>
          <Link to="/" style={linkStyle}>Photography</Link>
          <Link onTouchTap={()=>this.handleScroll(1000)} style={linkStyle}>Design</Link>
          <Link onTouchTap={()=>this.handleScroll(3700)} style={linkStyle}>Art</Link>
          <Link onTouchTap={()=>this.handleScroll(6700)}
          style={linkStyle}>Development</Link>
          <Link style={linkStyle} to= "/Blog"> Blog </Link>
          <Link style={linkStyle} to= "/Contact"> Contact </Link>
          <Link style={linkStyle} to= "/Dashboard"> Dashboard </Link>
        </nav>
      )
    }
    else if (this.props.page == "Photography") {
     return(
       <nav style={navStyle}>
         <Link style={linkStyle} to= "/"> Home </Link>
         <Link to="/" style={linkStyle}>Photography</Link>
         <Link onTouchTap={()=>this.handleScroll(1000)} style={linkStyle}>Design</Link>
         <Link onTouchTap={()=>this.handleScroll(3700)} style={linkStyle}>Art</Link>
         <Link onTouchTap={()=>this.handleScroll(6700)}
         style={linkStyle}>Development</Link>
         <Link style={linkStyle} to= "/Blog"> Blog </Link>
         <Link style={linkStyle} to= "/Contact"> Contact </Link>
         <Link style={linkStyle} to= "/Dashboard"> Dashboard </Link>
       </nav>
     )
     }
     else if (this.props.page == "Design") {
      return(
        <nav style={navStyle}>
          <Link style={linkStyle} to= "/"> Home </Link>
          <Link to="/" style={linkStyle}>Photography</Link>
          <Link onTouchTap={()=>this.handleScroll(1000)} style={linkStyle}>Design</Link>
          <Link onTouchTap={()=>this.handleScroll(3700)} style={linkStyle}>Art</Link>
          <Link onTouchTap={()=>this.handleScroll(6700)}
          style={linkStyle}>Development</Link>
          <Link style={linkStyle} to= "/Blog"> Blog </Link>
          <Link style={linkStyle} to= "/Contact"> Contact </Link>
          <Link style={linkStyle} to= "/Dashboard"> Dashboard </Link>
        </nav>
      )
      }
      else if (this.props.page == "Development") {
       return(
         <nav style={navStyle}>
           <Link style={linkStyle} to= "/"> Home </Link>
           <Link to="/" style={linkStyle}>Photography</Link>
           <Link onTouchTap={()=>this.handleScroll(1000)} style={linkStyle}>Design</Link>
           <Link onTouchTap={()=>this.handleScroll(3700)} style={linkStyle}>Art</Link>
           <Link onTouchTap={()=>this.handleScroll(6700)}
           style={linkStyle}>Development</Link>
           <Link style={linkStyle} to= "/Blog"> Blog </Link>
           <Link style={linkStyle} to= "/Contact"> Contact </Link>
           <Link style={linkStyle} to= "/Dashboard"> Dashboard </Link>
         </nav>
       )
     }
     else if (this.props.page == "blog") {
      return(
        <nav style={navStyle}>
          <Link style={linkStyle} to= "/"> Home </Link>
          <Link to="/" style={linkStyle}>Photography</Link>
          <Link onTouchTap={()=>this.handleScroll(1000)} style={linkStyle}>Design</Link>
          <Link onTouchTap={()=>this.handleScroll(3700)} style={linkStyle}>Art</Link>
          <Link onTouchTap={()=>this.handleScroll(6700)}
          style={linkStyle}>Development</Link>
          <Link style={linkStyle} to= "/Blog"> Blog </Link>
          <Link style={linkStyle} to= "/Contact"> Contact </Link>
          <Link style={linkStyle} to= "/Dashboard"> Dashboard </Link>
        </nav>
      )
    }
    else if (this.props.page == "Contact") {
     return(
       <nav style={navStyle}>
         <Link style={linkStyle} to= "/"> Home </Link>
         <Link to="/" style={linkStyle}>Photography</Link>
         <Link onTouchTap={()=>this.handleScroll(1000)} style={linkStyle}>Design</Link>
         <Link onTouchTap={()=>this.handleScroll(3700)} style={linkStyle}>Art</Link>
         <Link onTouchTap={()=>this.handleScroll(6700)}
         style={linkStyle}>Development</Link>
         <Link style={linkStyle} to= "/Blog"> Blog </Link>
         <Link style={linkStyle} to= "/Contact"> Contact </Link>
         <Link style={linkStyle} to= "/Dashboard"> Dashboard </Link>
       </nav>
     )
    }
    else if (this.props.page == "Dashboard") {
     return(
       <nav style={navStyle}>
         <Link style={linkStyle} to= "/"> Home </Link>
         <Link to="/" style={linkStyle}>Photography</Link>
         <Link onTouchTap={()=>this.handleScroll(1000)} style={linkStyle}>Design</Link>
         <Link onTouchTap={()=>this.handleScroll(3700)} style={linkStyle}>Art</Link>
         <Link onTouchTap={()=>this.handleScroll(6700)}
         style={linkStyle}>Development</Link>
         <Link style={linkStyle} to= "/Blog"> Blog </Link>
         <Link style={linkStyle} to= "/Contact"> Contact </Link>
         <Link style={linkStyle} to= "/Dashboard"> Dashboard </Link>
       </nav>
     )
    }
  }

  handleScroll = (num) => {
    window.scroll(0,num);
  }
  render() {
    const navStyle={
                     margin:"0",
                     padding:"10px",
                     width:"100%",
                     fontSize:"2em",
                     fontFamily:"Josefin Sans",
                     fontStyle:"light",
                     fontWeight:"300",
                     borderTop:"2px solid #000000",
                     borderBottom:"1px solid #000000",
                     textAlign:"center",
                     }

    const navStyle2={
      display:"flex",
      flexDirection:"row",
      justifyContent:"center",
      height:"100px",
      alignItems:"center",
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
      flexDirection:"column",
      justifyContent:"center"
    }
    const logoStyle={
      margin:"0 auto",
      marginTop:"20px",
      height:"auto",
      width:"150px"
    }
    const linkStyle2={
      display:"flex",
      flexDirection:"row",
      paddingRight:"30px",
      textDecoration:"none",
      color:"#000000",
      fontSize:"1em",
      fontFamily:"Josefin Sans",
      fontStyle:"light",
      fontWeight:"300",
      textAlign:"right",
      textTransform:"uppercase",
      letterSpacing:"2px",
    }
      const divStyle2Mobile={
        width:"100%",
        height:"auto",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center center",



    }
    return (
      <div style={divStyle2Mobile}>
        <Responsive minDeviceWidth={1024}>
          <div style={headStyle}>
            <img style={logoStyle} src="http://h4z.it/Image/f02f70_llustration3.png"/>
            <nav style={navStyle2}>
              <Link to="/" style={linkStyle2}>
                  Photography
              </Link>
              <Link onTouchTap={()=>this.handleScroll(1000)} style={linkStyle2}>
                  Design
              </Link>
              <Link onTouchTap={()=>this.handleScroll(2100)} style={linkStyle2}>
                  Art
              </Link>
              <Link onTouchTap={()=>this.handleScroll(3250)} style={linkStyle2}>
                  Development
              </Link>
              <Link to="/Blog" style={linkStyle2}>
                  Blog
              </Link>
              <Link to="/Contact" style={linkStyle2}>
                  Contact
              </Link>
              <Link to="/Dashboard" style={linkStyle2}>
                  Dashboard
              </Link>

            </nav>
          </div>
        </Responsive>

        <Responsive maxDeviceWidth={1023}>
          <div style={headStyle}>
            <img style={logoStyle} src="http://h4z.it/Image/f02f70_llustration3.png"/>
          <nav style={navStyle2}>
            <IconButton onTouchTap={this.handleMenu}> <MenuIcon/> </IconButton>
          </nav>
          {this.showMenu()}
        </div>
        </Responsive>
      </div>
    );
  }
}

export default NavBar;
