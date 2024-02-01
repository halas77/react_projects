function Footer() {
  const current = new Date().getFullYear();
  return <p className="footer">Copyright © {current}</p>;
}
export default Footer;
