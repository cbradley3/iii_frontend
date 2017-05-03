/**
*
* BlogSection
*
*/

import React from 'react';
import Helmet from 'react-helmet';
import Responsive from 'react-responsive';
import {Link} from "react-router";

class BlogSection extends React.PureComponent {
  constructor (props){
   super(props);
   this.state={
     comments:[],
     commentBody:"",
     token:sessionStorage.getItem("token"),

   }
  }
  componentWillMount(){
    fetch("http://cb-iii.com/api/getComments/"+this.props.singleID)
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      this.setState({
        comments:json
      })
    }.bind(this))
  }

  handleComment = (event) => {
    this.setState({
      commentBody:event.target.value
    })
  }

  storeComment = () => {

    var data = new FormData ();
    data.append("body", this.state.commentBody);
    data.append("articleID", this.props.singleID);

  fetch("http://cb-iii.com/api/storeComments?token="+this.state.token,{
    method:"post",
    body:data,
    headers:{
      "Authorization":"Bearer "+this.state.token
    }
  })
  .then(function(response){
    return response.json();
  })
  .then(function(json){
    if(json.success){
      this.setState({
        commentBody:"",
      })
      alert("Success! Thanks for commenting!");
    }
    else if (json.error){
      alert("You need to fill out all fields.");
    }
  }.bind(this))
    this.forceUpdate();
 }

  render() {
    const blogHeaderStyle={
      color:"#ffffff",
      fontSize:"2em",
      fontFamily:"Quicksand",
      fontWeight:"300",
      textAlign:"left",
    }
    const box={
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
      border:"1px solid #ffffff",
      fontSize:"1em",
      fontFamily:"Open Sans",
      fontWeight:"400",
      textAlign:"left",
      width:"300px",
      height:"40px",
      marginTop:"30px",
      marginBottom:"30px",
      marginRight:"30px",
      background:"#ffffff"
    }
    const inputBox2={
      color:"#191919",
      border:"1px solid #ffffff",
      fontSize:"1em",
      fontFamily:"Open Sans",
      fontWeight:"400",
      textAlign:"left",
      width:"640px",
      height:"150px",
      marginTop:"10px",
      marginBottom:"30px",
      background:"#ffffff"
    }
    const inputBox2Mobile={
      color:"#191919",
      border:"1px solid #ffffff",
      fontSize:"1em",
      fontFamily:"Open Sans",
      fontWeight:"400",
      textAlign:"left",
      width:"300px",
      height:"100px",
      marginTop:"10px",
      marginBottom:"30px",
      background:"#ffffff"
    }
    const inputBoxMobile={
      color:"#191919",
      fontSize:"1em",
      border:"1px solid #ffffff",
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
    const commentBox={
      maxWidth:"640px",
      textAlign:"left",
      height:"auto",
      border:"1px solid #ffffff",
      margin:"0 auto",
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      marginBottom:"10px",
      overflow:"hidden",
    }
    const commentBoxMobile={
      maxWidth:"300px",
      textAlign:"left",
      height:"auto",
      border:"1px solid #ffffff",
      margin:"0 auto",
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      marginBottom:"10px",
      overflow:"hidden",
    }
    const nameStyle={
      color:"#ffffff",
      fontSize:"1.5em",
      fontFamily:"Open Sans",
      fontWeight:"700",
      padding:"10px 10px 10px 10px",
    }
    const commentStyle={
      color:"#ffffff",
      fontSize:"1em",
      fontFamily:"Open Sans",
      fontWeight:"400",
      textAlign:"left",
      padding:"10px 10px 10px 10px",
    }
    const dateStyle={
      color:"rgba(255, 255, 255, 0.6)",
      fontSize:"0.8em",
      fontFamily:"Merriweather",
      fontWeight:"300",
      textAlign:"left",
      letterSpacing:"2px",
      padding:"10px 10px 10px 10px",
    }
    const bodyStyle={
      color:"#ffffff",
      fontSize:"1em",
      fontFamily:"Open Sans",
      fontWeight:"400",
      textAlign:"left",
    }
    const inputBox3={
      color:"#ffffff",
      fontSize:"1em",
      fontFamily:"Open Sans",
      fontWeight:"400",
      textAlign:"center",
      width:"100px",
      height:"50px",
      marginBottom:"100px",
      background:"rgba(0, 0, 0, 1.00)",
      border:"1px solid #ffffff",
    }
    return (
      <div>
        <Responsive minDeviceWidth={1024}>
          <div style={{maxWidth:"640px", margin:"0 auto", marginBottom:"15px",
            }}>
            <div style={blogHeaderStyle}> leave a comment </div>
            <textarea onChange = {this.handleComment} style={inputBox2}>{this.state.commentBody}</textarea>

            <input onTouchTap = {this.storeComment} type="submit" value="Submit" style={inputBox3}/>

            {this.state.comments.map((comment,index) => (
              <div style={commentBox}>
                <div style={nameStyle}>{comment.name}</div>
                <div style={commentStyle}>{comment.body}</div>
                <div style={dateStyle}>{comment.commentDate}</div>
              </div>
            ))}
          </div>
        </Responsive>

        <Responsive maxDeviceWidth={1023}>
          <div style={{maxWidth:"300px", margin:"0 auto", marginBottom:"15px",
            }}>
            <div style={blogHeaderStyle}> leave a comment </div>
            <textarea onChange = {this.handleComment} style={inputBox2Mobile}>{this.state.commentBody}</textarea>

            <input onTouchTap = {this.storeComment} type="submit" value="Submit" style={inputBox3}/>

            {this.state.comments.map((comment,index) => (
              <div style={commentBoxMobile}>
                <div style={nameStyle}>{comment.name}</div>
                <div style={commentStyle}>{comment.body}</div>
                <div style={dateStyle}>{comment.commentDate}</div>
              </div>
            ))}
          </div>
        </Responsive>
      </div>
    );
  }
}

export default BlogSection;
