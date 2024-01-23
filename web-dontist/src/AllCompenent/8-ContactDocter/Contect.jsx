import "./contect.css";
import { motion } from "framer-motion";
import "../../../public/style.css";

export default function Contect() {
  return (
    <>
      <motion.div
        initial={{
          transform: "scale3d(0,0,0)",
        }}
        animate={{
          transform: "scale3d(1,1,1)",
        }}
        transition={{
          duration: 2,
        }}
        className="contact"
      >
        <a href="https://web.whatsapp.com/">
          <div className="icon-whatsapp"></div>
        </a>

        <a href="https://www.instagram.com/your_instagram_account/">
          <div className="icon-instagram"></div>
        </a>

        <a href="https://www.facebook.com/your_facebook_page/">
          <div className="icon-facebook2"></div>
        </a>

        <a href="https://www.google.com/maps?q=your_location">
          <div className="icon-location"></div>
        </a>

        <a href="tel:+1234567890">
          <div className="icon-phone"></div>
        </a>
      </motion.div>
    </>
  );
}
