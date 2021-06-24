import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year} J. Huff</p>
    </footer>
  );
}

export default Footer;
