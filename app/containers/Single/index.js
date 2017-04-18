/*
 *
 * Single
 *
 */

 import React from 'react';
 import Helmet from 'react-helmet';
 import Responsive from 'react-responsive';
 import {Link} from "react-router";
 import FlatButton from "material-ui/FlatButton";
 import NavBar2 from 'components/NavBar2';
 import FooterNav2 from 'components/FooterNav2';

export default class Single extends React.PureComponent {

  constructor(props){
  super(props);
  this.state={
    article:""
  }
}
componentWillMount(){
  fetch('http://localhost:8000/api/showArticle/'+this.props.params.id)
  .then(function(response){
    return response.json();
  })
  .then(function(json){
    this.setState({
      article:json
    })
  }.bind(this))
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
        background:"url(http://h4z.it/Image/81f061_t_lights_rev.jpg)",
        backgroundSize:"cover",
        backgroundAttachment:"fixed",
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat",
      }
        const divStyleMobileParallax={
          width:"100%",
          height:"500px",
          background:"url(http://h4z.it/Image/81f061_t_lights_rev.jpg)",
          backgroundSize:"cover",
          backgroundAttachment:"fixed",
          backgroundPosition:"center",
          backgroundRepeat:"no-repeat",
        }
        const bodyStyle={
          color:"#ffffff",
          fontSize:"1em",
          fontFamily:"Open Sans",
          fontWeight:"400",
          textAlign:"left",
          padding:"0px 100px 100px 100px"
        }
        const divStyle3={
          width:"100%",
          height:"650px",
          background:"rgba(0, 0, 0, 1.00)"

        }
        const divStyle4={
          width:"100%",
          height:"auto",
          background:"rgba(0, 0, 0, 1.00)",
          marginTop:"80px",
          color:"#ffffff"
        }
        const divStyle4Mobile={
          width:"100%",
          height:"auto",
          background:"rgba(0, 0, 0, 1.00)",
          marginTop:"80px",
          color:"#ffffff"

        }
        const divStyle5={
          width:"100%",
          height:"100px",
          marginTop:"80px",
          background:"rgba(0, 0, 0, 1.00)",
          color:"#ffffff"
        }
        const headerStyle={
          color:"#ffffff",
          fontSize:"1.20em",
          fontFamily:"Open Sans",
          fontWeight:"600",
          textTransform:"uppercase",
        }
        const blogTitleStyle={
          color:"#ffffff",
          fontSize:"1.9em",
          fontFamily:"Quicksand",
          fontWeight:"300",
          textTransform:"lowercase",
        }
        const blogBodyStyle={
          color:"#ffffff",
          fontSize:"1em",
          fontFamily:"Open Sans",
          fontWeight:"400",
          textAlign:"left",
        }
        const blogDateStyle={
          color:"rgba(255, 255, 255, 0.6)",
          fontSize:"1em",
          fontFamily:"Merriweather",
          fontWeight:"300",
          textAlign:"left",
          letterSpacing:"2px",
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
         const imageStyle={
           width:"auto",
           height:"auto",
           display:"flex",
           flexDirection:"column",
           margin:"0 auto",
           marginTop:"30px",
           marginBottom:"20px"
         }
         const imageStyleMobile={
           maxWidth:"90%",
           height:"auto",
           display:"flex",
           flexDirection:"column",
           margin:"0 auto",
           marginTop:"30px",
           marginBottom:"20px"
         }
    return (
      <div>
        <Helmet title="Single" meta={[ { name: 'description', content: 'Description of Single' }]}/>
          <header>

                <NavBar2/>

          </header>

          <main style={mainStyle}>


            <Responsive minDeviceWidth={1024}>
              <div style={divStyleParallax}>
                <div style={titleStyle}>{this.state.article.title}</div>
              </div>
            </Responsive>

            <Responsive maxDeviceWidth={1023}>
              <div style={divStyleMobileParallax}>
                <div style={titleStyleMobile}>{this.state.article.title}</div>
              </div>
            </Responsive>

            <Responsive minDeviceWidth={1024}>
             <div style={divStyle4}>

                 <div style={{maxWidth:"960px", margin:"0 auto", marginBottom:"15px",
                   }}>
                     <p style={blogBodyStyle}>{this.state.article.body}</p>
                     <img style={imageStyle}img src={this.state.article.image}/>
                     <p style={blogDateStyle}>{this.state.article.articleDate}</p>
                   </div>

             </div>
             </Responsive>

             <Responsive maxDeviceWidth={1023}>
               <div style={divStyle4Mobile}>

                 <div style={{maxWidth:"300px", margin:"0 auto", marginBottom:"15px",
                   }}>
                   <p style={blogBodyStyle}>{this.state.article.body}</p>
                </div>

                       <div><img style={imageStyleMobile}img src={this.state.article.image}/></div>

                       <div style={{maxWidth:"300px", margin:"0 auto", marginBottom:"15px",}}>
                       <p style={blogDateStyle}> {this.state.article.articleDate} </p>
                       </div>

               </div>
             </Responsive>

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
