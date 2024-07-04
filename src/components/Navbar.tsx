import NavBtn from "./NavBtn";

const names = ["피치파이프!", "전체보기", "공지", "모집", "자유", "홍보"];

const Navbar = () => {
  return (
    <div className="flex bg-rose-100 min-w-screen mb-10 w-full justify-evenly w-full">
      {names.map((name, i) => (
        <NavBtn name={name} />
      ))}
    </div>
  );
};

export default Navbar;
