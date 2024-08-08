"use client"

import { Table } from "@tanstack/react-table"

import { Button } from "@/Components/ui/button"
import { Input } from "@/Components/ui/input"
import { DataTableViewOptions } from "../DataTableComponents/DataTable-View-Options"

import { leave_reasons, priorities, statuses } from "../DataTableComponents/Data"
import { DataTableFacetedFilter } from "../DataTableComponents/DataTable-Faceted-Filter"
import { CrossIcon, XIcon } from "lucide-react"
import { Dialog } from "@headlessui/react"
import { LeaveRequestDialog } from "./LeaveRequestDialog"

interface DataTableToolbarProps<TData> {
  table: Table<TData>
}

export function LeaveTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center flex-1 space-x-2">
        <Input
          placeholder="Filter tasks..."
          value={(table.getColumn("date")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("date")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {table.getColumn("status") && (
          <DataTableFacetedFilter
            column={table.getColumn("status")}
            title="Status"
            options={statuses}
          />
        )}
        {table.getColumn("reason") && (
          <DataTableFacetedFilter
            column={table.getColumn("reason")}
            title="Reason"
            options={leave_reasons}
          />
        )}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <XIcon className="w-4 h-4 ml-2" />
          </Button>
        )}
      </div>
      <LeaveRequestDialog/>
      <DataTableViewOptions table={table} />
    </div>
  )
}