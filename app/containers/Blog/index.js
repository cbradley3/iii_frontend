
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
 import NavBar2 from 'components/NavBar2';
 import FooterNav2 from 'components/FooterNav2';

 export default class Blog extends React.PureComponent {
   constructor(props){
   super(props);
   this.state={
     articles:[]
   }
 }
 componentWillMount(){
   fetch('http://cb-iii.com/api/getArticles')
   .then(function(response){
     return response.json();
   })
   .then(function(json){
     this.setState({
       articles:json
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
       background:"url(http://h4z.it/Image/ae8f02_MG_9509bwrev.jpg)",
       backgroundSize:"cover",
       backgroundAttachment:"fixed",
       backgroundPosition:"center",
       backgroundRepeat:"no-repeat",
     }
       const divStyleMobileParallax={
         width:"100%",
         height:"500px",
         background:"url(http://h4z.it/Image/ae8f02_MG_9509bwrev.jpg)",
         backgroundSize:"cover",
         backgroundAttachment:"fixed",
         backgroundPosition:"center",
         backgroundRepeat:"no-repeat",
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
     const divStyle5Mobile={
       width:"100%",
       height:"75px",
       marginTop:"37px",
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
      const pageLinks = [];

      const preview = {};

     return (
       <div>
         <Helmet title="Blog" meta={[ { name: 'description', content: 'Description of Blog' }]}/>

           <header>

                 <NavBar2/>

           </header>

           <main style={mainStyle}>


             <Responsive minDeviceWidth={1024}>
               <div style={divStyleParallax}>
                 <div style={titleStyle}> Blog </div>
               </div>
             </Responsive>

             <Responsive maxDeviceWidth={1023}>
               <div style={divStyleMobileParallax}>
                 <div style={titleStyleMobile}> Blog </div>
               </div>
             </Responsive>

          <Responsive minDeviceWidth={1024}>
           <div style={divStyle4}>
             {this.state.articles.map((article,index) => (
               <div style={{maxWidth:"960px", margin:"0 auto", marginBottom:"15px",
                 }}>

                 <Link to={`/single/${article.id}`} ><h1 style={blogTitleStyle}>{article.title}</h1></Link>
                     <p style={blogBodyStyle}>{article.body}</p>
                     <p style={blogDateStyle}> {article.articleDate} </p>
               </div>
             ))}


           </div>
           </Responsive>

           <Responsive maxDeviceWidth={1023}>
             <div style={divStyle4Mobile}>
               {this.state.articles.map((article,index) => (
                 <div style={{maxWidth:"300px", margin:"0 auto", marginBottom:"15px",
                   }}>

                   <Link to={`/single/${article.id}`}><h1 style={blogTitleStyle}>{article.title}</h1></Link>
                       <p style={blogBodyStyle}>{article.body}</p>
                       <p style={blogDateStyle}> {article.articleDate} </p>
                 </div>
               ))}
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

           <FooterNav2/>

         </footer>


       </div>

           );
         }
       }
