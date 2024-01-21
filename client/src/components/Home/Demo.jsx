import React from "react";
import { useNavigate } from "react-router-dom";
import emptyBackground from "../../assets/empty_background.png";

const Demo = () => {
  const navigate = useNavigate();

  const handleClick = (num) => {
    navigate(`/book/${num}`);
  };

  return (
    <div className="flex justify-between w-full py-20 bg-[#0091DB] px-32 space-x-10 ">
      <div>
        <div className="pt-10">
          <p className="text-2xl font-medium font-[StarBorn] text-white w-64">
            Check out our stories!
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center shadow-sm">
        <button
          style={{
            textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          }}
          className="w-64 h-[150px] px-4 py-6 font-bold font-[StarBorn] text-white bg-blue-500 border-2 rounded-[30px] btn-animate hover:bg-blue-300"
          onClick={() => handleClick(1)}
        >
          Story 1: &quot;Under the night sky&quot;
        </button>
      </div>
      <div className="flex items-center justify-center shadow-sm">
        <button
          style={{
            textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          }}
          className="w-64 h-[150px] px-4 py-2 font-bold font-[StarBorn] text-white bg-yellow-500 border-2 rounded-[30px] btn-animate hover:bg-yellow-300"
          onClick={() => handleClick(2)}
        >
          Story 2: &quot;A boy and his adventure in the woods&quot;
        </button>
      </div>
      <div className="flex items-center justify-center shadow-sm">
        <button
          style={{
            textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          }}
          className="w-64 h-[150px] px-4 py-2 font-bold font-[StarBorn] text-white bg-green-500 border-2 rounded-[30px] btn-animate hover:bg-green-300"
          onClick={() => handleClick(3)}
        >
          Story 3: &quot;In the forest adventure&quot;
        </button>
      </div>
    </div>
  );
};

export default Demo;
