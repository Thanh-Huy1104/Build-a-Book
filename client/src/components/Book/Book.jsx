import React, { useEffect, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import "./Book.css";
import { getStory } from "../../api/image.service";
import { useParams } from "react-router-dom";

export const Book = () => {
  const [test, setTest] = useState(null);
  const [didRun, setDidRun] = useState(false);
  const [prompt, setPrompt] = useState(
    "Write about a story about a dog and a cat going on an adventure. They find a treasure, the treasure of friendship, only call them by cat or dog not any pronouns"
  );

  const { input } = useParams();
  console.log(input);

  // useEffect(() => {
  //   const fetchStory = async () => {
  //     if (didRun) return;
  //     try {
  //       const story = await getStory(prompt);
  //       console.log("Received story:", story);
  //       setTest(story);
  //       console.log("test after setting:", test);
  //     } catch (error) {
  //       console.error("Error:", error);
  //     }
  //     setDidRun(true);
  //   };
  //   fetchStory();
  // }, [prompt]); // Include prompt in the dependency array to trigger a fetch when it changes

  return (
    <div className="flex items-center justify-center min-h-screen">
      {test !== null ? (
        <HTMLFlipBook width={745} height={729}>
          {Object.keys(test.story.phrases).map((key, id) => (
            <div className="demoPage" key={id}>
              <div className="absolute bottom-6  left-1/2 transform -translate-x-1/2 w-[80%] h-[20%] rounded-xl">
                <div className="flex items-center justify-center h-full p-6 text-black text-wrap">
                  <p className="text ">{test.story.phrases[key]}.</p>
                </div>
              </div>
              <img
                src={`data:image/png;base64,${test.images[key][0].base64}`}
                alt={"image"}
                className="w-full h-full"
              />
            </div>
          ))}
        </HTMLFlipBook>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
