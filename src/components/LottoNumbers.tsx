type LottoNumbersProps = {
  setLottoNumbers: React.Dispatch<React.SetStateAction<number[]>>;
};

const LottoNumbers = ({ setLottoNumbers }: LottoNumbersProps) => {
  const generate = () => {
    const numbers: number[] = [];
    while (numbers.length < 7) {
      const n = Math.floor(Math.random() * 50) + 1;
      if (!numbers.includes(n)) numbers.push(n);
    }
    setLottoNumbers(numbers);
  };

  return <button onClick={generate}>Generate Lotto Numbers</button>;
};

export default LottoNumbers;
