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
    onDateChange: (dates: Date[] | undefined) => void;
}


export const MultipleDatePicker = (props: DateRangePickerProps) => {
    const { className, onDateChange } = props;
    const [selectedDates, setSelectedDates] = React.useState<Date[] | undefined>([]);
    const [isPopoverOpen, setIsPopoverOpen] = React.useState<boolean | undefined>(false);

    const handleDateChange = (dates: Date[] | undefined) => {
        setSelectedDates(dates);
        onDateChange(dates);
    };
    return (
        <div className={cn("grid gap-2", className)}>
            <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
                <PopoverTrigger asChild>
                    <Button id="date" variant={"outline"} className={cn(
                            "w-auto justify-start text-left font-normal overflow-hidden overflow-ellipsis",
                            !selectedDates || selectedDates.length === 0 ? "text-muted-foreground" : ""
                        )}
                        disabled={props.disabled}
                        onClick={() => setIsPopoverOpen(true)}>
                        <CalendarIcon className="w-4 h-4 mr-2" />
                        {selectedDates && selectedDates.length > 0 ? (
                            <span>
                                {selectedDates.map(date => format(date, "LLL dd, y")).join(", ")}
                            </span>
                        ) : (
                            <span>Pick a dates</span>
                        )}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                    <Calendar initialFocus
                        mode="multiple"
                        selected={selectedDates}
                        onSelect={handleDateChange}
                        numberOfMonths={2} />
                    <div className="grid justify-end grid-flow-col gap-1.5 p-4 mt-0">
                        <Button variant={"outline"} size={"sm"} onClick={() => setIsPopoverOpen(false)}>Ok</Button>
                        <Button variant={"outline"} size={"sm"} onClick={() => setSelectedDates(undefined)}>Clear</Button>
                        <Button variant={"outline"} size={"sm"} onClick={() => setIsPopoverOpen(false)}>Close</Button>
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    )
}
