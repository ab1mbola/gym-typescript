import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footerItems">
          <img src="./assets/Logo.png" alt="Logo" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            sapiente ullam quas nemo praesentium! Quam, necessitatibus? Eveniet
            cumque corporis officia hic earum, totam quae placeat vel qui
            consectetur, quia praesentium!
          </p>
          <p>@ Evogym All Rights Reserved.</p>
        </div>

        <div className="footerItems">
          <h4>Links</h4>
          <p>Lorem, ipsum dolor.</p>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem, ipsum.</p>
        </div>

        <div className="footerItems">
          <h4>Contact Us</h4>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <p>(555)555-5555</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
