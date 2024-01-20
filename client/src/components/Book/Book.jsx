import { useState } from "react";
import HTMLFlipBook from "react-pageflip"

export const Book = () => {

  const pages = {
    "images" : {
      "1":"https://image.tmdb.org/t/p/original/53BC9F2tpZnsGno2cLhzvGprDYS.jpg",
      "2":"https://image.tmdb.org/t/p/original/e9Qb2kmBnMXHCmNMI8NX1JbWhh1.jpg",
      "3":"https://image.tmdb.org/t/p/original/2WjOOOGUu6dp4r8VqR5n48DY7JG.jpg",
      "4":"https://image.tmdb.org/t/p/original/duIsyybgrC4S8kcCIVaxNOttV15.jpg",
      "5":"https://image.tmdb.org/t/p/original/3RS8runn9AfrYDzRVPWuGPmvXQf.jpg",
      "6":"https://image.tmdb.org/t/p/original/8wLRn2VvBlCu6cqYS4ypipnwosr.jpg",
      "7":"https://image.tmdb.org/t/p/original/zDqVVkmfvj47FBUE5lwE4rWnITu.jpg",
      "8":"https://image.tmdb.org/t/p/original/682Ui5DwZDdbIPzKAEOR7cJlMXa.jpg",
      "9":"https://image.tmdb.org/t/p/original/6jdlppcnGi3XuJamfs4Vl7HyxB.jpg",
      "10":"https://image.tmdb.org/t/p/original/uIq83ogs7QBEWi1aqmUrdDIH61m.jpg",
    },

    "sentences" : {
      "1":"Fuck",
      "2":"Shit",
      "3":"Bitch",
      "4":"Young",
      "5":"Scheck",
      "6":"Wes",
      "7":"and",
      "8":"I'm",
      "9":"getting",
      "10":"rich"
    }
  };

  const keys = Object.keys(pages.images);

  return (
    <div className="flex items-center justify-center min-h-screen">
    <HTMLFlipBook width={620} height={620}>
      {keys.map((key, id) => (
        <div className="demoPage" key={id}>
          <div className="absolute bottom-3 bg-white left-1/2 transform -translate-x-1/2 w-[70%] h-1/5 opacity-80">
            <div className="flex items-center justify-center h-full text-black">
              <p>{pages.sentences[key]}</p>
            </div>
          </div>
          <img src={pages.images[key]} alt={`Image ${key}`} className="w-full h-full" />
        </div>
        ))}
      </HTMLFlipBook>
    </div>
);

}
