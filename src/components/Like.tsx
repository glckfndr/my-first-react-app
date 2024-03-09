import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
interface Props {
  onClick: () => void;
  size: number;
  status: boolean;
}

function Like({ onClick, size, status }: Props) {
  const [colorStatus, setColorStatus] = useState(status);
  const changeColor = () => {
    setColorStatus(!colorStatus);
    onClick();
  };
  if (colorStatus)
    return <AiFillHeart size={size} color={"#ff9999"} onClick={changeColor} />;
  return <AiOutlineHeart size={size} onClick={changeColor} />;
}

export default Like;
