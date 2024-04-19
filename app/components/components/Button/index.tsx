import { Button } from "@/components/ui/button";

interface ButtonProps {
  className?: string;
  text?: string;
}

function ButtonC(props: ButtonProps) {
  return (
    <Button
      className={` delay-100  bg-[#1a1a1a] hover:bg-black border border-primaryBorder rounded-full px-[20px] py-[23px] text-white text-xl font-[300] transition duration-300 ease-in-out ${props.className}`}
    >
      <span className="font-[400]">{props.text}</span>
    </Button>
  );
}

export default ButtonC;
