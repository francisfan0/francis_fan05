import { useEffect, useRef, useState } from "react";
import "./HomePage.css";
import "../index.css";

// Function to generate a random math question
const generateQuestion = () => {
  const operations = ["addition", "subtraction", "multiplication", "division"];
  const operation = operations[Math.floor(Math.random() * operations.length)];
  let num1, num2, question, answer;

  switch (operation) {
    case "addition":
      num1 = Math.floor(Math.random() * 99) + 2; // Range 2 to 100
      num2 = Math.floor(Math.random() * 99) + 2; // Range 2 to 100
      question = `${num1} + ${num2}`;
      answer = num1 + num2;
      break;

    case "subtraction":
      num1 = Math.floor(Math.random() * 99) + 2; // Range 2 to 100
      num2 = Math.floor(Math.random() * (num1 - 2)) + 2; // Ensure num2 <= num1
      question = `${num1} - ${num2}`;
      answer = num1 - num2;
      break;

    case "multiplication":
      num1 = Math.floor(Math.random() * 11) + 2; // Range 2 to 12
      num2 = Math.floor(Math.random() * 99) + 2; // Range 2 to 100
      question = `${num1} × ${num2}`;
      answer = num1 * num2;
      break;

    case "division":
      answer = Math.floor(Math.random() * 99) + 2; // Range 2 to 100
      num2 = Math.floor(Math.random() * 11) + 2; // Range 2 to 12
      num1 = answer * num2; // Ensure num1 is divisible by num2
      question = `${num1} ÷ ${num2}`;
      break;

    default:
      // Default fallback (shouldn't happen)
      num1 = 0;
      num2 = 0;
      question = "";
      answer = 0;
  }

  return { question, answer };
};

const HomePage = () => {
  const [game, setGame] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(generateQuestion());
  const [userAnswer, setUserAnswer] = useState("");
  const [counter, setCounter] = useState(0); // Initialize counter state
  const [timer, setTimer] = useState(120);
  const [bestScore, setBestScore] = useState(() => {
    // Retrieve the best score from localStorage if available
    const savedScore = localStorage.getItem("bestScore");
    return savedScore ? parseInt(savedScore, 10) : 0;
  });

  const typewriterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Timer logic
    const intervalId = setInterval(() => {
      setTimer((prevTime) => {
        if (prevTime <= 1) {
          // Reset counter and timer when the timer reaches 0
          if (counter > bestScore) {
            setBestScore(counter);
            localStorage.setItem("bestScore", counter.toString()); // Save best score to localStorage
          }
          // setCounter(0);
          setGame(2);
          return 120; // Reset timer to 2 minutes
        }
        return prevTime - 1;
      });
    }, 1000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, [counter, bestScore]);

  useEffect(() => {
    // Logic to stop blinking cursor after typing animation
    const typewriter = typewriterRef.current;

    if (typewriter) {
      const handleAnimationEnd = (e: { animationName: string }) => {
        if (e.animationName === "typing") {
          typewriter.classList.remove("blink-caret");
          typewriter.classList.add("no-blink");
        }
      };

      typewriter.addEventListener("animationend", handleAnimationEnd);

      return () =>
        typewriter.removeEventListener("animationend", handleAnimationEnd);
    }
  }, []);

  const handleAnswerChange = (e: { target: { value: any } }) => {
    const answer = e.target.value;
    setUserAnswer(answer);

    if (parseInt(answer, 10) === currentQuestion.answer) {
      setCurrentQuestion(generateQuestion());
      setUserAnswer("");
      setCounter(counter + 1); // Update counter state
    }
  };

  const onClick = () => {
    setBestScore(0);
    localStorage.setItem("bestScore", "0"); // Save best score to localStorage
  };

  const startGame = () => {
    setCurrentQuestion(generateQuestion());
    setGame(1);
    setCounter(0);
    setTimer(120);
  };

  return (
    <div>
      <h1 className="h1-title">
        <span ref={typewriterRef} className="typewriter">
          Hi, I'm Francis.
        </span>
      </h1>
      <p>
        <address>
          <abbr title="Email">E:</abbr>{" "}
          <a href="mailto:francis.fan@yale.edu">francis.fan@yale.edu</a>
        </address>
      </p>
      <p>
        I'm currently @ Yale intending to study CS + Math, a joint major. I'm
        excited by applications of AI/ML and am currently doing research at the
        Apollo Lab @ Yale with special interests in robotics and deep learning.
      </p>
      <p className="contact-message">
        Don't hesitate to reach out with any questions!
      </p>
      {game === 1 ? (
        <>
          <div className="math-game-box some-space">
            <div className="flex-center">
              <span>
                <p>
                  Here's a li'l zetamac clone to keep you{" "}
                  <abbr title="Clicking on best score resets it">
                    occupied...
                  </abbr>
                </p>
              </span>

              <p>
                <code>Counter: {counter}</code>
              </p>
            </div>

            <div className="math-game-content">
              <div className="inline-container">
                <p className="question">{currentQuestion.question} =</p>
                <input
                  value={userAnswer}
                  onChange={handleAnswerChange}
                  autoFocus
                />
              </div>
            </div>
          </div>
          <div className="flex-center">
            <p>Timer: {timer}</p>
            <button
              onClick={onClick}
              type="button"
              className="btn btn-default btn-sm"
            >
              Best score: {bestScore}
            </button>
          </div>
        </>
      ) : game === 0 ? (
        <>
          <div className="math-game-box some-space scale-up">
            <div className="flex-center">
              <span>
                <p>
                  Here's a li'l zetamac clone to keep you{" "}
                  <abbr title="Clicking on best score resets it">
                    occupied...
                  </abbr>
                </p>
              </span>
            </div>

            <div className="math-game-content">
              <div className="inline-container">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={startGame}
                >
                  Start
                </button>
              </div>
            </div>
          </div>
          <div className="flex-center">
            <p></p>
            <button
              onClick={onClick}
              type="button"
              className="btn btn-default btn-sm"
            >
              Best score: {bestScore}
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="math-game-box some-space">
            <div className="flex-center">
              <span>
                <p>
                  Here's a li'l zetamac clone to keep you{" "}
                  <abbr title="Clicking on best score resets it">
                    occupied...
                  </abbr>
                </p>
              </span>
            </div>

            <div className="math-game-content">
              <div className="inline-container">
                <p className="spacing ">
                  <code>Score: {counter}</code>
                </p>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={startGame}
                >
                  Start Again
                </button>
              </div>
            </div>
          </div>
          <div className="flex-center">
            <p></p>
            <button
              onClick={onClick}
              type="button"
              className="btn btn-default btn-sm"
            >
              Best score: {bestScore}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default HomePage;
