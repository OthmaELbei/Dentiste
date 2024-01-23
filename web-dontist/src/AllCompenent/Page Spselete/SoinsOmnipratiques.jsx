import Headers from "../1-Header";
import "./spseilete.css";
import myData from "../../MoxsData/DatafiristPaje.json";

export default function SoinsOmnipratiques() {
  const Data = myData.Data;
  return (
    <>
      <Headers />
      <div className="parent">
        <div className="PImplantologie">
          <img
            style={{ width: "70%", height: "450px", padding: "30px" }}
            src="/yl94v5i0qfwd4aw8rvo447tks4ub.jpg"
            alt="yl94v5i0qfwd4aw8rvo447tks4ub"
          />
          <div>
            <h3>Soins Omnipratiques</h3>
            <p>{Data.soin}</p>
          </div>
        </div>
      </div>
    </>
  );
}
