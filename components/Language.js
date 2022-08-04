const Language = ({ language }) => {
  return (
    <div
      data-tooltip={"Language"}
      data-tooltip-location="bottom"
      className="h-6 px-2 py-1 text-xs font-bold text-red-700 align-middle bg-yellow-500 rounded-md border-21 border-red-9001 bg-amber-5001"
    >
      {language}
    </div>
  );
};
export default Language;
