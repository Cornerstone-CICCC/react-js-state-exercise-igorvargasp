type ClickCounterProps = {
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const ClickCounter = ({ setCount }: ClickCounterProps) => {
  return (
    <button onClick={() => setCount((prev) => prev + 1)}>Click Counter</button>
  );
};

export default ClickCounter;
