import { Loader2Icon } from "lucide-react";

const Loading = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Loader2Icon className="animate-spin" />
    </div>
  );
};

export default Loading;
