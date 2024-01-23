import "./navs.css";
import Bounce from "react-reveal/Bounce";
import MyData from "../../MoxsData/DatafiristPaje.json";

export default function TittleaAndtext() {
  const data = MyData.Data;
  return (
    <>
      <div className="prTitle contener" style={{ display: "flex" }}>
        <div className="Title">
          <h1>
            {data.FirstTitel} <br />
            <span>{data.LastWordTitel}</span>
          </h1>
          <Bounce bottom cascade>
            <h3>{data.LittelTettil}</h3>
          </Bounce>
          <h5>{data.NameDoctor}</h5>
          <h6>{data.Spécial}</h6>
        </div>
      </div>
    </>
  );
}
