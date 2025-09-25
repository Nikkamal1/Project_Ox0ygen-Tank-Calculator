import React, { useState } from "react";

const TravelTimeCalculator = () => {
  const [distance, setDistance] = useState("");
  const [speed, setSpeed] = useState("");
  const [time, setTime] = useState(null);

  const handleCalculate = () => {
    const s = parseFloat(distance);
    const v = parseFloat(speed);
    if (s > 0 && v > 0) {
      const t = (s / v) * 60; // แปลงเป็นนาที
      setTime(t.toFixed(2));
    } else {
      setTime("ข้อมูลไม่ถูกต้อง");
    }
  };

  return (
    <div>
      <div className="mb-2">
        <label className="block text-gray-700 text-base mb-1">
          ระยะทาง (กิโลเมตร)
        </label>
        <input
          type="number"
          className="w-full p-2 border rounded"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
          min="0"
        />
      </div>
      <div className="mb-2">
        <label className="block text-gray-700 text-base mb-1">
          อัตราความเร็ว (กิโลเมตร/ชั่วโมง)
        </label>
        <input
          type="number"
          className="w-full p-2 border rounded"
          value={speed}
          onChange={(e) => setSpeed(e.target.value)}
          min="0"
        />
      </div>
      <button
        className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700 transition-all mb-2"
        onClick={handleCalculate}
        type="button"
      >
        คำนวณเวลาเดินทาง
      </button>
            {time !== null && (
        <div className="text-base mt-2">
          {isNaN(time) || time === "ข้อมูลไม่ถูกต้อง"
            ? "กรุณากรอกข้อมูลให้ถูกต้อง"
            : `เวลาเดินทาง = ${time} นาที (${Math.floor(time / 60)} ชั่วโมง ${Math.round(time % 60)} นาที)`}
        </div>
      )}
    </div>
  );
};

export default TravelTimeCalculator;