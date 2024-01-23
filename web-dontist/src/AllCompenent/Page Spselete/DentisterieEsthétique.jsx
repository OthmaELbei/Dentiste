import Headers from "../1-Header";
import "./spseilete.css";
import myData from "../../MoxsData/DatafiristPaje.json";

export default function DentisterieEsthétique() {
  const Data = myData.Data;
  return (
    <>
      <Headers />
      <div className="parent">
        <div className="PImplantologie">
          <img
            style={{ width: "70%", height: "400px", padding: "30px" }}
            src="/teeth-2339168_1280.jpg"
            alt="teeth-2339168_1280"
          />
          <div>
            <h3>Implantologie</h3>
            <p>{Data.Esthétique}</p>
          </div>
        </div>
      </div>
    </>
  );
}
