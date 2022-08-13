import styles from "../styles/BookTicket.module.css";

const BookTicketButton = () => {
  return (
    <div className="grid grid-cols-3 mt-4">
      <div className="col-span-2 overflow-hidden rounded-tl-md rounded-bl-md">
        <div className="p-1 text-sm text-white bg-red-500">
          Startup <span>Cinema</span>
        </div>
        <div className="p-2 text-xs text-black bg-gray-400">
          <div>HOW I MET YOUR MOTHER</div>
          <div className="text-xs text-gray-500">Movie</div>
        </div>
      </div>
      <div className="col-span-1 overflow-hidden rounded-tr-md rounded-br-md">
        <div className="p-1 text-sm text-white bg-red-500">Book</div>
        <div className="p-2 text-xs text-black bg-gray-400">
          <h3>156</h3>
          <span>seat</span>
        </div>
        <div className="barcode"></div>
      </div>
    </div>
  );
};
export default BookTicketButton;
