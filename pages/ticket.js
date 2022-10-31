import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Metatag from "../components/Metatag";
import classNames from "../utils/classNames";

const row = [
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
];

const layout = [
  {
    rowName: "A",
    rowData: [
      {
        type: "seat",
        seatNumber: "1",
        isAvailable: false,
      },
      {
        type: "seat",
        seatNumber: "2",
        isAvailable: true,
      },
      {
        type: "seat",
        seatNumber: "3",
        isAvailable: true,
      },
      {
        type: "seat",
        seatNumber: "4",
        isAvailable: true,
      },
      {
        type: "seat",
        seatNumber: "5",
        isAvailable: true,
      },
      {
        type: "space",
        seatNumber: "11",
        isAvailable: true,
      },
      {
        type: "seat",
        seatNumber: "6",
        isAvailable: true,
      },
      {
        type: "seat",
        seatNumber: "7",
        isAvailable: true,
      },
      {
        type: "seat",
        seatNumber: "8",
        isAvailable: true,
      },
      {
        type: "seat",
        isAvailable: true,
        seatNumber: "9",
      },
      {
        type: "seat",
        seatNumber: "10",
        isAvailable: true,
      },
      {
        type: "seat",
        seatNumber: "11",
        isAvailable: true,
      },
      {
        type: "seat",
        seatNumber: "12",
        isAvailable: true,
      },
      {
        type: "seat",
        seatNumber: "13",
        isAvailable: true,
      },
      {
        type: "seat",
        seatNumber: "14",
        isAvailable: true,
      },
    ],
    rowType: "seat",
  },
  {
    rowName: "B",
    rowData: [
      {
        type: "seat",
        seatNumber: "1",
        isAvailable: true,
      },
      {
        type: "seat",
        seatNumber: "2",
        isAvailable: true,
      },
      {
        type: "seat",
        seatNumber: "3",
        isAvailable: true,
      },
      {
        type: "seat",
        seatNumber: "4",
        isAvailable: true,
      },
      {
        type: "seat",
        seatNumber: "5",
        isAvailable: true,
      },
      {
        type: "space",
        seatNumber: "11",
        isAvailable: true,
      },
      {
        type: "seat",
        seatNumber: "6",
        isAvailable: true,
      },
      {
        type: "seat",
        seatNumber: "7",
        isAvailable: true,
      },
      {
        type: "seat",
        seatNumber: "8",
        isAvailable: true,
      },
      {
        type: "seat",
        isAvailable: true,
        seatNumber: "9",
      },
      {
        type: "seat",
        seatNumber: "10",
        isAvailable: true,
      },
      {
        type: "seat",
        seatNumber: "11",
        isAvailable: true,
      },
      {
        type: "seat",
        seatNumber: "12",
        isAvailable: true,
      },
      {
        type: "seat",
        seatNumber: "13",
        isAvailable: true,
      },
      {
        type: "seat",
        seatNumber: "14",
        isAvailable: true,
      },
    ],
    rowType: "seat",
  },
  {
    rowType: "space",
  },
  {
    rowName: "C",
    rowData: [
      {
        type: "seat",
        seatNumber: "1",
        isAvailable: true,
      },
      {
        type: "seat",
        seatNumber: "2",
        isAvailable: true,
      },
      {
        type: "seat",
        seatNumber: "3",
        isAvailable: true,
      },
      {
        type: "seat",
        seatNumber: "4",
        isAvailable: true,
      },
      {
        type: "seat",
        seatNumber: "5",
        isAvailable: true,
      },
      {
        type: "space",
        seatNumber: "11",
        isAvailable: true,
      },
      {
        type: "seat",
        seatNumber: "6",
        isAvailable: true,
      },
      {
        type: "seat",
        seatNumber: "7",
        isAvailable: true,
      },
      {
        type: "seat",
        seatNumber: "8",
        isAvailable: true,
      },
      {
        type: "seat",
        isAvailable: true,
        seatNumber: "9",
      },
      {
        type: "seat",
        seatNumber: "10",
        isAvailable: true,
      },
      {
        type: "seat",
        seatNumber: "11",
        isAvailable: true,
      },
      {
        type: "seat",
        seatNumber: "12",
        isAvailable: true,
      },
      {
        type: "seat",
        seatNumber: "13",
        isAvailable: true,
      },
      {
        type: "seat",
        seatNumber: "14",
        isAvailable: true,
      },
    ],
    rowType: "seat",
  },
  {
    rowName: "D",
    rowData: [
      {
        type: "seat",
        seatNumber: "1",
        isAvailable: true,
      },
      {
        type: "seat",
        seatNumber: "2",
        isAvailable: true,
      },
      {
        type: "seat",
        seatNumber: "3",
        isAvailable: true,
      },
      {
        type: "seat",
        seatNumber: "4",
        isAvailable: true,
      },
      {
        type: "seat",
        seatNumber: "5",
        isAvailable: true,
      },
      {
        type: "space",
        seatNumber: "11",
        isAvailable: true,
      },
      {
        type: "seat",
        seatNumber: "6",
        isAvailable: true,
      },
      {
        type: "seat",
        seatNumber: "7",
        isAvailable: true,
      },
      {
        type: "seat",
        seatNumber: "8",
        isAvailable: true,
      },
      {
        type: "seat",
        isAvailable: true,
        seatNumber: "9",
      },
      {
        type: "seat",
        seatNumber: "10",
        isAvailable: true,
      },
      {
        type: "seat",
        seatNumber: "11",
        isAvailable: true,
      },
      {
        type: "seat",
        seatNumber: "12",
        isAvailable: true,
      },
      {
        type: "seat",
        seatNumber: "13",
        isAvailable: true,
      },
      {
        type: "seat",
        seatNumber: "14",
        isAvailable: true,
      },
    ],
    rowType: "seat",
  },
  {
    rowName: "E",
    rowData: [
      {
        type: "seat",
        seatNumber: "1",
        isAvailable: true,
      },
      {
        type: "seat",
        seatNumber: "2",
        isAvailable: true,
      },
      {
        type: "seat",
        seatNumber: "3",
        isAvailable: true,
      },
      {
        type: "seat",
        seatNumber: "4",
        isAvailable: true,
      },
      {
        type: "seat",
        seatNumber: "5",
        isAvailable: true,
      },
      {
        type: "space",
        seatNumber: "11",
        isAvailable: true,
      },
      {
        type: "seat",
        seatNumber: "6",
        isAvailable: true,
      },
      {
        type: "seat",
        seatNumber: "7",
        isAvailable: true,
      },
      {
        type: "seat",
        seatNumber: "8",
        isAvailable: true,
      },
      {
        type: "seat",
        isAvailable: true,
        seatNumber: "9",
      },
      {
        type: "seat",
        seatNumber: "10",
        isAvailable: true,
      },
      {
        type: "seat",
        seatNumber: "11",
        isAvailable: true,
      },
      {
        type: "seat",
        seatNumber: "12",
        isAvailable: true,
      },
      {
        type: "seat",
        seatNumber: "13",
        isAvailable: true,
      },
      {
        type: "seat",
        seatNumber: "14",
        isAvailable: true,
      },
    ],
    rowType: "seat",
  },
  {
    rowName: "F",
    rowData: [
      {
        type: "seat",
        seatNumber: "1",
        isAvailable: true,
      },
      {
        type: "seat",
        seatNumber: "2",
        isAvailable: true,
      },
      {
        type: "seat",
        seatNumber: "3",
        isAvailable: true,
      },
      {
        type: "seat",
        seatNumber: "4",
        isAvailable: true,
      },
      {
        type: "seat",
        seatNumber: "5",
        isAvailable: true,
      },
      {
        type: "space",
        seatNumber: "11",
        isAvailable: true,
      },
      {
        type: "seat",
        seatNumber: "6",
        isAvailable: true,
      },
      {
        type: "seat",
        seatNumber: "7",
        isAvailable: true,
      },
      {
        type: "seat",
        seatNumber: "8",
        isAvailable: true,
      },
      {
        type: "seat",
        isAvailable: true,
        seatNumber: "9",
      },
      {
        type: "seat",
        seatNumber: "10",
        isAvailable: true,
      },
      {
        type: "seat",
        seatNumber: "11",
        isAvailable: true,
      },
      {
        type: "seat",
        seatNumber: "12",
        isAvailable: true,
      },
      {
        type: "seat",
        seatNumber: "13",
        isAvailable: true,
      },
      {
        type: "seat",
        seatNumber: "14",
        isAvailable: true,
      },
    ],
    rowType: "seat",
  },
  {
    rowName: "G",
    rowData: [
      {
        type: "seat",
        seatNumber: "1",
        isAvailable: true,
      },
      {
        type: "seat",
        seatNumber: "2",
        isAvailable: true,
      },
      {
        type: "seat",
        seatNumber: "3",
        isAvailable: true,
      },
      {
        type: "seat",
        seatNumber: "4",
        isAvailable: true,
      },
      {
        type: "seat",
        seatNumber: "5",
        isAvailable: true,
      },
      {
        type: "space",
        seatNumber: "11",
        isAvailable: true,
      },
      {
        type: "seat",
        seatNumber: "6",
        isAvailable: true,
      },
      {
        type: "seat",
        seatNumber: "7",
        isAvailable: true,
      },
      {
        type: "seat",
        seatNumber: "8",
        isAvailable: true,
      },
      {
        type: "seat",
        isAvailable: true,
        seatNumber: "9",
      },
      {
        type: "seat",
        seatNumber: "10",
        isAvailable: true,
      },
      {
        type: "seat",
        seatNumber: "11",
        isAvailable: true,
      },
      {
        type: "seat",
        seatNumber: "12",
        isAvailable: true,
      },
      {
        type: "seat",
        seatNumber: "13",
        isAvailable: true,
      },
      {
        type: "seat",
        seatNumber: "14",
        isAvailable: true,
      },
    ],
    rowType: "seat",
  },
  {
    rowName: "H",
    rowData: [
      {
        type: "seat",
        seatNumber: "1",
        isAvailable: true,
      },
      {
        type: "seat",
        seatNumber: "2",
        isAvailable: true,
      },
      {
        type: "seat",
        seatNumber: "3",
        isAvailable: true,
      },
      {
        type: "seat",
        seatNumber: "4",
        isAvailable: true,
      },
      {
        type: "seat",
        seatNumber: "5",
        isAvailable: true,
      },
      {
        type: "space",
        seatNumber: "11",
        isAvailable: true,
      },
      {
        type: "seat",
        seatNumber: "6",
        isAvailable: true,
      },
      {
        type: "seat",
        seatNumber: "7",
        isAvailable: true,
      },
      {
        type: "seat",
        seatNumber: "8",
        isAvailable: true,
      },
      {
        type: "seat",
        isAvailable: true,
        seatNumber: "9",
      },
      {
        type: "seat",
        seatNumber: "10",
        isAvailable: true,
      },
      {
        type: "seat",
        seatNumber: "11",
        isAvailable: true,
      },
      {
        type: "seat",
        seatNumber: "12",
        isAvailable: true,
      },
      {
        type: "seat",
        seatNumber: "13",
        isAvailable: true,
      },
      {
        type: "seat",
        seatNumber: "14",
        isAvailable: true,
      },
    ],
    rowType: "seat",
  },
];

const Ticket = () => {
  const [selectedSeat, setSelectedSeat] = useState([]);

  return (
    <>
      <Metatag
        title="About Us"
        description="About Us"
        keywords="Sacred Chank Productions,About Us"
      />
      <div className="min-h-screen bg-slate-900">
        {/* Navbar */}
        <Header scrolled={false} page="about_us" />

        <main className="w-full overflow-hidden -z-10">
          {/* <div className="relative h-full md:h-full">
            <img
              className="object-cover w-full h-full grayscale"
              src="https://png.pngtree.com/thumb_back/fh260/back_pic/03/54/58/35579acf3576e9d.jpg"
            />
          </div> */}

          <div className="relative max-w-3xl mx-auto mt-24">
            <div className="flex flex-col gap-2">
              {/* <div className="flex gap-1">
                {row.map((r, index) => {
                  return (
                    <div
                      key={index}
                      className={classNames(
                        " group",
                        index % 3 == 0 ? "cursor-pointer" : ""
                      )}
                    >
                      <div
                        className={classNames(
                          "w-5 h-3  text-xs text-center rounded-t-3xl mx-auto",
                          index % 3 == 0
                            ? "bg-slate-700 text-slate-500"
                            : "bg-slate-200 text-slate-700 group-hover:bg-blue-700 group-hover:text-white duration-500 "
                        )}
                      ></div>
                      <div
                        className={classNames(
                          "w-6 h-2 rounded-sm bg-slate-700",
                          index % 3 == 0
                            ? "bg-slate-700 text-slate-500"
                            : "bg-slate-200 text-slate-700 group-hover:bg-blue-700 group-hover:text-white duration-500 "
                        )}
                      ></div>
                      <div className="flex">
                        <div
                          className={classNames(
                            "w-1 h-1 ml-0.5 bg-slate-700 rounded-b-md",
                            index % 3 == 0
                              ? "bg-slate-700 text-slate-500"
                              : "bg-slate-200 text-slate-700 group-hover:bg-blue-700 group-hover:text-white duration-500 "
                          )}
                        ></div>
                        <div
                          className={classNames(
                            "w-1 h-1 ml-3 bg-slate-700 rounded-b-md",
                            index % 3 == 0
                              ? "bg-slate-700 text-slate-500"
                              : "bg-slate-200 text-slate-700 group-hover:bg-blue-700 group-hover:text-white duration-500 "
                          )}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex gap-1">
                {row.map((r, index) => {
                  return (
                    <div
                      key={index}
                      className={classNames(
                        "group",
                        index % 3 == 0 ? "" : "cursor-pointer"
                      )}
                    >
                      <div
                        className={classNames(
                          "w-3 h-2  text-xs text-center rounded-t-3xl mx-auto",
                          index % 3 == 0
                            ? "bg-slate-700 text-slate-500"
                            : "bg-slate-200 text-slate-700 group-hover:bg-green-700 group-hover:text-white duration-500 "
                        )}
                      ></div>
                      <div
                        className={classNames(
                          "w-4 h-1.5 rounded-t-sm bg-slate-700",
                          index % 3 == 0
                            ? "bg-slate-700 text-slate-500"
                            : "bg-slate-200 text-slate-700 group-hover:bg-green-700 group-hover:text-white duration-500 "
                        )}
                      ></div>
                      <div className="flex">
                        <div
                          className={classNames(
                            "w-1 h-0.5  bg-slate-700 rounded-b-md",
                            index % 3 == 0
                              ? "bg-slate-700 text-slate-500"
                              : "bg-slate-200 text-slate-700 group-hover:bg-green-700 group-hover:text-white duration-500 "
                          )}
                        ></div>
                        <div
                          className={classNames(
                            "w-1 h-0.5 ml-2 bg-slate-700 rounded-b-md",
                            index % 3 == 0
                              ? "bg-slate-700 text-slate-500"
                              : "bg-slate-200 text-slate-700 group-hover:bg-green-700 group-hover:text-white duration-500 "
                          )}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div> */}

              <div className="mx-auto mb-4 text-white animate-screen">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20px"
                  viewBox="0 0 200 20"
                  width="200px"
                  fill="currentColor"
                >
                  <path d="M 0 0 L 200 0 L 180 20 L 20 20 Z" />
                </svg>
              </div>
              {layout.map((row) => {
                if (row.rowType == "seat")
                  return (
                    <div className="flex gap-2 mx-auto">
                      <div className="flex justify-center w-4 h-4 text-sm text-white ">
                        {row.rowName}
                      </div>
                      <div className="flex gap-1">
                        {row.rowData.map((r, index) => {
                          if (r.type == "seat")
                            return (
                              <div
                                key={index}
                                className={classNames(
                                  "group",
                                  !r.isAvailable ? "" : "cursor-pointer"
                                )}
                                onClick={() => {
                                  console.log(row.rowName + "" + r.seatNumber);
                                }}
                              >
                                <div
                                  className={classNames(
                                    "w-3 h-2  text-xs text-center rounded-t-3xl mx-auto",
                                    !r.isAvailable
                                      ? "bg-slate-700 text-slate-500"
                                      : "bg-slate-200 text-slate-700 group-hover:bg-yellow-500 group-hover:text-white duration-500 "
                                  )}
                                ></div>
                                <div
                                  className={classNames(
                                    "w-4 h-1.5 rounded-t-sm bg-slate-700",
                                    !r.isAvailable
                                      ? "bg-slate-700 text-slate-500"
                                      : "bg-slate-200 text-slate-700 group-hover:bg-yellow-500 group-hover:text-white duration-500 "
                                  )}
                                ></div>
                                <div className="flex">
                                  <div
                                    className={classNames(
                                      "w-1 h-0.5  bg-slate-700 rounded-b-md",
                                      !r.isAvailable
                                        ? "bg-slate-700 text-slate-500"
                                        : "bg-slate-200 text-slate-700 group-hover:bg-yellow-500 group-hover:text-white duration-500 "
                                    )}
                                  ></div>
                                  <div
                                    className={classNames(
                                      "w-1 h-0.5 ml-2 bg-slate-700 rounded-b-md",
                                      !r.isAvailable
                                        ? "bg-slate-700 text-slate-500"
                                        : "bg-slate-200 text-slate-700 group-hover:bg-yellow-500 group-hover:text-white duration-500 "
                                    )}
                                  ></div>
                                </div>
                              </div>
                            );
                          else return <div className="w-4 h-4 "></div>;
                        })}
                      </div>
                    </div>
                  );
                else if (row.rowType == "space")
                  return <div className="h-4"></div>;
                else return <></>;
              })}
              <div className="px-4 py-2 mx-auto mt-4 bg-white rounded-md cursor-pointer w-max">
                Buy Now
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
export default Ticket;
