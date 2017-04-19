/*
 *
 * Home
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import Responsive from 'react-responsive';
import {Link} from "react-router";
import FlatButton from "material-ui/FlatButton";
import NavBar from 'components/NavBar';
import FooterNav from 'components/FooterNav';
import Gallery from 'react-photo-gallery';
export default class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state={
      photos3:[
        {
          src:"http://h4z.it/Image/65f854_tal_Mood_400.jpg",
          sizes:[
            '(min-width: 320px) 25vw',
            '(min-width: 1024px) 25vw',
            '100vw'
          ],
        },
        {
          src:"http://h4z.it/Image/dfb714_rfection_400.jpg",
          sizes:[
            '(min-width: 320px) 25vw',
            '(min-width: 1024px) 25vw',
            '100vw'
          ],
        },
        {
          src:"http://h4z.it/Image/e2491c_neutral_400.jpg",
          sizes:[
            '(min-width: 320px) 25vw',
            '(min-width: 1024px) 25vw',
            '100vw'
          ],
        },
        {
          src:"http://h4z.it/Image/78aca4_xpecting_400.jpg",
          sizes:[
            '(min-width: 320px) 25vw',
            '(min-width: 1024px) 25vw',
            '100vw'
          ],
        },
      ],
      photos2:[
        {
          src:"http://h4z.it/Image/d15078_rlena_Daniel.jpg",
          sizes:[
            '(min-width: 320px) 25vw',
            '(min-width: 1024px) 25vw',
            '100vw'
          ],
        },
        {
          src:"http://h4z.it/Image/e61bab_ds_small_400.jpg",
          sizes:[
            '(min-width: 320px) 25vw',
            '(min-width: 1024px) 25vw',
            '100vw'
          ],
        },
        {
          src:"http://h4z.it/Image/91871a_ne_PCard_400.jpg",
          sizes:[
            '(min-width: 320px) 25vw',
            '(min-width: 1024px) 25vw',
            '100vw'
          ],
        },
        {
          src:"http://h4z.it/Image/6ae8ad__Daniel2_400.jpg",
          sizes:[
            '(min-width: 320px) 25vw',
            '(min-width: 1024px) 25vw',
            '100vw'
          ],
        },
      ],
      photos:[
        {
          src:"http://h4z.it/Image/858c82_sta_Jobs_400.jpg",
          sizes:[
            '(min-width: 320px) 25vw',
            '(min-width: 1024px) 25vw',
            '100vw'
          ],
        },
        {
          src:"http://h4z.it/Image/ff51e4_rds_logo_400.jpg",
          sizes:[
            '(min-width: 320px) 25vw',
            '(min-width: 1024px) 25vw',
            '100vw'
          ],
        },
        {
          src:"http://h4z.it/Image/94604c_eva_Rose_400.jpg",
          sizes:[
            '(min-width: 320px) 25vw',
            '(min-width: 1024px) 25vw',
            '100vw'
          ],
        },
        {
          src:"http://h4z.it/Image/aae876_Red_logo_400.jpg",
          sizes:[
            '(min-width: 320px) 25vw',
            '(min-width: 1024px) 25vw',
            '100vw'
          ],
        },
      ],

    }


  }
  handleButton = () => {
    window.scroll(0,0);
  }
  handleScroll = (num) => {
    window.scroll(0,num);
  }

  render() {
    const divStyle={
      width:"100%",
      height:"600px",
      background:"url(http://h4z.it/Image/c98c04_DSC_0785rev.jpg)",
      backgroundSize:"cover",
      backgroundAttachment:"fixed",
      backgroundPosition:"center",
      backgroundRepeat:"no-repeat",
    }
    const divStyleMobile={
      width:"100%",
      height:"500px",
      background:"url(http://h4z.it/Image/c98c04_DSC_0785rev.jpg)",
      backgroundSize:"cover",
      backgroundAttachment:"fixed",
      backgroundPosition:"center",
      backgroundRepeat:"no-repeat",
    }
    const divStyle2={
      width:"100%",
      height:"250px",
      background:"rgba(0, 0, 0, 0.03)"
    }
    const divStyle2Mobile={
      width:"100%",
      height:"250px",
      background:"rgba(0, 0, 0, 0.03)"
    }
    const divStyle3={
      width:"100%",
      height:"600px",
      background:"url(http://h4z.it/Image/35e950_DSC_0266rev.jpg)",
      backgroundSize:"cover",
      backgroundAttachment:"fixed",
      backgroundPosition:"center",
      backgroundRepeat:"no-repeat"
    }
    const divStyle3Mobile={
      width:"100%",
      height:"500px",
      background:"url(http://h4z.it/Image/35e950_DSC_0266rev.jpg)",
      backgroundSize:"cover",
      backgroundAttachment:"fixed",
      backgroundPosition:"center",
      backgroundRepeat:"no-repeat"
    }
    const divStyle4={
      width:"100%",
      height:"800px",
      background:"rgba(255, 255, 255, 1.00)",
      display:"flex",
      flexDirection:"row",
      justifyContent:"center",
    }
    const divStyle4Mobile={
      width:"100%",
      height:"800px",
      background:"rgba(255, 255, 255, 1.00)",
      display:"flex",
      flexDirection:"row",
      justifyContent:"center",
    }
    const divStyle5={
      width:"100%",
      height:"600px",
      background:"url(http://h4z.it/Image/4bd89e_da443c74crev.jpg)",
      backgroundSize:"cover",
      backgroundAttachment:"fixed",
      backgroundPosition:"center",
      backgroundRepeat:"no-repeat",
    }
    const divStyle5Mobile={
      width:"100%",
      height:"450px",
      background:"url(http://h4z.it/Image/4bd89e_da443c74crev.jpg)",
      backgroundSize:"cover",
      backgroundAttachment:"fixed",
      backgroundPosition:"center",
      backgroundRepeat:"no-repeat",
    }
    const wrapper={
      display:"flex",
      flexDirection:"row",
      justifyContent:"center",

    }
    const wrapper2={
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
    }
    const divStyle6={
      width:"100%",
      height:"700px",
      background:"rgba(255, 255, 255, 1.00)",
      display:"flex",
      flexDirection:"row",
      justifyContent:"center"
    }
    const divStyle6Mobile={
      width:"100%",
      height:"700px",
      background:"rgba(255, 255, 255, 1.00)",
      display:"flex",
      flexDirection:"row",
      justifyContent:"center",
    }
    const divStyle7={
      width:"100%",
      height:"600px",
      background:"url(http://h4z.it/Image/645fa8_IMG_9509rev.jpg)",
      backgroundSize:"cover",
      backgroundAttachment:"fixed",
      backgroundPosition:"center",
      backgroundRepeat:"no-repeat"
    }
    const divStyle7Mobile={
      width:"100%",
      height:"450px",
      background:"url(http://h4z.it/Image/645fa8_IMG_9509rev.jpg)",
      backgroundSize:"cover",
      backgroundAttachment:"fixed",
      backgroundPosition:"center",
      backgroundRepeat:"no-repeat"
    }
    const divStyle8={
      width:"100%",
      height:"225px",
      background:"rgba(0, 0, 0, 0.03)"
    }
    const divStyle8Mobile={
      width:"100%",
      height:"auto",
      background:"rgba(0, 0, 0, 0.03)"
    }
    const divStyle9={
      display:"flex",
      justifyContent:"center"
    }
    const divStyle9Mobile={
      marginTop:"60 px",
      display:"flex",
      justifyContent:"center"
    }
    const mainStyle={
      display:"flex",
      flexDirection:"column",
      background:"rgba(255, 255, 255, 1.00)"
    }
      const mainStyleMobile={
        display:"flex",
        flexDirection:"column",
        background:"rgba(255, 255, 255, 1.00)"
    }
    const titleStyle={
      color:"#eeeeee",
      fontSize:"6em",
      fontFamily:"Quicksand",
      fontWeight:"300",
      textTransform:"uppercase",
      letterSpacing:"6px",
      textAlign:"center",
      marginTop:"250px"
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
    const headerStyle={
      color:"#191919",
      fontSize:"1.5em",
      fontFamily:"Open Sans",
      fontWeight:"800",
      textAlign:"center",
      marginTop:"30px",
      textTransform:"uppercase",
      letterSpacing:"2px"
    }
    const headerStyleMobile={
      color:"#191919",
      fontSize:"1em",
      fontFamily:"Open Sans",
      fontWeight:"800",
      textAlign:"center",
      marginTop:"30px",
      textTransform:"uppercase",
      letterSpacing:"2px"
    }
    const bodyStyle={
      color:"#191919",
      fontSize:".95em",
      fontFamily:"Open Sans",
      fontWeight:"400",
      textAlign:"center",
      marginTop:"30px"
    }
    const bodyStyleMobile={
      color:"#191919",
      fontSize:".9em",
      fontFamily:"Open Sans",
      fontWeight:"400",
      textAlign:"center",
      marginTop:"30px",
      paddingLeft:"5px",
      paddingRight:"5px"
    }
    const navStyleMobile={
      display:"flex",
      flexDirection:"column",
      justifyContent:"flex-end",
      height:"100px",
      alignItems:"center",
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

    const logoStyleMobile={
      marginTop:"15px",
      height:"auto",
      width:"50%",
      display:"flex",
      alignSelf:"center",
      flexDirection:"column",
      justifyContent:"flex-start",

    }
    const headStyleMobile={
      display:"flex",
      marginTop:"20px",
      flexDirection:"column",
      alignItems:"center",
    }
    const mottoStyle={
      color:"#191919",
      fontSize:"1.10em",
      fontFamily:"Open Sans",
      fontWeight:"700",
      textAlign:"center",
      textTransform:"uppercase",
      marginTop:"30px",
      letterSpacing:"2px"
    }
    const mottoStyleMobile={
        color:"#191919",
        fontSize:"1em",
        fontFamily:"Open Sans",
        fontWeight:"700",
        textAlign:"center",
        textTransform:"uppercase",
        marginTop:"30px",
        letterSpacing:"2px"
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
    const imageStyle={
      width:"15%",
      height:"65%",
      marginTop:"125px",
      marginBottom:"10px"
    }
    const imageStyleMobile={
      width:"15%",
      height:"65%",
      marginTop:"125px",
      marginBottom:"10px"
    }
    const imageStyle2={
      width:"26%",
      height:"22%",
      marginTop:"80px",
      marginBottom:"10px"
    }
    const imageStyle2Mobile={
      width:"26%",
      height:"22%",
      marginTop:"80px",
      marginBottom:"10px"
    }
    const imageStyle3={
      width:"26%",
      height:"40%",
      marginTop:"80px",
      marginBottom:"100px"
    }
    const imageStyle3Mobile={
      width:"26%",
      height:"40%",
      marginTop:"80px",
      marginBottom:"100px"
    }
    return (
      <div>
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>

        <header>
            <NavBar/>
      </header>

        <main style={mainStyle}>

          <Responsive minDeviceWidth={1024}>
            <div style={divStyle}>
              <div style={titleStyle}> Photography </div>
            </div>
          </Responsive>

          <Responsive maxDeviceWidth={1023}>
            <div style={divStyleMobile}>
              <div style={titleStyleMobile}> Photo </div>
            </div>
          </Responsive>

        <Responsive minDeviceWidth={1024}>
          <div style={divStyle2}>
                  <h1 style={headerStyle}>
                    Designer | Artist | Photographer | Developer
                  </h1>
              <div style={bodyStyle}>
                <p style={bodyStyle}> I am an Augutsa based designer with over 18 years of professional experience in the creative industry. </p>
                <p style={bodyStyle}> I focus on creating solutions for my clients. </p>
              </div>
              <div style={mottoStyle}>
                <p style={mottoStyle}> Design good. </p>
              </div>
          </div>
        </Responsive>

        <Responsive maxDeviceWidth={1023}>
          <div style={divStyle2Mobile}>
                  <h1 style={headerStyleMobile}>
                    Designer | Artist | Photographer | Developer
                  </h1>
              <div style={bodyStyleMobile}>
                <p style={bodyStyleMobile}> I am an Augutsa based designer with over 18 years of professional experience in the creative industry. </p>
                <p style={bodyStyleMobile}> I focus on creating solutions for my clients. </p>
              </div>
              <div style={mottoStyleMobile}>
                <p style={mottoStyleMobile}> Design good. </p>
              </div>
          </div>
        </Responsive>


          <Responsive minDeviceWidth={1024}>
            <div style={divStyle3}>
              <div style={titleStyle}> Design </div>
            </div>
          </Responsive>

          <Responsive maxDeviceWidth={1023}>
            <div style={divStyle3Mobile}>
              <div style={titleStyleMobile}> Design </div>
            </div>
          </Responsive>

          <div style={wrapper2}>
          <Gallery style={divStyle4} photos={this.state.photos} cols={4}/>
          <Gallery style={divStyle4} photos={this.state.photos2} cols={4}/>
          </div>

          <Responsive minDeviceWidth={1024}>
            <div style={divStyle5}>
              <div style={titleStyle}> art </div>
            </div>
          </Responsive>

          <Responsive maxDeviceWidth={1023}>
            <div style={divStyle5Mobile}>
              <div style={titleStyleMobile}> art </div>
            </div>
          </Responsive>

          <div style={wrapper}>
          <Gallery style={divStyle6} photos={this.state.photos3} cols={4}/>
          </div>

          <Responsive minDeviceWidth={1024}>
            <div style={divStyle7}>
              <div style={titleStyle}> Development </div>
            </div>
          </Responsive>

          <Responsive maxDeviceWidth={1023}>
            <div style={divStyle7Mobile}>
              <div style={titleStyleMobile}> Dev </div>
            </div>
          </Responsive>

          <Responsive minDeviceWidth={1024}>
          <div style={divStyle8}>
              <div style={bodyStyle}>
                <p style={bodyStyle}> With Full Stack Development skills, knowledge of both front and back end development are at my client's disposal. </p>
                <p style={bodyStyle}> HTML | Cascading Style Sheets (CSS) | Javascript </p>
                <p style={bodyStyle}> PHP | MySQL / MariaDB | Linux (Ubuntu and Cloud Hosting) </p>
              </div>
                <div style={mottoStyle}>
                <p style={mottoStyle}> Design good. </p>
                </div>
          </div>
          </Responsive>

          <Responsive maxDeviceWidth={1023}>
          <div style={divStyle8Mobile}>
              <div style={bodyStyleMobile}>
                <p style={bodyStyleMobile}> With Full Stack Development skills, knowledge of both front and back end development are at my client's disposal. </p>
                <p style={bodyStyleMobile}> HTML | Cascading Style Sheets (CSS) | Javascript </p>
                <p style={bodyStyleMobile}> PHP | MySQL / MariaDB | Linux (Ubuntu and Cloud Hosting) </p>
              </div>
                <div style={mottoStyleMobile}>
                <p style={mottoStyleMobile}> Design good. </p>
                </div>
          </div>
          </Responsive>

          <Responsive minDeviceWidth={1024}>
            <div style={divStyle9}>
            <FlatButton label="Go to Top" onTouchTap={this.handleButton}/>
            </div>
          </Responsive>

          <Responsive maxDeviceWidth={1023}>
            <div style={divStyle9Mobile}>
            <FlatButton label="Go to Top" onTouchTap={this.handleButton}/>
            </div>
          </Responsive>

        </main>

        <footer>

          <FooterNav/>

        </footer>

      </div>
    );
  }
}
