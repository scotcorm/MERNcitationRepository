import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <ul className='footer_categories'>
        <li>
          <Link to='citations/categories/:CCBY'>CC BY 4.0</Link>
        </li>
        <li>
          <Link to='citations/categories/:CCBYSA'>CC BY-SA 4.0</Link>
        </li>
        <li>
          <Link to='citations/categories/:CCBYNC'>CC BY-NC 4.0</Link>
        </li>
        <li>
          <Link to='citations/categories/:CCBYNCSA'>CC BY-NC-SA 4.0</Link>
        </li>
        <li>
          <Link to='citations/categories/:CCBYND'>CC BY-ND 4.0</Link>
        </li>
        <li>
          <Link to='citations/categories/:CCBYNCND'>CC BY-NC-ND 4.0</Link>
        </li>
      </ul>
      <div className='footer_copyright'>
        <a href='https://creativecommons.org/share-your-work/cclicenses/'>
          About CC Licenses
        </a>
      </div>
    </footer>
  );
};

export default Footer;
