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

          <div style={divStyle2}></div>


      </div>

          );
        }
      }
