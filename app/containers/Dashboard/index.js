/*
 *
 * Dashboard
 *
 */

 import React from 'react';
 import Helmet from 'react-helmet';
 import Responsive from 'react-responsive';
 import {Link} from "react-router";
 import FlatButton from "material-ui/FlatButton";
 import NavBar from 'components/NavBar2';
 import FooterNav2 from 'components/FooterNav2';

export default class Dashboard extends React.PureComponent {
  constructor(props){
  super(props);
  this.state={
    title:"",
    body:"",
    image:"",
    preview:"",
  }
}
handleTitle = (event) => {
  this.setState({
    title: event.target.value
  })
}
handleBody = (event) => {
  this.setState({
    body:event.target.value
  })
}
handleImage = (event) => {
  event.preventDefault();
  let reader = new FileReader();
  let file = event.target.files[0];
  reader.onloadend = () => {
    this.setState({
      image: file,
      preview: reader.result
    })
  }
  reader.readAsDataURL(file);
}

 storeArticle = () => {

   var data = new FormData ();
   data.append("title", this.state.title);
   data.append("body", this.state.body);
   data.append("image", this.state.image);

 fetch("http://localhost:8000/api/storeArticle",{
   method:"post",
   body:data
 })
 .then(function(response){
   return response.json();
 })
 .then(function(json){
   if(json.success){
     alert("Success");
   }
   else if (json.error){
     aler("Error");
   }
 })
}
  render() {
    const divStyle={
      textAlign:"center",
    }
    const titleStyle={
      color:"#eeeeee",
      fontSize:"6em",
      fontFamily:"Quicksand",
      fontWeight:"300",
      textTransform:"uppercase",
      letterSpacing:"6px",
      textAlign:"center",
      marginTop:"280px"
    }
    const titleStyleMobile={
      color:"#eeeeee",
      fontSize:"2em",
      fontFamily:"Quicksand",
      fontWeight:"400",
      textTransform:"uppercase",
      letterSpacing:"6px",
      textAlign:"center",
      marginTop:"225px"
    }
    const divStyleParallax={
      width:"100%",
      height:"600px",
      background:"url(http://h4z.it/Image/73803a_SC_0785bwrev.jpg)",
      backgroundSize:"cover",
      backgroundAttachment:"fixed",
      backgroundPosition:"center",
      backgroundRepeat:"no-repeat",
    }
      const divStyleMobileParallax={
        width:"100%",
        height:"500px",
        background:"url(http://h4z.it/Image/73803a_SC_0785bwrev.jpg)",
        backgroundSize:"cover",
        backgroundAttachment:"fixed",
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat",
    }
    const box={
        top:"600px",
        margin:"auto",
        color:"#eeeeee",
        fontSize:"6em",
        fontFamily:"Quicksand",
        fontWeight:"300",
        textTransform:"uppercase",
        letterSpacing:"6px",
        textAlign:"center",
        height:"300px",
        width:"100%",
    }
    const divStyle2={
      width:"100%",
      height:"1500px",
      background:"rgba(0, 0, 0, 1.00)"

    }
    const bodyStyle={
      color:"#ffffff",
      fontSize:"1em",
      fontFamily:"Open Sans",
      fontWeight:"400",
      textAlign:"left",
      display:"flex",
      flexDirection:"column",
    }
    const divStyle3={
      width:"100%",
      height:"650px",
      background:"rgba(0, 0, 0, 1.00)"
    }
    const box2={
      width:"1500px",
      height:"800px",
      border:"2px solid #ffffff",
      margin:"0 auto",
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-around",

    }
    const inputBox={
      color:"#191919",
      fontSize:"1em",
      fontFamily:"Open Sans",
      fontWeight:"400",
      textAlign:"left",
      width:"300px",
      height:"50px",
      marginTop:"10px",
      marginBottom:"30px",
      marginRight:"30px",
      background:"#ffffff"

    }
    const inputBox2={
      color:"#191919",
      fontSize:"1em",
      fontFamily:"Open Sans",
      fontWeight:"400",
      textAlign:"left",
      width:"625px",
      height:"200",
      marginTop:"10px",
      marginBottom:"30px",
      marginRight:"30px",
      background:"#ffffff"
    }
    const inputBox3={
      color:"#ffffff",
      fontSize:"1em",
      fontFamily:"Open Sans",
      fontWeight:"400",
      textAlign:"center",
      width:"100px",
      height:"50px",
      marginTop:"40px",
      marginBottom:"100px",
      background:"rgba(0, 0, 0, 1.00)",
      border:"1px solid #ffffff",
    }
    const divStyle4={
      width:"100%",
      height:"auto",
      background:"rgba(0, 0, 0, 1.00)",
      color:"#ffffff"

    }
    const divStyle5={
      width:"100%",
      height:"150px",
      marginTop:"75px",
      background:"rgba(0, 0, 0, 1.00)",
      color:"#ffffff"
    }
    const contactLeft={
      width:"30%",
      display:"flex",
      flexDirection:"column",
      paddingLeft:"1%",
      paddingTop:"4%"

    }
    const contactRight={
      width:"70%",
      display:"flex",
      flexDirection:"column",
      paddingLeft:"1%",
      paddingTop:"5%"

    }
    const contactRow={
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-around",
      padding:"50px 150px 0px 0px"
    }
    const headerStyle={
      color:"#ffffff",
      fontSize:"1.20em",
      fontFamily:"Open Sans",
      fontWeight:"600",
      textTransform:"uppercase",
  }
  const mainStyle={
    display:"flex",
    flexDirection:"column",
    background:"rgba(0, 0, 0, 1.00)",
    }
    const mainStyleMobile={
      display:"flex",
      flexDirection:"column",
      color:"#191919",

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
    const mottoStyle={
      color:"ffffff",
      fontSize:"1.20em",
      fontFamily:"Open Sans",
      fontWeight:"700",
      textAlign:"center",
      textTransform:"uppercase",
      letterSpacing:"2px",
      background:"rgba(0, 0, 0, 1.00)",
    }
    const mottoStyleMobile={
        color:"#ffffff",
        fontSize:".90em",
        fontFamily:"Open Sans",
        fontWeight:"700",
        textAlign:"center",
        textTransform:"uppercase",
        marginTop:"30px",
        letterSpacing:"2px",
        background:"rgba(0, 0, 0, 1.00)",
     }
     const pageLinks = [];

     const preview = {};




    return (
      <div>
        <Helmet title="Dashboard" meta={[ { name: 'description', content: 'Description of Dashboard' }]}/>

          <header>
            <Responsive minDeviceWidth={1024}>
              <NavBar/>
            </Responsive>
          </header>

          <main style={mainStyle}>


            <Responsive minDeviceWidth={1024}>
              <div style={divStyleParallax}>
                <div style={titleStyle}> Dashboard </div>
              </div>
            </Responsive>

            <Responsive maxDeviceWidth={1023}>
              <div style={divStyleMobileParallax}>
                <div style={titleStyleMobile}> Blog </div>
              </div>
            </Responsive>

          <div style={divStyle4}>

            <div style={contactRight}>
            <div style={contactLeft}>
              <label style={bodyStyle}> Title <input value={this.state.title} onChange = {this.handleTitle} type="text" style={inputBox}/> </label>
            </div>

            <div style={contactLeft}>
              <label style={bodyStyle}> Body <textarea value={this.state.body} onChange = {this.handleBody} type="text" style={inputBox2}></textarea> </label>
            </div>

            <div style={contactLeft}>
            <input onTouchTap = {this.storeArticle} type="submit" placeholder="Send Message" style={inputBox3}/>
            </div>

            <input type="file" onChange={this.handleImage}input style={bodyStyle}/>

            <img style={preview} src={this.state.preview}/>
            </div>

          </div>

        <Responsive minDeviceWidth={1024}>
          <div style={divStyle5}>
          <p style={mottoStyle}> Design good. </p>
          </div>
        </Responsive>

        <Responsive maxDeviceWidth={1023}>
        <div>
          <p style={mottoStyleMobile}> Design good. </p>
        </div>
        </Responsive>

        </main>

        <footer>

            <Responsive minDeviceWidth={1024}>
              <FooterNav2/>
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
                <Link to="/Dashboard" style={linkStyle}>
                    Dashboard
                </Link>
                </nav>
            </div>
          </Responsive>

        </footer>


      </div>

          );
        }
      }
