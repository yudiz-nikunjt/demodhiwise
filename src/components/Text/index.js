import React from "react";
const variantClasses = {
  h1: "font-normal sm:text-[42px] md:text-[48px] text-[56px]",
  h2: "font-normal sm:text-[38px] md:text-[44px] text-[48px]",
  h3: "font-normal sm:text-[15px] md:text-[29px] text-[40px]",
  h4: "font-bold text-[20px]",
  h5: "text-[18px]",
  h6: "text-[16px]",
  body1: "text-[14px]",
  body2: "font-normal text-[12px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
