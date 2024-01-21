import React, { useEffect, useState, Animated } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import "./Book.css";
import { getStory } from "../../api/image.service";
import { useParams } from "react-router-dom";
import Lottie from "react-lottie";
import Animation from "../../assets/animation.json";
import Loader from "../../assets/Loader.json";

export const Book = () => {
  const [test, setTest] = useState(null);
  const [didRun, setDidRun] = useState(false);
  const [prompt, setPrompt] = useState(
    "Write about a story about a dog and a cat going on an adventure. They find a treasure, the treasure of friendship, only call them by cat or dog not any pronouns"
  );

  const [loopNumber, setLoopNumber] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [
    "Bringing stories to life...",
    "Crafting magic...",
    "Turning dreams into reality...",
  ];
  const [text, setText] = useState("");
  const period = 1000;
  const [delta, setDelta] = useState(50 - Math.random());

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNumber % toRotate.length;
    let fullText = toRotate[i];
    let updateText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updateText);

    if (isDeleting) {
      // Speed up the deleting effect by reducing the delta during deletion
      setDelta(Math.max(delta / 2, 50)); // Lower this value for faster deleting
    }
    if (!isDeleting && updateText === fullText) {
      setDelta(period); // Wait at the end of the line before starting to delete
      setIsDeleting(true);
    } else if (isDeleting && updateText === "") {
      setIsDeleting(false);
      setLoopNumber(loopNumber + 1);
      // Set to initial typing speed after finishing deleting
      setDelta(80 - Math.random()); // You can adjust this for the desired typing speed
    }
  };

  const defaultOptions1 = {
    loop: true,
    autoplay: true,
    animationData: Animation,
  };
  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: Loader,
  };

  const { input } = useParams();

  useEffect(() => {
    const fetchStory = async () => {
      if (didRun) return;
      try {
        const story = await getStory(prompt);
        console.log("Received story:", story);
        setTest(story);
        console.log("test after setting:", test);
      } catch (error) {
        console.error("Error:", error);
      }
      setDidRun(true);
    };
    fetchStory();
  }, []); // Include prompt in the dependency array to trigger a fetch when it changes

  return (
    <div className="flex">
      {test !== null ? (
        <div>
          <Carousel>
            {test.story.phrases.map((phrase, id) => {
              return (
                <Paper key={id}>
                  <div className="big-container">
                    <div className="carousel-container">
                      <img
                        src={`data:image/png;base64,${test.images[phrase][0].base64}`}
                        alt={"image"}
                        className="w-full h-full"
                      />
                    </div>
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-[80%] h-[20%] rounded-xl">
                      <div className="flex items-center justify-center h-full p-6 text-black text-wrap">
                        <p className="text ">{test.story.phrases[phrase]}.</p>
                      </div>
                    </div>
                  </div>
                </Paper>
              );
            })}
          </Carousel>
        </div>
      ) : (
        <div
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <div className="absolute bottom-[-100px] transform -translate-x-1/2 -translate-y-1/2 left-1/2">
            <Lottie options={defaultOptions1} height={600} width={600} />
          </div>
          <div className="absolute bottom-[60px] transform -translate-x-1/2 -translate-y-1/2 left-1/2">
            <Lottie options={defaultOptions2} height={200} width={1000} />
          </div>
          <div className="absolute transform -translate-x-1/2 -translate-y-1/2 bottom-[270px] left-1/2">
            <h1 className="text-3xl font-bold text-black font-[LFL] tracking-widest">
              {text}
            </h1>
          </div>
        </div>
      )}
    </div>
  );
};
