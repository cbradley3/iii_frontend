/*
 *
 * About
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

export class About extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet title="About" meta={[ { name: 'description', content: 'Description of About' }]}/>
        <header>
          <nav>
          <Link to="/"> Home </Link>
          <Link to="/About"> About </Link>
          </nav>
        </header>
        <main>    </main>
        <footer>  </footer>

      </div>
    );
  }
}
