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
import NavBar2 from 'components/NavBar2';
import FooterNav2 from 'components/FooterNav2';
import Parallax from 'react-simple-parallax';

export default class Contact extends React.PureComponent {

  constructor(props){
    super(props);
    this.state={
      name:"",
      email:"",
      number:"",
      website:"",
      message:"",
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
  handleNumber = (event) => {
    this.setState({
      number: event.target.value
    })
  }
  handleWebsite = (event) => {
    this.setState({
      website:event.target.value
    })
  }
handleMessage = (event) => {
  this.setState({
    message: event.target.value
  })
}


    storeContact = () => {

      var data = new FormData ();
      data.append("name", this.state.name);
      data.append("email", this.state.email);
      data.append("number", this.state.number);
      data.append("website", this.state.website);
      data.append("message", this.state.message);

    fetch("http://localhost:8000/api/storeContact",{
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
        fontSize:"4em",
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
      display:"flex",
      flexDirection:"column",
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
    const inputBoxMobile={
      color:"#191919",
      fontSize:"1em",
      fontFamily:"Open Sans",
      fontWeight:"400",
      textAlign:"left",
      width:"285px",
      height:"40px",
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
      width:"692px",
      height:"200px",
      marginTop:"10px",
      marginBottom:"30px",
      marginRight:"30px",
      background:"#ffffff"
    }
    const inputBox2Mobile={
      color:"#191919",
      fontSize:"1em",
      fontFamily:"Open Sans",
      fontWeight:"400",
      textAlign:"left",
      width:"285px",
      height:"285px",
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
      marginTop:"210px",
      background:"rgba(0, 0, 0, 1.00)",
      border:"1px solid #ffffff",
    }
    const inputBox3Mobile={
      color:"#ffffff",
      fontSize:"1em",
      fontFamily:"Open Sans",
      fontWeight:"400",
      textAlign:"center",
      width:"100px",
      height:"50px",
      marginTop:"15px",
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
    const divStyle5Mobile={
      width:"100%",
      height:"75px",
      marginTop:"37px",
      background:"rgba(0, 0, 0, 1.00)",
      color:"#ffffff"
    }
    const contactLeft={
      width:"30%",
      display:"flex",
      flexDirection:"column",
      paddingLeft:"5%",
      paddingTop:"8%"
    }
    const contactLeftMobile={
      display:"flex",
      flexDirection:"column",
      paddingLeft:"5%",
      paddingTop:"8%"

    }
    const contactRight={
      width:"70%",
      display:"flex",
      flexDirection:"column",
      paddingLeft:"17%",
      paddingTop:"5%"

    }
    const contactRow={
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-around",
      padding:"50px 10px 0px 0px"
    }
    const contactRowMobile={
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-around",
      paddingTop:"5px",
      margin:"0 auto",
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

                <NavBar2/>

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

            <Responsive minDeviceWidth={1024}>
              <div style={divStyle3}> </div>
            </Responsive>

        <Responsive minDeviceWidth={1024}>
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
                  <input onTouchTap = {this.storeContact} type="submit" placeholder="Send Message" style={inputBox3}/>
              </div>

              <div style={contactRight}>
                <div style={contactRow}>
                  <label style={bodyStyle}>Name <input onChange = {this.handleName} type="text" style={inputBox}/> </label>

                  <label style={bodyStyle}>Email <input onChange = {this.handleEmail} type="email" style={inputBox}/> </label>
                </div>
                <div style={contactRow}>
                  <label style={bodyStyle}>Phone Number <input onChange = {this.handleNumber} type="number" style={inputBox}/> </label>

                  <label style={bodyStyle}>Your Website <input onChange = {this.handleWebsite} type="url" style={inputBox}/> </label>
                </div>
                <div style={contactRow}>
                  <label style={bodyStyle}>Your Message <textarea onChange = {this.handleMessage} type="text" style={inputBox2}></textarea> </label>
                </div>
              </div>
            </div>
          </div>
        </Responsive>

        <Responsive maxDeviceWidth={1023}>
          <div style={divStyle4}>
            <div style={contactLeftMobile}>
              <p style={bodyStyle}> <h1 style={headerStyle}>
                Let's Work Together </h1>
               If you have any questions please use the contact form or choose a method below. </p>
                <p style={bodyStyle}> <h1 style={headerStyle}>
                Email: </h1> third.designs@gmail.com </p>
                <p style={bodyStyle}> <h1 style={headerStyle}>
                Phone: </h1> 706-840-1775 </p>
                <p style={bodyStyle}> <h1 style={headerStyle}>
                Twitter: </h1>  @the_III_ </p>
            </div>
          </div>
          <div style={contactLeftMobile}>
            <div style={contactRowMobile}>
              <label style={bodyStyle}>Name <input onChange = {this.handleName} type="text" style={inputBoxMobile}/> </label>
              </div>
              <div style={contactRowMobile}>
              <label style={bodyStyle}>Email <input onChange = {this.handleEmail} type="email" style={inputBoxMobile}/> </label>
            </div>
            <div style={contactRowMobile}>
              <label style={bodyStyle}>Phone Number <input onChange = {this.handleNumber} type="number" style={inputBoxMobile}/> </label>
              </div>
              <div style={contactRowMobile}>
              <label style={bodyStyle}>Your Website <input onChange = {this.handleWebsite} type="url" style={inputBoxMobile}/> </label>
            </div>
            <div style={contactRowMobile}>
              <label style={bodyStyle}>Your Message <textarea onChange = {this.handleMessage} type="text" style={inputBox2Mobile}></textarea> </label>
            </div>
              <input onTouchTap = {this.storeContact} type="submit" placeholder="Send Message" style={inputBox3Mobile}/>
          </div>


        </Responsive>

        <Responsive minDeviceWidth={1024}>
          <div style={divStyle5}>
          <p style={mottoStyle}> Design good. </p>
          </div>
        </Responsive>

        <Responsive maxDeviceWidth={1023}>
        <div style={divStyle5Mobile}>
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
