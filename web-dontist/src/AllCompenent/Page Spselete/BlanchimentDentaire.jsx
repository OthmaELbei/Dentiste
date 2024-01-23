import Headers from "../1-Header";
import "./spseilete.css";
import myData from "../../MoxsData/DatafiristPaje.json";

export default function BlanchimentDentaire() {
  const Data = myData.Data;
  return (
    <>
      <Headers />
      <div className="parent">
        <div className="PImplantologie">
          <img
            style={{ width: "70%", height: "400px", padding: "30px" }}
            src="/Blanchiment-dentaire-et-douleur-scaled.webp"
            alt="Blanchiment-dentaire-et-douleur-scaled"
          />
          <div>
            <h3>{Data.BlanchimentDentaire}</h3>
            <p>{Data.Blanchiment}</p>
          </div>
        </div>
      </div>
    </>
  );
}
