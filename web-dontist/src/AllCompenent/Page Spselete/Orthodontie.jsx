import Headers from "../1-Header";
import "./spseilete.css";
import myData from "../../MoxsData/DatafiristPaje.json";
export default function Orthodontie() {
  const Data = myData.Data;
  return (
    <>
      <Headers />
      <div className="parent">
        <div className="PImplantologie">
          <img
            style={{ width: "100%", height: "300px", padding: "30px" }}
            src="/invisalign.jpg"
            alt="PicDentaire365-4"
          />
          <div>
            <h3>Implantologie</h3>
            <p>{Data.Orthodontie}</p>
          </div>
        </div>
      </div>
    </>
  );
}
