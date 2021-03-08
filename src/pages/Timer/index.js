// Globals
import "./styles.scss";
import React, { useEffect, useMemo, useRef, useState } from "react";

// Components
import { Button } from "components/Button";

// Sub-component
function Expired() {
  return (
    <div className="aura-expired">
      <div className="aura-expired-emoji">⚠️</div>
      <div className="aura-expired-text">Timer expired!</div>
    </div>
  );
}

// Component
function Timer() {
  // Hooks - state
  const [counter, setCounter] = useState(60);
  const [isPaused, setPause] = useState(true);

  // TODO: implement counter...
  const timer = useRef();

  useEffect(() => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    if (counter > 0 && !isPaused) {
      timer.current = setTimeout(() => setCounter(count => count - 1), 1000);
    } else {
      setPause(true)
    }
    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    }
  }, [counter, isPaused])

  const resetTimer = () => {
    setCounter(60);
  }

  const startTimer = () => {
    setPause(!isPaused)
    if (counter < 1) {
      resetTimer();
    } 
  }

  const timeLabel = useMemo(() => {
    const minutes = Math.floor(counter / 60)
    const seconds = counter - minutes * 60
    return `${minutes}:${seconds.toLocaleString('en-US', {
      minimumIntegerDigits: 2,
    })}`
  }, [counter])

  // Render
  return (
    <div className="aura-page aura-timer">
      <h1>Timer</h1>

      <div className="aura-page-content">
        <div className="aura-timer-clock">{timeLabel}</div>
        {counter <= 0 ? <Expired /> : null}

        <div className="aura-timer-buttons">
          <Button onClick={startTimer}>{isPaused ? 'Start' : 'Pause'}</Button>
          <Button onClick={resetTimer}>Reset</Button>
        </div>
      </div>
    </div>
  );
}

export { Timer };
