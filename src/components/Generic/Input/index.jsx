import React, { forwardRef } from "react";
import { Container, Wrapper, Icon } from "./style";



export const Input = forwardRef(
  (
    {
      type,
      icon,
      onChange,
      placeholder,
      name,
      value,
      defaultValue,
      width,
      height,
    },
    ref
  ) => {
    return (
      <Wrapper>
        <Icon>{icon}</Icon>
        <Container
          ref={ref}
          icon={icon}
          placeholder={placeholder}
          name={name}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          type={type}
          width={width}
          height={height}
        />
      </Wrapper>
    );
  }
);

export default Input;
