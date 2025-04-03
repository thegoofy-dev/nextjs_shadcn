// import { Button } from "@/components/ui/button"
// import { LoaderPinwheel } from 'lucide-react';
// import { Ellipsis } from 'lucide-react';
// import { RotateCcw } from 'lucide-react';

import General from "@/components/Cards/General";

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-8">
         <General />
         <div ></div>
      </div>
      {/* <Button disabled>
        <Ellipsis className="animate-spin" />
        <LoaderPinwheel className="animate-spin" />
        <RotateCcw className="animate-spin" />
        Something is Cooking
      </Button> */}
    </div>
  )
}
