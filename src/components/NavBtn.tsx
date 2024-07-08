import { Button } from "@/components/ui/Button";
import Link from "next/link";

interface BtnProps {
  name: string;
  href: string;
}

const NavBtn = ({ name, href }: BtnProps) => {
  return (
    <Button className="bg-rose-100 hover:bg-rose-200 active:bg-rose-300 w-full">
      <Link href={href}>{name}</Link>
    </Button>
  );
};

export default NavBtn;
