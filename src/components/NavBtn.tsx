import { Button } from "@/components/ui/Button";

interface BtnProps {
  name: string;
}

const NavBtn = ({ name }: BtnProps) => {
  return (
    <Button className="bg-rose-100 hover:bg-rose-200 active:bg-rose-300 w-full">
      {name}
    </Button>
  );
};

export default NavBtn;
