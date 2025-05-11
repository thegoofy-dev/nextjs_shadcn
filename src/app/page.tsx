
import Calendar from "@/components/Cards/Calendar";
import General from "@/components/Cards/General";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="grid gap-[32px] ">
    <div className="grid grid-cols-2 gap-[32px] items-start">
         <General />
         <div className="grid w-svw gap-[32px]">
          <Calendar /> 
          <Calendar /> 
         </div>
      </div>
      
      <div className="grid grid-cols-3 gap-[32px]">
          <Card className="h-[300px]">Hello Card Component 1</Card>
          <Card className="h-[300px]">Hello Card Component 2</Card>
          <Card className="h-[300px]">Hello Card Component 3</Card>
      </div>
    </div>
  );
}

