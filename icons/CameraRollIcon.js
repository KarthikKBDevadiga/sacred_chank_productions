const CameraRollIcon = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      height="32px"
      viewBox="0 0 32 32"
      width="32px"
      fill="currentColor"
    >
      <circle cx="16" cy="16" r="15" stroke="#ffdf00" strokeWidth="2" />

      <circle cx="16" cy="9" r="3" stroke="#ffdf00" strokeWidth="1.5" />
      <circle cx="16" cy="23" r="3" stroke="#ffdf00" strokeWidth="1.5" />
      <circle cx="9" cy="16" r="3" stroke="#ffdf00" strokeWidth="1.5" />
      <circle cx="23" cy="16" r="3" stroke="#ffdf00" strokeWidth="1.5" />

      <circle cx="16" cy="16" r="2" fill="#ffdf00" />
    </svg>
  );
};
export default CameraRollIcon;
