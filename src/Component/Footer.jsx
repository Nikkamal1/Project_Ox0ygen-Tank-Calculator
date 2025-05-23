const Footer = () => (
  <footer className="bg-gray-200 text-center text-sm p-4">
    <p>ติดต่อสอบถาม : พินิต นิวาตบุตร</p>

    {/* มือถือ: แยกบรรทัด */}
    <div className="block md:hidden">
      <p>แผนกวิสัญญี โรงพยาบาลนราธิวาสราชนครินทร์</p>
      <p>โทร 0-7351-0572</p>
    </div>

    {/* เดสก์ท็อป: รวมบรรทัด */}
    <p className="hidden md:block">
      แผนกวิสัญญี โรงพยาบาลนราธิวาสราชนครินทร์ โทร 0-7351-0572
    </p>

    <p>© Phinit Niwatabutra</p>
  </footer>
);

export default Footer;
