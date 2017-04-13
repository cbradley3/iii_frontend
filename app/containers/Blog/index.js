
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

             <div style={{maxWidth:"960px", margin:"0 auto", marginBottom:"15px",
               }}>

               <Link to="" ><h1 style={blogTitleStyle}>the jump off</h1></Link>
                   <p style={blogBodyStyle}> But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure? </p>
                   <p style={blogDateStyle}> 04.13.2017 </p>
             </div>

           </div>
           </Responsive>

           <Responsive maxDeviceWidth={1023}>
             <div style={divStyle4Mobile}>
               <div style={{maxWidth:"300px", margin:"0 auto", marginBottom:"15px",
                 }}>

                 <Link to="" ><h1 style={blogTitleStyle}>the jump off</h1></Link>
                     <p style={blogBodyStyle}> But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.  </p>
                     <p style={blogDateStyle}> 04.13.2017 </p>
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
