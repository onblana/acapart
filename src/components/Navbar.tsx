import NavBtn from "./NavBtn";

const buttonInfo = [
  { name: "피치파이프!", href: "/pitchpipe" },
  { name: "전체보기", href: "/" },
  { name: "공지", href: "/notice" },
  { name: "모집", href: "/recruit" },
  { name: "자유", href: "/anything" },
  { name: "홍보", href: "/spotlight" },
];

const Navbar = () => {
  return (
    <div className="flex bg-rose-100 min-w-screen mb-10 w-full justify-evenly w-full">
      {buttonInfo.map((info, i) => (
        <NavBtn name={info.name} href={info.href} />
      ))}
    </div>
  );
};

export default Navbar;
