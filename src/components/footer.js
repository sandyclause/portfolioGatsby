import * as React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="copyRight">
        <p>Copyright © {year} by Sandy Tian</p>
      </div>
    </footer>
    )
}

export default Footer;