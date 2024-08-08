import {
    ArrowDownIcon,
    ArrowRightIcon,
    ArrowUpIcon,
    BabyIcon,
    BriefcaseMedicalIcon,
    CheckCheckIcon,
    CrossIcon,
    HeartPulseIcon,
    HourglassIcon,
    NotebookPenIcon,
    ThermometerIcon,
    ThermometerSunIcon,
    TreePalmIcon,
  } from "lucide-react"

  export const statuses = [
    {
      value: "approved",
      label: "Approved",
      icon: CheckCheckIcon,
    },
    {
      value: "disapproved",
      label: "Disapproved",
      icon: CrossIcon,
    },
    {
      value: "in progress",
      label: "In Progress",
      icon: HourglassIcon,
    },
  ]
  
  export const priorities = [
    {
      label: "Low",
      value: "low",
      icon: ArrowDownIcon,
    },
    {
      label: "Medium",
      value: "medium",
      icon: ArrowRightIcon,
    },
    {
      label: "High",
      value: "high",
      icon: ArrowUpIcon,
    },
  ]

  export const leave_reasons = [
    {
      value: "sick",
      label: "Sick",
      icon: ThermometerSunIcon,
    },
    {
      value: "vacation",
      label: "Vacation",
      icon: TreePalmIcon,
    },
    {
      value: "magna carta",
      label: "Magna Carta",
      icon: HeartPulseIcon,
    },
    {
      value: "maternity",
      label: "Maternity",
      icon: BabyIcon,
    },
    {
      value: "paternity",
      label: "Paternity",
      icon: BriefcaseMedicalIcon,
    },
    {
      value: "others",
      label: "Others",
      icon: NotebookPenIcon,
    }
  ] 