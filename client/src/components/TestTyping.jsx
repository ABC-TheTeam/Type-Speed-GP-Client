import { useEffect, useRef, useState } from "react";

export default function TestTyping() {
  const paragraph =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod egestas pretium. Etiam quis arcu convallis, malesuada neque nec, feugiat odio. Cras sed lacinia purus. Quisque pharetra, diam at rhoncus venenatis, metus quam lobortis sem, eget lacinia sem neque non urna. Nam non commodo arcu, vel vulputate sem. Ut condimentum, enim et fringilla rhoncus, purus neque suscipit urna, et convallis erat magna sit amet ex. In hac habitasse platea dictumst. Nullam nec pharetra dolor. Sed vel neque dui. Vestibulum orci massa, ullamcorper sit amet ultrices vel, suscipit sit amet diam. Pellentesque eleifend sagittis enim, sed pulvinar orci lacinia et. Phasellus bibendum urna et purus aliquet, pharetra mollis elit feugiat. Praesent non viverra turpis, ac viverra odio.";

  const maxTime = 60;
  const [timeLeft, setTimeLeft] = useState(maxTime);
  const [mistakes, setMistakes] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isType, setIsType] = useState(false);
  const [WPM, setWPM] = useState(0);
  const [CPM, setCPM] = useState(0);
  const inputRef = useRef(null);
  const charRefs = useRef([]);
  const [rightWrong, setRightWrong] = useState([]);

  useEffect(() => {
    inputRef.current.focus();
    setRightWrong(Array(charRefs.current.length).fill(""));
  }, []);

  useEffect(() =>{
    let interval;
    if (isType && timeLeft > 0){
      interval = setInterval(() =>{
        setTimeLeft(timeLeft - 1);
        let rightChars = charIndex - mistakes;
        let totalTime = maxTime - timeLeft

        let cpm = rightChars * (60 / totalTime);
        cpm = cpm < 0 || !cpm || cpm === Infinity ? 0 : cpm;
        setCPM(parseInt(cpm, 10));

        let wpm = Math.round((rightChars / 5 / totalTime) * 60);
        wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;
        setWPM(wpm)
      }, 1000)
    } else if(timeLeft === 0){
      clearInterval(interval);
      setIsType(false)
    }
    return() =>{
      clearInterval(interval)
    }
  }, [isType, timeLeft])

  const resetGame = () => {
    setIsType(false)
    setTimeLeft(maxTime)
    setCharIndex(0)
    setMistakes(0)
    setCPM(0)
    setWPM(0)
    setRightWrong(Array(charRefs.current.length).fill(''))
    inputRef.current.focus()
  }

  const handleChanges = (e) => {
    const characters = charRefs.current;
    let currentChar = charRefs.current[charIndex];
    let charTyped = e.target.value.slice(-1);
    if (charIndex < characters.length && timeLeft > 0) {
      if (!isType) {
        setIsType(true);
      }
      if (charTyped === currentChar.textContent) {
        setCharIndex(charIndex + 1);
        rightWrong[charIndex] = " right ";
        console.log(charTyped);
      } else {
        setCharIndex(charIndex + 1);
        setMistakes(mistakes + 1);
        rightWrong[charIndex] = " wrong ";
        console.log(charTyped);
      }
      if (charIndex === characters.length - 1) setIsType(false);
    } else {
      setIsType(false);
    }
  };

  return (
    <div className="py-5">
      <div className="container-sm card d-flex p-3">
        <div className="">
          <input
            type="text"
            className="input-field"
            ref={inputRef}
            onChange={handleChanges}
          />
          {paragraph.split("").map((char, index) => (
            <span key={index}
              className={`char ${index === charIndex ? "active" : ""} 
              ${rightWrong[index]}`}
              ref={(e) => (charRefs.current[index] = e)}
            >
              {char}
            </span>
          ))}
        </div>
        <br />
        <div className="d-flex justify-content-around">
          <p>Time: {timeLeft}</p>
          <p>Mistakes: {mistakes}</p>
          <p>WPM: {WPM}</p>
          <p>CPM: {CPM}</p>
          <button className="btn-success btn" onClick={resetGame}>TEST</button>
        </div>
      </div>
    </div>
  );
}
