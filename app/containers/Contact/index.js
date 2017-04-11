/*
 *
 * Contact
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import Responsive from 'react-responsive';
import {Link} from "react-router";
import FlatButton from "material-ui/FlatButton";
import NavBar from 'components/NavBar2';
import FooterNav2 from 'components/FooterNav2';
import Parallax from 'react-simple-parallax';

export default class Contact extends React.PureComponent {

  constructor(props){
    super(props);
    this.state={
      name:"",
      email:"",
      phoneNumber:"",
      yourWebsite:"",
      yourMessage:"",
    }
  }
  handleName = (event) => {
    this.setState({
      name: event.target.value
    })
  }
  handleEmail = (event) => {
    this.setState({
      email:event.target.value
    })
  }
  handlePhoneNumer = (event) => {
    this.setState({
      phoneNumber: event.target.value
    })
  }
  handleYourWebsite = (event) => {
    this.setState({
      yourWebsite:event.target.value
    })
  }
handleYourMessage = (event) => {
  this.setState({
    yourMessage: event.target.value
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
      data.append("name", this.state.name);
      data.append("email", this.state.email);
      data.append("phoneNumber", this.state.phoneNumber);
      data.append("yourWebsite", this.state.yourWebsite);
      data.append("yourMessage", this.state.yourMessage);

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
        background:"url(http://h4z.it/Image/b72c1a_SC_0266bwrev.jpg)",
        backgroundSize:"cover",
        backgroundAttachment:"fixed",
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat",
      }
        const divStyleMobileParallax={
          width:"100%",
          height:"500px",
          background:"url(http://h4z.it/Image/b72c1a_SC_0266bwrev.jpg)",
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
    }
    const divStyle3={
      width:"100%",
      height:"100px",
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
      margin:"40px",
      background:"rgba(0, 0, 0, 1.00)",
      border:"1px solid #ffffff",
    }
    const divStyle4={
      width:"100%",
      background:"rgba(0, 0, 0, 1.00)"
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
      paddingLeft:"10%",
      paddingTop:"7%"

    }
    const contactRight={
      width:"70%",
      display:"flex",
      flexDirection:"column",
      paddingLeft:"25%",
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
      letterSpacing:"2px"
    }
    const mottoStyleMobile={
        color:"#ffffff",
        fontSize:".90em",
        fontFamily:"Open Sans",
        fontWeight:"700",
        textAlign:"center",
        textTransform:"uppercase",
        marginTop:"30px",
        letterSpacing:"2px"
      }
    return (
      <div>
        <Helmet title="Contact" meta={[ { name: 'description', content: 'Description of Contact' }]}/>

          <header>
            <Responsive minDeviceWidth={1024}>
              <NavBar/>
            </Responsive>
          </header>

          <main style={mainStyle}>


            <Responsive minDeviceWidth={1024}>
              <div style={divStyleParallax}>
                <div style={titleStyle}> Contact </div>
              </div>
            </Responsive>

            <Responsive maxDeviceWidth={1023}>
              <div style={divStyleMobileParallax}>
                <div style={titleStyleMobile}> Contact </div>
              </div>
            </Responsive>


          <div style={divStyle3}> </div>

          <div style={divStyle4}>

            <div style={box2}>

              <div style={contactLeft}>
                <p style={bodyStyle}> <h1 style={headerStyle}>
                  Let's Work Together </h1>
                 If you have any questions please use the contact form or choose a method below. </p>
                  <p style={bodyStyle}> <h1 style={headerStyle}>
                  Email: </h1> third.designs@gmail.com </p>
                  <p style={bodyStyle}> <h1 style={headerStyle}>
                  Phone: </h1> 706-840-1775 </p>
                  <p style={bodyStyle}> <h1 style={headerStyle}>
                  Twitter: </h1>  @the_III_ </p>

                <input onTouchTap = {this.storeArticle} type="submit" placeholder="Send Message" style={inputBox3}/>
              </div>

              <div style={contactRight}>
                <div style={contactRow}>
                  <label style={bodyStyle}>Name <input onChange = {this.handleName} type="text" style={inputBox}/> </label>

                  <label style={bodyStyle}>Email <input onChange = {this.handleEmail} type="email" style={inputBox}/> </label>
                  </div>
                <div style={contactRow}>
                  <label style={bodyStyle}>Phone Number <input onChange = {this.handlePhoneNumber} type="number" style={inputBox}/> </label>

                  <label style={bodyStyle}>Your Website <input onChange = {this.handleYourWebsite} type="url" style={inputBox}/> </label>
                  </div>
                <div style={contactRow}>
                  <label style={bodyStyle}>Your Message <textarea onChange = {this.handleYourMessage} type="text" style={inputBox2}></textarea> </label>
                </div>




            </div>

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
                </nav>
            </div>
          </Responsive>

        </footer>


      </div>

          );
        }
      }
