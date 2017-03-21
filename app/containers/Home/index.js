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
      height:"500px",
      background:"url(http://h4z.it/Image/c98c04_DSC_0785rev.jpg)",
      backgroundSize:"cover"
    }
    const divStyle2={
      width:"100%",
      height:"225px",
      background:"rgba(255, 255, 255, 1.00)"
    }
    const divStyle3={
      width:"100%",
      height:"500px",
      background:"url(http://h4z.it/Image/35e950_DSC_0266rev.jpg)",
      backgroundSize:"cover"
    }
    const divStyle4={
      width:"100%",
      height:"500px",
      background:"rgba(63, 191, 127, 0.65)"
    }
    const divStyle5={
      width:"100%",
      height:"500px",
      background:"rgba(63, 191, 127, 0.75)"
    }
    const divStyle6={
      width:"100%",
      height:"500px",
      background:"rgba(63, 191, 127, 0.90)"
    }
    const divStyle7={
      width:"100%px",
      height:"500px",
      background:"rgba(63, 191, 127, 1.00)"
    }
    const mainStyle={
      display:"flex",
      flexDirection:"column",
      background:"rgba(255, 255, 255, 1.00)"
    }
    const titleStyle={
      color:"#eeeeee",
      fontSize:"5em",
      fontFamily:"Source Sans Pro",
      fontWeight:"lighter",
      textAlign:"center",
      marginTop:"160px"
    }
    const bodyStyle={
      color:"#191919",
      fontSize:"1em",
      fontWeight:"lighter",
      textAlign:"center",
      marginTop:"30px"
    }
    return (
      <div>
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>
        <header>
          <nav>
          <Link to="/"> Home </Link>
          <Link to="/About"> About </Link>
          </nav>
        </header>
        <main style={mainStyle}>

          <div style={divStyle}>
            <div style={titleStyle}> Photography </div>
          </div>
          <div style={divStyle2}>
              <div style={bodyStyle}> <h1> Designer | Artist | Photographer | Developer </h1>
                                      <p> I am an Augutsa based designer with over 18 years of professional experience in the creative industry. </p>
                                      <p> I focus on creating solutions for my clients. </p>
                                      <p> Design good. </p>
              </div>
          </div>
          <div style={divStyle3}></div>
          <div style={divStyle4}></div>
          <div style={divStyle5}></div>
          <div style={divStyle6}></div>
          <div style={divStyle7}></div>
        </main>
        <footer>  </footer>

      </div>
    );
  }
}
