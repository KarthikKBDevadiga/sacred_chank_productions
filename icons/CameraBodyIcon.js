const CameraBodyIcon = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      height="40px"
      viewBox="0 0 80 40"
      width="80px"
      fill="currentColor"
    >
      <rect
        x="1"
        y="1"
        rx="5"
        ry="5"
        width="62"
        height="38"
        strokeWidth={2}
        stroke="#ffdf00"
      />
      <rect
        x="6"
        y="6"
        rx="2"
        ry="2"
        width="29"
        height="16"
        strokeWidth={2}
        stroke="#ffdf00"
      />
      <rect x="8" y="26" rx="2" ry="2" width="6" height="3" fill="#ffdf00" />
      <rect x="17" y="26" rx="2" ry="2" width="6" height="3" fill="#ffdf00" />
      <rect x="26" y="26" rx="2" ry="2" width="6" height="3" fill="#ffdf00" />

      <rect
        x="41"
        y="5"
        rx="3"
        ry="3"
        width="6"
        height="30"
        strokeWidth={2}
        stroke="#ffdf00"
      />
      <rect
        x="52"
        y="5"
        rx="3"
        ry="3"
        width="6"
        height="18"
        strokeWidth={2}
        stroke="#ffdf00"
      />
      <line
        x1="55"
        y1="24"
        x2="55"
        y2="34"
        strokeWidth={2}
        stroke="#ffdf00"
        strokeLinecap="round"
      />
      <rect
        x="63"
        y="4"
        rx="1"
        ry="1"
        width="16"
        height="16"
        strokeWidth={2}
        stroke="#ffdf00"
      />
      <rect
        x="71"
        y="2"
        rx="4"
        ry="4"
        width="8"
        height="20"
        strokeWidth={2}
        stroke="#ffdf00"
      />
    </svg>
  );
};
export default CameraBodyIcon;
