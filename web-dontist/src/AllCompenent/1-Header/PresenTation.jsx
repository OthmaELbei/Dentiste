import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MyData from "../../MoxsData/DatafiristPaje.json";
import "./header.css";
// import Aos from "aos";

export default function PresenTation() {
  const [schow, setSchow] = useState(true);
  const data = MyData.Data;
  useEffect(() => {
    setTimeout(() => {
      setSchow(false);
    }, 1000);
  }, []);

  return (
    <>
      <div
        style={{
          position: "absolute",
          zIndex: "1100",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          transition: "1s",
        }}
      >
        <AnimatePresence>
          {schow && (
            <motion.div
              className="prstation"
              exit={{
                width: "100vw",
                height: "100vh",
                opacity: 0,
                borderRadius: "0",
                top: "0",
                left: "0",
              }}
              transition={{ duration: 1 }}
            >
              {data.Bonjour}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
