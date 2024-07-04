import Btn from "./Btn";

const Header = () => {
  return (
    <div className="inline-flex items-end mb-8 gap-4">
      <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F9A7A7] to-[#0057FF]">
        acapart
      </p>
      <p className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-[#F9A7A7] to-[#0057FF]">
        Acappella community
      </p>
      <div className="fixed right-5">
        <Btn name="검색" />
        <Btn name="로그인" />
      </div>
    </div>
  );
};

export default Header;
