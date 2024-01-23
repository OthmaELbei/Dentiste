import Headers from "../1-Header";
import "./spseilete.css";
import myData from "../../MoxsData/DatafiristPaje.json";
export default function PImplantologie() {
  const Data = myData.Data;
  return (
    <>
      <Headers />
      <div className="parent">
        <div className="PImplantologie">
          <img
            style={{ width: "100%", height: "300px", padding: "30px" }}
            src="/PicDentaire365-4.png"
            alt="PicDentaire365-4"
          />
          <div>
            <h3>Implantologie</h3>
            <p>{Data.Implantologie}</p>
          </div>
        </div>
      </div>
    </>
  );
}
