import { cn } from "@/lib/utils";

const Badge = ({
  icon,
  text = "Academic Collaborations",
  bgColor = "bg-black",
  textColor = "text-white",
  className = "",
}: {
  icon: React.ReactNode;
  text?: string;
  bgColor?: string;
  textColor?: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 p-1 rounded-full cursor-pointer max-sm:w-full",
        className,
        bgColor,
        textColor
      )}
    >
      <div className="rounded-full bg-white flex items-center justify-center">
        <span className="text-black ">{icon}</span>
      </div>
      <span className="text-sm font-poppins whitespace-nowrap px-2 pr-4">
        {text}
      </span>
    </div>
  );
};

export default Badge;
