import React, { MouseEvent } from "react";

interface HamburgerButtonProps {
  onClick: (event: MouseEvent<SVGSVGElement>) => void;
}

const HamburgerButton: React.FC<HamburgerButtonProps> = ({ onClick }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      <line x1="3" y1="12" x2="21" y2="12" style={{ stroke: "#174E2E" }} />
      <line x1="3" y1="6" x2="21" y2="6" style={{ stroke: "#174E2E" }} />
      <line x1="3" y1="18" x2="21" y2="18" style={{ stroke: "#174E2E" }} />
    </svg>
  );
};

export default HamburgerButton;
