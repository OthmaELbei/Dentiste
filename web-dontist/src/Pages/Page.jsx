import Headers from "../AllCompenent/1-Header";
import Nav from "../AllCompenent/2-Nav";
import Meuns from "../AllCompenent/3-meun";
import TimeOpenDrdentist from "../AllCompenent/4-timeOpen";
import MapandComentpersonInGLMap from "../AllCompenent/5-Comment";

import ImageForSpseilDoctor from "../AllCompenent/6-imgeforspsyal/ImageForSpseilDoctor";
import Foter from "../AllCompenent/7-foter/Foter";
import Contect from "../AllCompenent/8-ContactDocter/Contect";
// import { Route, Routes, Link } from "react-router-dom";

export default function Page() {
  return (
    <>
      <Headers />
      <Nav />
      <Meuns />
      <ImageForSpseilDoctor />
      <MapandComentpersonInGLMap />
      <TimeOpenDrdentist />
      <Foter />
      <Contect />
    </>
  );
}
