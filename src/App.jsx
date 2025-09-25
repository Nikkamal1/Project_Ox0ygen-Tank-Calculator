import { useState } from "react";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Form from "./Component/Form";
import Error from "./Component/Error";
// import List from "./Component/List";

const cylinderFactors = {
  D: 0.16,
  E: 0.28,
  M: 1.56,
  H: 3.14,
};

const calculateTime = (cylinder, oxygenRate, pressure) => {
  const conversionFactor = cylinderFactors[cylinder];
  const timeInMinutes = (pressure * conversionFactor) / oxygenRate;
  const hours = Math.floor(timeInMinutes / 60);
  const minutes = Math.floor(timeInMinutes % 60);
  const timeFormatted = `${hours} ชั่วโมง ${minutes} นาที`;
  const timeWithDecimal = timeInMinutes.toFixed(2);

  return { timeWithDecimal, timeFormatted };
};

const validateInput = (cylinder, oxygenRate, pressure) => {
  if (!cylinder || !oxygenRate || !pressure || oxygenRate <= 0 || pressure <= 0) {
    return "กรุณากรอกค่าที่ถูกต้องทั้งหมด (ค่าอัตราการใช้ออกซิเจนและแรงดันต้องมากกว่า 0)";
  }
  return "";
};

function App() {
  const [cylinder, setCylinder] = useState("");
  const [oxygenRate, setOxygenRate] = useState("");
  const [pressure, setPressure] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleCalculate = () => {
    setError(""); // รีเซ็ตข้อความผิดพลาด

    const errorMessage = validateInput(cylinder, oxygenRate, pressure);
    if (errorMessage) {
      setError(errorMessage);
      return;
    }

    const result = calculateTime(cylinder, oxygenRate, pressure);
    setResult(result);
  };

  const resetForm = () => {
    setCylinder("");
    setOxygenRate("");
    setPressure("");
    setResult(null);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow flex items-center justify-center bg-[url('/img/Oxygen.png')] bg-cover bg-center bg-no-repeat px-4 py-8">
        <Form
          setCylinder={setCylinder}
          setOxygenRate={setOxygenRate}
          setPressure={setPressure}
          handleCalculate={handleCalculate}
          result={result}
        />
      </div>
      <Error error={error} />
      <Footer />
    </div>
  );
}

export default App;