/*
 *
 * About
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

export class Blog extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet title="Blog" meta={[ { name: 'description', content: 'Description of Blog' }]}/>
        <header>
          <nav>
          <Link to="/"> Home </Link>
          <Link to="/Blog"> Blog </Link>
          </nav>
        </header>
        <main>    </main>
        <footer>  </footer>

      </div>
    );
  }
}
