import { useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import Loader from "../../../components/Loader";
import DoneIcon from "../../../icons/DoneIcon";
import DownloadIcon from "../../../icons/DownloadIcon";
import { saveAs } from "file-saver";
import { userAgent } from "next/server";
import { useRouter } from "next/router";

export default function Ticket({ ticketId }) {
  const router = useRouter();
  const [data, setData] = useState();

  useEffect(() => {
    fetch(process.env.BASE_API_URL + "ticket/" + ticketId + "/verify", {
      method: "GET",
    })
      .then((res) => {
        console.log(res.status);
        return res.json();
      })
      .then((json) => {
        console.log(json);
        setData(json);
      });
  }, []);
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-slate-900">
      <div className="overflow-hidden rounded-md shadow-md bg-slate-700">
        {data ? (
          <div>
            {/* <DoneIcon className="w-20 h-20 p-2 mx-auto text-yellow-500 border-4 border-yellow-500 rounded-full" /> */}
            <img src={data.url} className="w-48 h-48 bg-yellow-500" />
            <div className="flex font-bold text-center bg-yellow-500 text-slate-900 ">
              <div className="flex-1" />
              <div
                onClick={() => {
                  saveAs(data.url, "ticket.png");
                }}
                className="duration-500 cursor-pointer hover:bg-yellow-600"
              >
                <DownloadIcon className="w-10 h-10 p-2 " />
              </div>
              <div
                className="duration-500 cursor-pointer hover:bg-yellow-600"
                onClick={() => {
                  router.push("/");
                }}
              >
                <DoneIcon className="w-10 h-10 p-2 " />
              </div>
            </div>
          </div>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
}
export async function getServerSideProps(context) {
  return {
    props: {
      ticketId: context.params.id,
    },
  };
}
