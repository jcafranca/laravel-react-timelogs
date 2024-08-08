import { Metadata } from "next"
import { z } from "zod"

import { columns } from "./LeaveTable/LeaveColumns"
import { DataTable } from "./DataTableComponents/DataTable"
import { taskSchema } from "./LeaveTable/LeaveSchema"

export const metadata: Metadata = {
  title: "Leaves",
  description: "",
}

// Simulate a database read for tasks.
function getTasks() {
  const data = [
    {
      "id": "TEMP123",
      "date": "2024-06-23",
      "reason": "sick",
      "remarks": "Important Matters",
      "period": "",
      "status": "in progress",
      "headremarks": "",
    }
  ]  
  return z.array(taskSchema).parse(data)
}

export default function LeaveDataTable() {
  const tasks = getTasks();
  return (
    <div className="container flex-col flex-1 h-full p-8 space-y-8 md:flex">
      <DataTable data={tasks} columns={columns} name="leave"/>
    </div>
  )
}