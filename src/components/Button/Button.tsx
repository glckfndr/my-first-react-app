import styles from './Button.module.css'

interface Props {
  children: string;
  color?: "primary" | "secondary" | "success" | "danger";
  onClick: () => void;
}
const Button = ({ children, color, onClick }: Props) => {
  return (
    <button
      className={[styles.btn, styles['btn-' + color]].join(' ')}
      data-bs-dismiss="alert"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
