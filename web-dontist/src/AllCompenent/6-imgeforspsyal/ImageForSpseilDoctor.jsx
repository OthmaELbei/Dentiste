import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useEffect } from "react";
import Aos from "aos";
import "./imageforspesiel.css";
import "aos/dist/aos.css";
import { Image } from "antd";
import TitleForAll from "../TitleForAll";
import Mydata from "../../MoxsData/DatafiristPaje.json";

const images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpWZp3BUXVX2zOB-e2tIxuwjji3_A5enZcKA&usqp=CAU",
  //...
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuzkOEj4EZ3J5fSrkTN6DKfXOtl8Y0WlSkUw&usqp=CAU",

  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMiF5-lPISNCdAPenEIEsPQc-HzYbezGC3UQ&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtGil-LRrjYkS_fkpsXIq49eJp3H8VLpiUKg&usqp=CAU",
  // ...
  "https://cdn.pixabay.com/photo/2014/03/14/16/56/orthodontist-287285_640.jpg",
  "https://www.orthodontisteenligne.com/wp-content/uploads/2017/06/expansion-extraction-orthodontie-sherbrooke-123170-JB241-1.jpg",
  "https://dr-richard-seaton.chirurgiens-dentistes.fr/wp-content/uploads/Implantologie-dentaire-Draveil.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwGFB1p9KsUTxmYWOc_1_8ckpWnGpsuKJu1w&usqp=CAU",

  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg25968y0ZSCwI_AyELZQHxzN-nhKjV6gdn4Esi3dkMAwtXYZ-QsbdsL3UPRTCoxrlVnU&usqp=CAU",
];

export default function ImageForSpseilDoctor() {
  const Data = Mydata.Data;
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div id="Nos-Spesielt" className=" spesielimage  ">
      <TitleForAll>{Data.Spécialités}</TitleForAll>
      <ResponsiveMasonry
        className="contener"
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
      >
        <Masonry>
          {images.map((image, i) => (
            <Image
              data-aos="zoom-in-right"
              data-aos-duration="45000"
              data-aos-easing="linear"
              className="imgss"
              key={i}
              src={image}
              style={{
                transition: "2s",
                width: "100%",
                display: "block",
                padding: "14px",
              }}
              alt=""
            ></Image>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
}
