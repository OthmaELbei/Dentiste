import { useState } from "react";
import MyData from "../../MoxsData/DatafiristPaje.json";
import { Link } from "react-scroll";
import MenuSpsylete from "./MenuSpsylete";

export default function MenuOben() {
  const [addActiv, setAddActiv] = useState(true);
  const data = MyData.Data;

  const ActivAdd = () => {
    setAddActiv(!addActiv);
  };

  const [activeMenu, setActiveMenu] = useState(null);
  const [activeMenus, setActiveMenus] = useState(true);

  const clickMen = (menuNumber) => {
    setActiveMenu(menuNumber);
  };

  const clickMen2 = () => {
    setActiveMenus(!activeMenus);
  };
  const clickMen3 = (menuNumber) => {
    setActiveMenu(menuNumber);
  };
  return (
    <div style={{ position: "relative" }} className=" mNav">
      <div
        style={{ position: "fixed" }}
        onClick={ActivAdd}
        className={addActiv ? "activ oben " : "oben"}
      >
        Oben
      </div>
      <div
        style={{ position: "fixed" }}
        className={addActiv ? "activ mnue " : "mnue"}
      >
        <div className="menus">
          <div className="body">
            <div
              onClick={() => clickMen(1)}
              className={activeMenu === 1 ? "activ " : ""}
            >
              <Link
                className="li"
                activeClass="active"
                to="root"
                spy={true}
                smooth={true}
                offset={30}
                duration={300}
                style={{ color: activeMenu === 1 ? "black" : "white" }}
              >
                {data.limenue}
              </Link>
            </div>
            <div
              onClick={() => clickMen3(3)}
              className={activeMenu === 3 ? "activ " : ""}
            >
              <Link
                className="li-foer"
                activeClass="active"
                to="timeOben"
                spy={true}
                smooth={true}
                offset={30}
                duration={300}
                style={{ color: activeMenu === 3 ? "black" : "white" }}
              >
                {data.limenue2}
              </Link>
            </div>
            <div onClick={clickMen2} className={activeMenus ? "" : "activ"}>
              <li style={{ color: activeMenus ? "white" : "black" }}>
                <MenuSpsylete className={activeMenus ? "actvs" : ""} />
                {data.limenue3}
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
