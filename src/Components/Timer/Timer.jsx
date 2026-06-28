import { useTimer } from "react-timer-hook";

function MyTimer({ expiryTimestamp }) {
  const {
    days,
    hours,
    minutes,
    seconds,
    isRunning,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("Time's up!"),
  });

  return (
    <div style={{ textAlign: "center" }}>
      <h2>
        {days}1 : {String(hours).padStart(2, "0")} :{""}
        {String(minutes).padStart(2, "0")}:{" "}
        {String(seconds).padStart(2, "0")}
      </h2>
    </div>
  );
}

export default function App() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 86000 );

  return <MyTimer expiryTimestamp={time} />;
}