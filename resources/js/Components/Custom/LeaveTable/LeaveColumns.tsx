"use client"

import { ColumnDef } from "@tanstack/react-table"

import { Badge } from "@/Components/ui/badge"
import { Checkbox } from "@/Components/ui/checkbox"

import { statuses } from '../DataTableComponents/Data'
import { Task } from "./LeaveSchema"
import { DataTableColumnHeader } from "../DataTableComponents/DataTable-Column-Header"
import { DataTableRowActions } from "./LeaveRowActions"

export const columns: ColumnDef<Task>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Id" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("id")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Date" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("date")}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "reason",
    filterFn: (row, id, value) => {
      return value.includes(row.getValue("reason"))
    },
    header: ({ column }) => (
      <DataTableColumnHeader className="hidden" column={column} title="Reason" />
    ),
    cell: ({ row }) => <div className="w-[80px] hidden">{row.getValue("reason")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "remarks",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Remarks" />
    ),
    cell: ({ row }) => {
      const label = row.original.reason
      return (
        <div className="flex space-x-2">
          {label && <Badge variant="outline" className="capitalize">{label}</Badge>}
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("remarks")}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "period",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Period" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("period")}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = statuses.find(
        (status) => status.value === row.getValue("status")
      )

      if (!status) {
        return null
      }

      return (
        <div className="flex w-[100px] items-center">
          {status.icon && (
            <status.icon className="w-4 h-4 mr-2 text-muted-foreground" />
          )}
          <span>{status.label}</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: "headremarks",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Head's Remarks" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("headremarks")}
          </span>
        </div>
      )
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
]