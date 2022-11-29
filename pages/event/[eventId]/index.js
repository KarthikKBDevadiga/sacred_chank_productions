import { useEffect, useState } from "react";

import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import Metatag from "../../../components/Metatag";
import Constants from "../../../helpers/Constants";
import classNames from "../../../utils/classNames";
import { motion } from "framer-motion";
import { emailValidator, genericValidator } from "../../../helpers/validator";
import LoadingDialog from "../../../components/dialogs/LoadingDialog";

const Ticket = ({ event, unavailable }) => {
  const [name, setName] = useState();
  const [nameError, setNameError] = useState();
  const [email, setEmail] = useState();
  const [emailError, setEmailError] = useState();
  const [loadingDialog, setLoadingDialog] = useState(false);
  const [selectedSeats, setSelectedSeats] = useState([]);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    console.log(unavailable);
    console.log("Here");
    // const allRows = [];
    // event.layout.map((b) => (allRows = allRows.concat(b.rows)));
    // console.log(allRows);
    const total = 0;
    selectedSeats.map((seat) => {
      const block = event.layout.find((b) =>
        b.rows.find((r) => r.name == seat.split(":")[0])
      );
      total += block.price;
    });
    setTotalPrice(total);
  }, [selectedSeats]);
  const buyNow = () => {
    let isValid = true;
    isValid = genericValidator(name, setNameError, "Name") && isValid;
    isValid = emailValidator(email, setEmailError) && isValid;
    if (totalPrice == 0 || !isValid) return;
    setLoadingDialog(true);
    const seats = selectedSeats.map((seat) => {
      const seatSlit = seat.split(":");
      return {
        row: seatSlit[0],
        number: seatSlit[1],
      };
    });
    const body = {
      user: {
        name,
        email,
      },
      seats,
    };
    console.log(body);
    fetch(process.env.BASE_API_URL + "event/" + event._id + "/checkout", {
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        console.log(res.status);
        setLoadingDialog(false);
        return res.json();
      })
      .then((json) => {
        console.log(json);
        setLoadingDialog(false);
        window.location.href = json.session.url;
      });
  };

  return (
    <>
      <Metatag
        title={event.movie.title + " Book Ticket"}
        description={
          "Sacred Chank Productions Movie Ticket Booking " + event.movie.title
        }
        keywords={
          "Sacred Chank Productions Movie Ticket Booking " + event.movie.title
        }
      />
      <div className="min-h-screen bg-slate-900">
        {/* Navbar */}
        <Header scrolled={false} page="about_us" />

        <main className="w-full overflow-hidden -z-10">
          <div className="grid h-full max-w-3xl grid-cols-1 gap-4 mx-auto my-24 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
            <div className="h-full space-y-4 lg:col-start-1 lg:col-span-2">
              <div className="flex flex-col gap-2 mx-auto">
                {event.layout.map((block, i) => {
                  return (
                    <div key={i} className="mx-auto w-max">
                      <div className="flex justify-between pt-4 pb-2 pl-8 text-white">
                        <div className="text-sm w-max">{block.title}</div>
                        <div>€{block.price}</div>
                      </div>

                      <div className="h-[1px] bg-white" />
                      <div className="flex flex-col gap-2 mt-3">
                        {block.rows.map((row, j) => {
                          return (
                            <div className="flex gap-2 mx-auto" key={j}>
                              <div className="flex items-center justify-center w-6 h-6 text-sm text-white ">
                                {row.name}
                              </div>
                              <dib className="flex gap-2">
                                {row.seats != null &&
                                  row.seats.map((i, k) => {
                                    if (i.type == "SEAT") {
                                      return (
                                        <div
                                          key={k}
                                          className={classNames(
                                            "flex items-center justify-center w-6 h-6 text-xs duration-500 border rounded-sm ",
                                            !unavailable.includes(
                                              row.name + ":" + i.number
                                            )
                                              ? "border-white hover:border-yellow-500 hover:bg-yellow-500 hover:text-slate-900 cursor-pointer text-white "
                                              : "bg-slate-700 border-slate-700 text-slate-900 select-none",
                                            selectedSeats.includes(
                                              row.name + ":" + i.number
                                            )
                                              ? "bg-yellow-500 hover:bg-yellow-600 hover:border-yellow-600 border-yellow-500 text-slate-900"
                                              : ""
                                          )}
                                          onClick={() => {
                                            if (
                                              unavailable.includes(
                                                row.name + ":" + i.number
                                              )
                                            )
                                              return;
                                            const temp = selectedSeats.map(
                                              (s) => s
                                            );
                                            if (
                                              !temp.includes(
                                                row.name + ":" + i.number
                                              )
                                            ) {
                                              temp.push(
                                                row.name + ":" + i.number
                                              );
                                            } else {
                                              const index = temp.indexOf(
                                                row.name + ":" + i.number
                                              );
                                              console.log(index);
                                              if (index > -1)
                                                temp.splice(index, 1);
                                            }
                                            console.log(temp);
                                            setSelectedSeats(temp);
                                          }}
                                        >
                                          {i.number}
                                        </div>
                                      );
                                    } else
                                      return <div className="w-6 h-6"></div>;
                                  })}
                              </dib>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
                <div className="mx-auto mt-8 text-white animate-screen">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20px"
                    viewBox="0 0 200 20"
                    width="200px"
                    fill="currentColor"
                  >
                    <path d="M 0 0 L 200 0 L 180 20 L 20 20 Z" />
                  </svg>
                  <div className="text-center">All eyes this way please!</div>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-md shadow-md bg-slate-700 lg:col-start-3 lg:col-span-1 h-max">
              <img className="w-full" src={event.movie.poster.landscape} />
              <div className="p-4">
                <div className="text-xl text-white">{event.movie.title}</div>
              </div>
              <div className="h-[1px] bg-slate-300 rounded-sm"></div>
              <div className="p-4 text-base text-white">
                <div className="">
                  {event.theater.name}, {event.theater.location}
                </div>
                <div className="text-sm">
                  {event.time}, {event.date}
                </div>
              </div>
              <div className="h-[1px] bg-slate-300 rounded-sm"></div>
              <div className="flex flex-wrap gap-2 p-4 text-base text-white">
                {selectedSeats.length > 0 ? (
                  selectedSeats.map((seat, i) => {
                    return (
                      <div
                        key={i}
                        className="px-2 py-0.5 text-sm border rounded-full border-white hover:bg-white duration-500 hover:text-slate-900 cursor-pointer"
                      >
                        {seat}
                      </div>
                    );
                  })
                ) : (
                  <div className="px-2 py-0.5 text-sm border border-dashed rounded-full border-white select-none">
                    Select Seats
                  </div>
                )}
              </div>
              <div className="h-[1px] bg-slate-300 rounded-sm"></div>
              <div className="flex flex-col gap-4 p-4">
                <div className="flex flex-wrap gap-2 text-base text-white">
                  <div className={classNames("relative w-full  col-span-2")}>
                    <input
                      onFocus={() => {
                        setNameError();
                      }}
                      className={classNames(
                        "w-full py-2 pl-3 text-sm text-white duration-200 bg-transparent border-2  rounded-md outline-none focus:border-2 placeholder:text-transparent peer ",
                        nameError
                          ? "border-red-700 focus:border-red-500"
                          : "border-gray-500 focus:border-gray-100"
                      )}
                      onChange={(event) => {
                        setName(event.target.value);
                      }}
                      name={"name"}
                      id={"name"}
                      type="name"
                      placeholder="Name"
                    />
                    <label
                      htmlFor={"name"}
                      className={classNames(
                        "absolute block px-2 text-xs  duration-200 bg-gray-700  -top-2 left-4",
                        " peer-focus:-top-2 peer-focus:left-4 peer-focus:bg-gray-700 peer-focus:text-xs ",
                        "peer-placeholder-shown:top-2 peer-placeholder-shown:left-2 peer-placeholder-shown:text-base peer-placeholder-shown:bg-transparent",
                        nameError
                          ? "text-red-700 peer-focus:text-red-500"
                          : " text-gray-500 peer-focus:text-white "
                      )}
                    >
                      Name
                    </label>
                    {nameError && (
                      <div className="absolute px-2 text-xs text-red-700 bg-gray-700 -bottom-1.5 right-4 peer-focus:text-red-500">
                        {nameError}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 text-base text-white">
                  <div className={classNames("relative w-full")}>
                    <input
                      onFocus={() => {
                        setEmailError();
                      }}
                      className={classNames(
                        "w-full py-2 pl-3 text-sm text-white duration-200 bg-transparent border-2  rounded-md outline-none focus:border-2 placeholder:text-transparent peer ",
                        emailError
                          ? "border-red-700 focus:border-red-500"
                          : "border-gray-500 focus:border-gray-100"
                      )}
                      onChange={(event) => {
                        setEmail(event.target.value);
                      }}
                      name={"email"}
                      id={"email"}
                      type="email"
                      placeholder="Email"
                    />
                    <label
                      htmlFor={"email"}
                      className={classNames(
                        "absolute block px-2 text-xs  duration-200 bg-gray-700  -top-2 left-4",
                        " peer-focus:-top-2 peer-focus:left-4 peer-focus:bg-gray-700 peer-focus:text-xs ",
                        "peer-placeholder-shown:top-2 peer-placeholder-shown:left-2 peer-placeholder-shown:text-base peer-placeholder-shown:bg-transparent",
                        emailError
                          ? "text-red-700 peer-focus:text-red-500"
                          : " text-gray-500 peer-focus:text-white "
                      )}
                    >
                      Email
                    </label>
                    {emailError && (
                      <div className="absolute px-2 text-xs text-red-700 bg-gray-700 -bottom-1.5 right-4 peer-focus:text-red-500">
                        {emailError}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="h-[1px] bg-slate-300 rounded-sm"></div>
              <div className="flex justify-between gap-2 p-4 text-base text-white">
                <div>Total Price</div>
                <div className="text-lg">€{totalPrice}</div>
              </div>
              <div
                className="px-4 py-2 text-center duration-500 bg-yellow-500 cursor-pointer text-slate-900 hover:bg-yellow-600"
                onClick={buyNow}
              >
                Buy Now
              </div>
            </div>
          </div>

          <div className="relative max-w-3xl mx-auto "></div>
        </main>
      </div>
      <LoadingDialog showDialog={loadingDialog} />
    </>
  );
};
export async function getServerSideProps(context) {
  const event = await fetch(
    process.env.BASE_API_URL + "event/" + context.params.eventId
  )
    .then((res) => res.json())
    .then((json) => json);

  const tickets = await fetch(
    process.env.BASE_API_URL +
      "event/" +
      context.params.eventId +
      "/tickets/booked"
  )
    .then((res) => res.json())
    .then((json) => json);

  const unavailable = [];
  tickets.map((t) => {
    unavailable.push(t.row + ":" + t.number);
  });
  return {
    props: {
      event,
      unavailable,
    },
  };
}

export default Ticket;
