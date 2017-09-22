import React from  'react';
import { Link } from 'react-router-dom';

function Header () {
  return (
    <div>
      <h1>PINTEREST</h1>
      <p>what has the president been pinning since he left 1600 Pennsylvania Ave?</p>
      <Link to="/">Mr. President</Link> | <Link to="/michelle">Madame President</Link>
      <hr/>
    </div>

  )
}

export default Header;
