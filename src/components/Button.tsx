import { MouseEventHandler, ReactNode } from "react";

interface Props {
  children: string;
  color: "primary" | "secondary" | "success" | "danger";
  onClick: () => void;
}
const Button = ({ children, color, onClick }: Props) => {
  return (
    <button
      className={"btn btn-" + color}
      data-bs-dismiss="alert"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
