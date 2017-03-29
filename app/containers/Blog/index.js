/*
 *
 * Blog
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

export default class Blog extends React.PureComponent {
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
        height:"750px",
        backgroundSize:"cover",
        backgroundPosition:"center center"

    }

    const parallax={
        top:"200px",
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

    return (
      <div>
        <Helmet title="Blog" meta={[ { name: 'description', content: 'Description of Blog' }]}/>


                  <header>
                    <Responsive minDeviceWidth={1024}>
                      <NavBar/>
                    </Responsive>
                  </header>

                    <div>

                      <div style={divStyle}>
            				        <Parallax style={box} className="parallax" speedDivider="2" backgroundStyle={reactSimpleParallaxBg}>
            		  		        Blog
            		  	        </Parallax>
                     </div>



                    </div>


      </div>

    );
  }
}
