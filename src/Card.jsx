import React, { useEffect, useState } from "react";

const Card = () => {
  const [userData, setUserData] = useState();
  useEffect(() => {
    fetch("https://randomuser.me/api/?page=1&results=1&seed=abc")
      .then((res) => res.json())
      .then((data) => {
        setUserData(data);
      });
  }, []);
  // console.log(userData.results[0].picture.medium);
  return (
    <section className="flex justify-center h-screen ">
      <div className="container border w-[450px] my-auto rounded-xl bg-gradient-to-r from-gray-950 via-gray-500 to-black">
        <div className="flex flex-row justify-around py-10">
          <div>
            <img src={userData?.results[0]?.picture?.large} alt="img" className="rounded" />
          </div>
          <div className="text-white font-bold w-1/2">
            <div className="">
              <p><span className="text-yellow-400">First Name: </span><span className="text-gray-200">{userData?.results[0]?.name?.first}</span></p>

              <p><span className="text-yellow-400">First Name: </span><span className="text-gray-200">{userData?.results[0]?.name?.last}</span></p>
            </div>
            <div>
              <p><span className="text-yellow-400">Gender: </span><span className="text-gray-200">{userData?.results[0]?.gender}</span></p>
            </div>
            <div>
              <p><span className="text-yellow-400">Phone: </span><span className="text-gray-200">{userData?.results[0]?.phone}</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
