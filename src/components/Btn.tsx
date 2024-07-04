import { Button } from "@/components/ui/Button";

interface BtnProps {
  name: string;
}

const Btn = ({ name }: BtnProps) => {
  return (
    <Button className={`bg-slate-100 hover:bg-slate-200 active:bg-slate-300`}>
      {name}
    </Button>
  );
};

export default Btn;
