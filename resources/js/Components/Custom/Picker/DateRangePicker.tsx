"use client"

import * as React from "react"
import { addDays, format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { DateRange } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button } from "@/Components/ui/button"
import { Calendar } from "@/Components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/Components/ui/popover"

interface DateRangePickerProps {
  className?: string | undefined,
  disabled?: boolean | undefined,
  onDateChange: (date: DateRange | undefined) => void;
}

export const DateRangePicker = (props: DateRangePickerProps) => {
  const { className, onDateChange } = props;
  const [isPopoverOpen, setIsPopoverOpen] = React.useState<boolean>(false)
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: undefined,
    to: undefined,
  });

  const handleDateChange = (selectedDate: DateRange | undefined) => {
    setDate(selectedDate);
    onDateChange(selectedDate);
  };

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-full justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
            disabled={props.disabled}
            onClick={() => setIsPopoverOpen(true)}>
            <CalendarIcon className="w-4 h-4 mr-2" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a range</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={handleDateChange}
            numberOfMonths={2}
          />
          <div className="grid justify-end grid-flow-col gap-1 p-4 mt-0">
            <Button variant={"outline"} size={"sm"} onClick={() => setIsPopoverOpen(false)}>Ok</Button>
            <Button variant={"outline"} size={"sm"} onClick={() => setDate(undefined)}>Clear</Button>
            <Button variant={"outline"} size={"sm"} onClick={() => setIsPopoverOpen(false)}>Close</Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
