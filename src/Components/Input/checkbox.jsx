import React from "react";
import styled from "styled-components";

const Checkbox = ({ title, id }) => {
  return (
    <StyledWrapper className={`checkbox-wrapper-${id}`}>
      <input type="checkbox" id={`cbx-${id}`} className="inp-cbx" />
      <label htmlFor={`cbx-${id}`} className="cbx">
        <span>
          <svg viewBox="0 0 12 10" height="10px" width="12px">
            <polyline points="1.5 6 4.5 9 10.5 1" />
          </svg>
        </span>
        <span>{title}</span>
      </label>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`   

  & input[type="checkbox"] {
    display: none;
    visibility: hidden;
  }

  & .cbx {
    margin: auto;
    -webkit-user-select: none;
    user-select: none;
    cursor: pointer;
  }
  & .cbx span {
    display: inline-block;
    vertical-align: middle;
    transform: translate3d(0, 0, 0);
  }
  & .cbx span:first-child {
    position: relative;
    width: 18px;
    height: 18px;
    border-radius: 3px;
    transform: scale(1);
    vertical-align: middle;
    border: 1px solid #9098a9;
    transition: all 0.2s ease;
  }
  & .cbx span:first-child svg {
    position: absolute;
    top: 3px;
    left: 2px;
    fill: none;
    stroke: #ffffff;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 16px;
    stroke-dashoffset: 16px;
    transition: all 0.3s ease;
    transition-delay: 0.1s;
    transform: translate3d(0, 0, 0);
  }
  & .cbx span:first-child:before {
    content: "";
    width: 100%;
    height: 100%;
    background: #506eec;
    display: block;
    transform: scale(0);
    opacity: 1;
    border-radius: 50%;
  }
  & .cbx span:last-child {
    padding-left: 8px;
  }
  & .cbx:hover span:first-child {
    border-color: #506eec;
  }

  & .inp-cbx:checked + .cbx span:first-child {
    background: #506eec;
    border-color: #506eec;
    animation: wave-46 0.4s ease;
  }
  & .inp-cbx:checked + .cbx span:first-child svg {
    stroke-dashoffset: 0;
  }
  & .inp-cbx:checked + .cbx span:first-child:before {
    transform: scale(3.5);
    opacity: 0;
    transition: all 0.6s ease;
  }

  @keyframes wave-46 {
    50% {
      transform: scale(0.9);
    }
  }
`;

export default Checkbox;
