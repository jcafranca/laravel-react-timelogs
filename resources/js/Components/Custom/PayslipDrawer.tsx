import { CalendarCheck2, Minus, Plus } from "lucide-react"

import { Button } from "@/Components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/Components/ui/drawer"
import { DateRangePicker } from "./Picker/DateRangePicker"

export function PayslipDrawer() {
  return (
    <Drawer>
    <DrawerTrigger asChild>
      <CalendarCheck2 className="w-5 h-5" />
    </DrawerTrigger>
    <DrawerContent>
      <div className="w-full max-w-sm mx-auto">
        <DrawerHeader>
          <DrawerTitle>Payslip</DrawerTitle>
          <DrawerDescription>View your previous payslip, if available.</DrawerDescription>
        </DrawerHeader>
        <div className="p-4 pb-0">
          <DateRangePicker />
        </div>
        <DrawerFooter>
          <Button>Download</Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </div>
    </DrawerContent>
  </Drawer>
  )
}
