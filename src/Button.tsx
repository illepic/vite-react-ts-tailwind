import React, { PropsWithChildren } from "react";
import clsx from "clsx";

type Props = {
  active?: boolean;
  clickHandler?: () => void;
};

const Button: React.FC<PropsWithChildren<Props>> = ({
  active,
  clickHandler,
  children,
}) => (
  <button
    className={clsx("font-bold text-white bg-blue-400 rounded-md p-2 mx-2", {
      "bg-blue-900": active,
    })}
    onClick={clickHandler}
  >
    {children}
  </button>
);

export default Button;
