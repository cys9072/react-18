import Lottie from "lottie-react";
import groovyWalkAnimation from "../assets/lottie/hamster.json";
import { useEffect, useRef, useState } from "react";

const style = {
  height: 300,
};

//   const interactivity = {
//     mode: "cursor",
//     actions: [
//       {
//         position: { x: [0, 1], y: [-1, 2] },
//         type: "seek",
//         frames: [0, 180],
//       },
//     ],
//   };
const Test = () => {
  const [isPlay, setIsPlay] = useState(false);
  const lottieRef = useRef();

  useEffect(() => {
    console.log("start");
    if (lottieRef?.current) {
      console.log("lottieRef: ", lottieRef);
      //   lottieRef?.current.stop();
      console.log("frame", lottieRef?.current.getDuration(true));
      console.log("second", lottieRef?.current.getDuration(false));
      console.log(180 / 3);
      lottieRef?.current.goToAndPlay({ value: 170, isFrame: true });
    }
  }, []);

  const startPoint = {
    value: 10,
    isFrame: true,
  };

  const endPoint = {
    value: 10,
    isFrame: true,
  };

  return (
    <div>
      <Lottie lottieRef={lottieRef} style={style} animationData={groovyWalkAnimation} />
      <button type="button"> play</button>
      <button type="button"> stop</button>
    </div>
  );
};

export default Test;
