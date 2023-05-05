import Lottie from "react-lottie";
import animationData from "../../src/assets/globeF.json";

function Globe({ width, height, className}) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie 
    options={defaultOptions} 
    height={height} 
    width={width} 
    className={className}
    
    />;
}

export default Globe;
