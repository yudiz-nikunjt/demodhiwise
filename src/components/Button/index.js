import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder22: "rounded-radius22",
  RoundedBorder29: "rounded-radius29",
};
const variants = {
  OutlineGray900: "outline outline-[2px] outline-gray_900",
  OutlineBlack9002d: "bg-gradient  shadow-bs text-white_A700",
};
const sizes = { sm: "p-[14px]", md: "p-[20px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["RoundedBorder22", "RoundedBorder29"]),
  variant: PropTypes.oneOf(["OutlineGray900", "OutlineBlack9002d"]),
  size: PropTypes.oneOf(["sm", "md"]),
};
Button.defaultProps = {
  className: "",
  shape: "RoundedBorder22",
  variant: "OutlineGray900",
  size: "sm",
};

export { Button };
