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
import NavBar from 'components/NavBar';
import FooterNav from 'components/FooterNav';
import Parallax from 'react-simple-parallax';

export default class Contact extends React.PureComponent {

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
      marginTop:"100px"
    }
    const reactSimpleParallaxBg={
        background:"url(http://h4z.it/Image/b72c1a_SC_0266bwrev.jpg)",
        width:"100%",
        height:"620px",
        backgroundSize:"cover",
        backgroundPosition:"center center"
    }
    const parallax={
        top:"400px",
        margin:"auto",
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
      margin:"40px",
      background:"rgba(0, 0, 0, 1.00)",
      border:"1px solid #ffffff",
    }
    const divStyle4={
      width:"100%",
      height:"1300px",
      background:"rgba(0, 0, 0, 1.00)"
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

    return (
      <div>
        <Helmet title="Contact" meta={[ { name: 'description', content: 'Description of Contact' }]}/>

          <header>
            <Responsive minDeviceWidth={1024}>
              <NavBar/>
            </Responsive>
          </header>

          <div>
              <div style={divStyle}>
                  <Parallax style={box} className="parallax" speedDivider="2" backgroundStyle={reactSimpleParallaxBg}>
                    Contact
                  </Parallax>
              </div>
          </div>

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

                <input type="submit" placeholder="Send Message" style={inputBox3}/>
              </div>

              <div style={contactRight}>
                <div style={contactRow}>
                  <label style={bodyStyle}>Name <input type="text" style={inputBox}/> </label>

                  <label style={bodyStyle}>Email <input type="email" style={inputBox}/> </label>
                  </div>
                <div style={contactRow}>
                  <label style={bodyStyle}>Phone Number <input type="number" style={inputBox}/> </label>

                  <label style={bodyStyle}>Your Website <input type="url" style={inputBox}/> </label>
                  </div>
                <div style={contactRow}>
                  <label style={bodyStyle}>Your Message <textarea type="text" style={inputBox2}></textarea> </label>
                </div>




            </div>
          </div>
          



          </div>

      </div>

          );
        }
      }
