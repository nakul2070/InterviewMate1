import React, { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { addMonths, format } from "date-fns"; // Correct import
import { Calendar } from "@/components/ui/calendar";

function MonthSelection({ selectedMonth = () => {} }) { // Default to empty function
    const today = new Date();
    const nextMonths = addMonths(today, 0);
    const [month, setMonth] = useState(nextMonths);
  
    return (
      <div>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="flex gap-2 items-center text-slate-500"
            >
              <CalendarDays className="h-5 w-5" />
              {format(month, "MMM yyyy")}
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <Calendar
              mode="single"
              month={month}
              onMonthChange={(value) => {
                selectedMonth(value); // Now guaranteed to be a function
                setMonth(value);
              }}
              className="flex flex-1 justify-center"
            />
          </PopoverContent>
        </Popover>
      </div>
    );
  }
  

export default MonthSelection;
