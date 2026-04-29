type LightToggleProps = {
  setIsLightsOn: React.Dispatch<React.SetStateAction<boolean>>;
};

const LightToggle = ({ setIsLightsOn }: LightToggleProps) => {
  return (
    <button onClick={() => setIsLightsOn((prev) => !prev)}>
      Toggle Lights
    </button>
  );
};

export default LightToggle;
