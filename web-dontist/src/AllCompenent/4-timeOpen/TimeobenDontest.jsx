import Marquee from "react-fast-marquee";
import "./timeOpen.css";
import MyData from "../../MoxsData/DatafiristPaje.json";
import TitleForAll from "../TitleForAll";

export default function TimeobenDontest() {
  const data = MyData.Data;
  return (
    <>
      <div id="timeOben" className="timeOben">
        <TitleForAll> {data.TimeOpen} </TitleForAll>
        <Marquee>
          <div className="One">
            {data.timeOpenLundi}
            <span> {data.timeOpen}</span>
          </div>
          <div className="One">
            {data.timeOpenMardi}
            <span> {data.timeOpen}</span>
          </div>
          <div className="One">
            {data.timeOpenMercredi}
            <span> {data.timeOpen}</span>
          </div>
          <div className="One">
            {data.timeOpenJeudi}
            <span> {data.timeOpen}</span>
          </div>
          <div className="One">
            {data.timeOpenVendredi}
            <span> {data.timeOpen}</span>
          </div>
          <div className="One">
            {data.timeOpenSamedi}
            <span> 09:00 / 13:00 </span>
          </div>
        </Marquee>
      </div>
    </>
  );
}
