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
    articles:[]
  }
}
componentWillMount(){
  fetch('http://localhost:8000/api/getArticles')
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
    return (
      <div>
        <Helmet title="Single" meta={[ { name: 'description', content: 'Description of Single' }]}/>
          <header>

                <NavBar2/>

          </header>

          <main style={mainStyle}>


            <Responsive minDeviceWidth={1024}>
              <div style={divStyleParallax}>
                <div style={titleStyle}> New Blog Post </div>
              </div>
            </Responsive>

            <Responsive maxDeviceWidth={1023}>
              <div style={divStyleMobileParallax}>
                <div style={titleStyleMobile}> New Blog Post </div>
              </div>
            </Responsive>

            <Responsive minDeviceWidth={1024}>
             <div style={divStyle4}>
               {this.state.articles.map((article,index) => (
                 <div style={{maxWidth:"960px", margin:"0 auto", marginBottom:"15px",
                   }}>
                       <p style={blogBodyStyle}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"

"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"

"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."

"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."

</p>
                       <p style={blogDateStyle}> {4-17-2017} </p>
                 </div>
               ))}


             </div>
             </Responsive>

             <Responsive maxDeviceWidth={1023}>
               <div style={divStyle4Mobile}>
                 {this.state.articles.map((article,index) => (
                   <div style={{maxWidth:"300px", margin:"0 auto", marginBottom:"15px",
                     }}>
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
