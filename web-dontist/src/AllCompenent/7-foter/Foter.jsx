import "./foter.css";
import "../../../public/style.css";
import { Image } from "antd";
import myData from "../../MoxsData/DatafiristPaje.json";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Foter() {
  const data = myData.Data;
  return (
    <>
      <div className=" Parent">
        <div className="contener content row ">
          <div className="Maps col-lg-4 col-md-6 col-sm-12">
            <div className="map2"> localestion</div>

            <Image
              style={{
                width: "280px",
                height: "200px",
              }}
              src="/tinified (4)/2281ad2c-b84f-4618-ac23-167d37978c0e-fotor-20240114184044.jpg"
              alt="2281ad2c-b84f-4618-ac23-167d37978c0e-fotor-20240114184044"
            />
          </div>

          <div className="Spsylte col-lg-4 col-md-6 col-sm-12">
            <div className="office"> Nos spécialités</div>
            <div className="spsl">implantologie</div>
            <div className="spsl">orthodontie</div>
            <div className="spsl">dentisterie esthétique</div>
            <div className="spsl">soins omnipratiques</div>
            <div className="spsl">blanchiment dentaire</div>
            <div className="spsl">pédodontie</div>
          </div>
          <div className="TimOpen col-lg-4 col-md-12 col-sm-12">
            <div className="calendar"> Time Opens</div>
            <div className="days-Open">
              {data.timeOpenLundi} TO {data.timeOpenVendredi}
            </div>
            <div className="time"> {data.timeOpen} </div>
            <div className="days-Open">{data.timeOpenSamedi}</div>
            <div className="time">{data.timeOSamedi}</div>
          </div>
        </div>
      </div>
      <div className="fotr-final row ">
        <div className="col">&copy;DR.KASSER SOKEINA 2024</div>
        <div className="col">zklmmmmmmm@gmail.com</div>
        <div className="col"> hay kmale block d</div>
      </div>
    </>
  );
}
