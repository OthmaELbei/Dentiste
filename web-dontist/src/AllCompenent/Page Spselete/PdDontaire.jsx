import Headers from "../1-Header";
import "./spseilete.css";
import myData from "../../MoxsData/DatafiristPaje.json";
export default function PdDontaire() {
  const Data = myData.Data;
  return (
    <>
      <Headers />
      <div className="parent">
        <div className="PImplantologie">
          <img
            style={{ width: "70%", height: "400px", padding: "30px" }}
            src="/pedodontie.jpg"
            alt="pedodontie"
          />
          <div>
            <h3> {Data.pédodonties} </h3>
            <p>{Data.pédodontie}</p>
          </div>
        </div>
      </div>
    </>
  );
}
