import "./meun.css";
import mydatas from "../../MoxsData/DatafiristPaje.json";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import TitleForAll from "../TitleForAll";
import Mydata from "../../MoxsData/DatafiristPaje.json";

export default function Meun() {
  const Data = Mydata.Data;

  useEffect(() => {
    Aos.init();
  }, []);
  const data = mydatas.Data;
  return (
    <>
      <div id="meun" className="pjPresn">
        <TitleForAll>{Data.Clinique}</TitleForAll>
        <div className="contener prentmeun">
          <div
            style={{ transition: "2s" }}
            data-aos="zoom-in-right"
            data-aos-duration="45000"
            data-aos-easing="linear"
            className="imgss"
          >
            <img
              src="/tinified (4)/woman-2141808_1280.jpg"
              alt="woman-2141808_1280"
            />
          </div>
          <div
            style={{ transition: "2s" }}
            data-aos="fade-left"
            data-aos-duration="50000"
            className="text"
          >
            <p>
              <h4>{data.TitleBinei}</h4>
              {data.PrgrfBeinven}
              <br />
              {data.prgfMups}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
