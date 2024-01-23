import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import PresenTation from "./PresenTation";
import LogoHeader from "./LogoHeader";
import MenuOben from "./MenuOben";
import Aos from "aos";

import { Link } from "react-scroll";

import MyData from "../../MoxsData/DatafiristPaje.json";

import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";
import "aos/dist/aos.css";
import MenuSpsylete from "./MenuSpsylete";

export default function Header() {
  const [scrolwid, setScrolwid] = useState("40%");
  const [scrollift, setScrollift] = useState("50%");
  const [spsyl, setSpsyl] = useState(false);

  const Spsylete = () => {
    setSpsyl(!spsyl);
  };

  const data = MyData.Data;

  useEffect(() => {
    Aos.init();
  }, []);
  window.onscroll = function () {
    // console.log(this.screenY);
    if (this.scrollY >= 500) {
      setScrolwid("9%");
      setScrollift("80%");
    } else {
      setScrolwid("40%");
      setScrollift("50%");
      setSpsyl(false);
    }
  };

  return (
    <>
      <nav style={{ overflow: "hidden" }} className="flex  ">
        <PresenTation />
        <div className="Nav">
          <motion.ul
            className="box  "
            initial={{
              height: "60px",
              width: "100px",
              top: "10px",
              margin: "10px",
              right: "-60%",
            }}
            animate={{
              height: "54px",
              width: scrolwid,
              margin: "10px",
              top: "25px",
              left: scrollift,
              borderRadius: "30px",
              position: "fixed",
              zIndex: "234567",
            }}
            transition={{
              duration: 2,
            }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Link
              className="li"
              activeClass="active"
              to="root"
              spy={true}
              smooth={true}
              offset={30}
              duration={300}
            >
              <li> {data.limenue}</li>
            </Link>
            <Link
              className="li-tow"
              activeClass="active"
              to="meun"
              spy={true}
              smooth={true}
              offset={30}
              duration={300}
            >
              <li>{data.limenue2}</li>
            </Link>

            <li onClick={Spsylete} className="li-three">
              {data.limenue3}
              <MenuSpsylete className={spsyl ? " Activ" : ""} />
            </li>

            <Link
              className="li-foer"
              activeClass="active"
              to="timeOben"
              spy={true}
              smooth={true}
              offset={30}
              duration={300}
            >
              <li>{data.limenue4}</li>
            </Link>
            <li className="last-child">{data.limenue5}</li>
          </motion.ul>
        </div>
        <MenuOben />
        <LogoHeader />
      </nav>
    </>
  );
}
