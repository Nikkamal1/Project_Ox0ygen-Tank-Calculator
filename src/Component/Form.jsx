const Form = ({ setCylinder, setOxygenRate, setPressure, handleCalculate, result }) => {
  return (
    <div className="font-sukhumvit flex flex-col items-center px-4 py-6 min-h-screen">
      {/* หัวข้อ */}
      <div className="text-black  text-center rounded-lg mb-2">
        <h2 className="text-xl md:text-2xl font-semibold">คำนวณระยะเวลาออกซิเจนคงเหลือในถัง</h2>
        <h2 className="text-xl md:text-2xl font-semibold">ขณะเคลื่อนย้ายผู้ป่วย</h2>
      </div>

      {/* กล่องฟอร์ม */}
      <div className="w-full max-w-md  p-4 ">
        {/* เลือกขนาดถัง */}
        <label className="block text-gray-700 text-lg mb-2">ขนาดถัง</label>
        <select
          className="w-full p-3 border rounded mb-2 text-lg"
          onChange={(e) => setCylinder(e.target.value)}
        >
          <option value="">เลือกขนาดถัง</option>
          <option value="D">D Cylinder (0.16)</option>
          <option value="E">E Cylinder (0.28)</option>
          <option value="M">M Cylinder (1.56)</option>
          <option value="H">H Cylinder (3.14)</option>
        </select>

        {/* อัตราการใช้ออกซิเจน */}
        <label className="block text-gray-700 text-lg mb-2">อัตราการใช้ออกซิเจน (LPM)</label>
        <input
          type="number"
          className="w-full p-3 border rounded mb-2"
          onChange={(e) => setOxygenRate(e.target.value)}
          min="0"
        />

        {/* แรงดันออกซิเจน */}
        <label className="block text-gray-700 text-lg mb-2">แรงดันออกซิเจนในถัง (PSI)</label>
        <input
          type="number"
          className="w-full p-3 border rounded mb-4"
          onChange={(e) => setPressure(e.target.value)}
          min="0"
        />

        {/* ปุ่มคำนวณ */}
        <button
          className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition-all mb-4"
          onClick={handleCalculate}
        >
          คำนวณ
        </button>

        {/* ผลลัพธ์ */}
        {result && (
          <div className="mt-2 p-2 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="text-lg font-bold">ผลการคำนวณ</h3>
            <p className="text-xl mt-2">
              เวลาที่ใช้ได้: {result.timeWithDecimal} นาที ({result.timeFormatted})
            </p>
          </div>
        )}

        {/* ภาพรายละเอียดขนาดถัง */}
        {/* <div className="mt-2 h-64 rounded-lg  bg-[url('/img/c7ff8faa-7bcf-47dc-a0b0-cca7999a293d.png')] bg-cover bg-center" />
        <div className="mt-2 h-64 rounded-lg  bg-[url('/img/18d570f4-4dc1-4f34-af6b-d5a2d8795589.png')] bg-cover bg-center" /> */}
        </div>
    </div>
  );
};

export default Form;
