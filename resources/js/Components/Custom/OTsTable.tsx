import { Metadata } from "next"
import { z } from "zod"

import { columns } from "./OvertimeTable/OTColumns"
import { DataTable } from "./DataTableComponents/DataTable"
import { taskSchema } from "./OvertimeTable/OTSchema"

export const metadata: Metadata = {
  title: "Overtime",
  description: "",
}

// Simulate a database read for tasks.
function getTasks() {
  const data = [
    {
      "id": "TEMP123",
      "date": "2024-06-23",
      "hrs": "1:30",
      "purpose": "Program updates",
      "status": "in progress",
      "remarks": "Important Matters",
    }
  ]  
  return z.array(taskSchema).parse(data)
}

export default function OTsTable() {
  const tasks = getTasks();
  return (
    <div className="container flex-col flex-1 h-full p-8 space-y-8 md:flex">
      <DataTable data={tasks} columns={columns} name="ot"/>
    </div>
  )
}