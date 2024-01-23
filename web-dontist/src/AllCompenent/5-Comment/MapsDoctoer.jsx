import TitleForAll from "../TitleForAll";
import Comment from "./comment";
import "./comment.css";

export default function MapsDoctoer() {
  return (
    <>
      <TitleForAll>
        <h1>Les patients parlent de nous</h1>
      </TitleForAll>

      <div className="Mapimage">
        <Comment />
        <img src="/Map.png" alt="Map" />
      </div>
    </>
  );
}
