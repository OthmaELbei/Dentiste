import { motion } from "framer-motion";
import "./header.css";
import MyData from "../../MoxsData/DatafiristPaje.json";

export default function LogoHeader() {
  const data = MyData.Data;
  return (
    <>
      {" "}
      <motion.div
        style={{
          display: "flex",
          position: "absolute",
          zIndex: "11",
          top: "20px",
        }}
        initial={{
          left: "-100px",
          top: "-200px",
        }}
        animate={{
          top: "20px",
          left: "10px",
          position: "fixed",
        }}
        transition={{
          duration: 2,
        }}
      >
        <img
          style={{ width: "80px", height: "60px" }}
          src="/Logo/LogoDontest.png"
          alt="LogoDontest"
        />
        <h1
          style={{
            fontSize: "20px",
            marginLeft: "-60px",
            padding: "0",
            color: " #5196ce",
          }}
        >
          {data.Logo}
        </h1>
        <span style={{ fontSize: "50px", marginTop: "0px", color: "#5196ce" }}>
          {data.LastLogo}
        </span>
      </motion.div>
    </>
  );
}
