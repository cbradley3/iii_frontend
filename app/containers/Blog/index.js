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

export default class Blog extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet title="Blog" meta={[ { name: 'description', content: 'Description of Blog' }]}/>

      //Remove this line and you can start writing your code here.
      </div>
    );
  }
}
