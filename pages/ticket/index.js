import { useEffect, useState } from "react";
import LoadingDialog from "../../components/dialogs/LoadingDialog";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Metatag from "../../components/Metatag";
import Constants from "../../helpers/Constants";
import classNames from "../../utils/classNames";

const Ticket = () => {
  const [loadingDialog, setLoadingDialog] = useState(false);
  const [selectedSeats, setSelectedSeats] = useState([]);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    console.log("Here");
    const allRows = [];
    Constants.TICKET_INFO.map((b) => (allRows = allRows.concat(b.rows)));
    console.log(allRows);
    const total = 0;
    selectedSeats.map((seat) => {
      const block = Constants.TICKET_INFO.find((b) =>
        b.rows.find((r) => r.name == seat.split(":")[0])
      );
      total += block.price;
    });
    setTotalPrice(total);
  }, [selectedSeats]);
  const buyNow = () => {
    if (totalPrice == 0) return;
    setLoadingDialog(true);
    const body = {
      name: "Gandhada Gudi",
      amount: totalPrice * 100,
    };
    fetch(process.env.BASE_API_URL + "stripe/checkout", {
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
          <div className="grid h-full max-w-3xl grid-cols-1 gap-4 mx-auto my-24 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
            <div className="h-full space-y-4 lg:col-start-1 lg:col-span-2">
              <div className="flex flex-col gap-2 mx-auto">
                {Constants.TICKET_INFO.map((block, i) => {
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
                                {row.items.map((i, k) => {
                                  if (i.type == "seat") {
                                    return (
                                      <div
                                        key={k}
                                        className={classNames(
                                          "flex items-center justify-center w-6 h-6 text-xs duration-500 border rounded-sm ",
                                          i.isAvailable
                                            ? "border-white hover:border-yellow-500 hover:bg-yellow-500 hover:text-slate-900 cursor-pointer text-white "
                                            : "bg-slate-700 border-slate-700 text-slate-900 select-none",
                                          selectedSeats.includes(
                                            row.name + ":" + i.number
                                          )
                                            ? "bg-yellow-500 hover:bg-yellow-600 hover:border-yellow-600 border-yellow-500 text-slate-900"
                                            : ""
                                        )}
                                        onClick={() => {
                                          if (!i.isAvailable) return;
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
                                  } else return <div className="w-6 h-6"></div>;
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
              <img
                className="w-full"
                src="https://sacred-chank-productions.s3.amazonaws.com/films/images/MV5BNjQ4ZTAxNmYtNzNkYy00MDk4LTk2YmUtZTNkMTk1MjE1NGFiXkEyXkFqcGdeQXVyMTUyNDc3NTQz1667133191044._V1_FMjpg_UX1080_"
              />
              <div className="p-4">
                <div className="text-xl text-white">Gandhada Gudi</div>
              </div>
              <div className="h-[1px] bg-slate-300 rounded-sm"></div>
              <div className="p-4 text-base text-white">
                <div className="">Odeon Dublin</div>
                <div className="text-sm">20:20, 2nd Oct, 2022</div>
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
export default Ticket;
