import { Link } from "react-router-dom";
import MyData from "../../MoxsData/DatafiristPaje.json";

export default function MenuSpsylete(p) {
  const data = MyData.Data;
  return (
    <>
      <div className={p.className}>
        <Link to={"/"}>
          <li>{data.Header1li}</li>
        </Link>
        <Link to="/PImplantologie">
          <li>{data.Header2li}</li>
        </Link>
        <Link to={"/Orthodontie"}>
          <li>{data.Header3li}</li>
        </Link>
        <Link to={"/DentisterieEsthétique"}>
          <li>{data.Header4li}</li>
        </Link>
        <Link to={"/SoinsOmnipratiques"}>
          <li>{data.Header5li}</li>
        </Link>{" "}
        <Link to={"/BlanchimentDentaire"}>
          <li>{data.Header6li}</li>
        </Link>
        <Link to={"/PdDontaire"}>
          <li>{data.Header7li}</li>
        </Link>
      </div>
    </>
  );
}
