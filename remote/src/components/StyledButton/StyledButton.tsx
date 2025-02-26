import { FC, useState } from "react";
import "./StyledButton.css";

const StyledButton: FC = () => {
  const [count, setCount] = useState(0);

  return (
    <button
      className="styled-btn"
      onClick={() => setCount((count) => count + 1)}
    >
      count is {count}
    </button>
  );
};

export default StyledButton;
