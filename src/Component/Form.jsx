const Form = ({ setCylinder, setOxygenRate, setPressure, handleCalculate, result }) => {
    return (
      <div className="font-sukhumvit">
        <div className="bg-white text-black p-4 text-center rounded-lg mb-6">
          <h1 className="text-3xl font-semibold">คำนวณเวลาการใช้งานถังออกซิเจน</h1>
        </div>
        <div className="w-full max-w-full md:max-w-md bg-white p-6 rounded-lg shadow-md mx-auto">
          {/* เลือกขนาดถัง */}
          <label className="block text-black text-md mb-2">ขนาดถัง</label>
          <select
            className="w-full p-3 border rounded mb-6"
            onChange={(e) => setCylinder(e.target.value)}
          >
            <option value="">เลือกขนาดถัง</option>
            <option value="D">D Cylinder (0.16)</option>
            <option value="E">E Cylinder (0.28)</option>
            <option value="M">M Cylinder (1.56)</option>
            <option value="H">H Cylinder (3.14)</option>
          </select>
  
          {/* กรอกค่าอัตราการใช้ออกซิเจน */}
          <label className="block text-gray-700 text-lg mb-2">อัตราการใช้ออกซิเจน (LPM)</label>
          <input
            type="number"
            className="w-full p-3 border rounded mb-6"
            onChange={(e) => setOxygenRate(e.target.value)}
            min="0"
          />
  
          {/* กรอกค่าแรงดันออกซิเจนในถัง */}
          <label className="block text-gray-700 text-lg mb-2">แรงดันออกซิเจนในถัง (PSI)</label>
          <input
            type="number"
            className="w-full p-3 border rounded mb-6"
            onChange={(e) => setPressure(e.target.value)}
            min="0"
          />
  
          {/* ปุ่มคำนวณ */}
          <button
            className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition-all mb-6"
            onClick={handleCalculate}
          >
            คำนวณ
          </button>
  
          {/* แสดงผลลัพธ์หลังการคำนวณ */}
          {result && (
            <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-lg font-bold">ผลการคำนวณ</h3>
              <p className="text-xl mt-2">
                เวลาที่ใช้ได้: {result.timeWithDecimal} นาที ({result.timeFormatted})
              </p>
            </div>
          )}
        </div>
      </div>
    );
  };
  
  export default Form;
  