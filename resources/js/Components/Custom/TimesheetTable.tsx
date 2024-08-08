import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/Components/ui/table"

const current_timesheet = [
    {
        date: "",
        in: "0",
        out: "0",
        r_hrs: "0",
        r_ot: "",
        rd_ot: "",
        h_ot: "",
        nd: "",
        td: ""
    }
]
const start_date = Date.parse("2024-06-05")
const cutoff_date = Date.parse("2024-06-19")
function getDatesBetween() {
    let dates = [];
    let currentDate = new Date(start_date);

    while (currentDate <= new Date(cutoff_date)) {
        dates.push(new Date(currentDate));
        currentDate.setDate(currentDate.getDate() + 1);
    }

    return dates;
}
function formatDate(d:Date) {
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
const temp = getDatesBetween()
export function TimesheetTable() {
    return (
        <Table>
            <TableCaption>A list of your recent time in and out.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="font-semibold">DATE</TableHead>
                    <TableHead className="font-semibold">IN</TableHead>
                    <TableHead className="font-semibold">OUT</TableHead>
                    <TableHead className="font-semibold">R Hrs</TableHead>
                    <TableHead className="font-semibold">R OT</TableHead>
                    <TableHead className="font-semibold">RD OT</TableHead>
                    <TableHead className="font-semibold">H OT</TableHead>
                    <TableHead className="font-semibold">ND</TableHead>
                    <TableHead className="font-semibold">TD</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {temp.map((d) => (
                    <TableRow key={d.getDate()}>
                        <TableCell className="font-medium">{formatDate(d)}</TableCell>
                        <TableCell>{current_timesheet[0].in}</TableCell>
                        <TableCell>{current_timesheet[0].in}</TableCell>
                        <TableCell>{current_timesheet[0].in}</TableCell>
                        <TableCell>{current_timesheet[0].in}</TableCell>
                        <TableCell>{current_timesheet[0].in}</TableCell>
                        <TableCell>{current_timesheet[0].in}</TableCell>
                        <TableCell>{current_timesheet[0].in}</TableCell>
                        <TableCell>{current_timesheet[0].in}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={3}>Total</TableCell>
                    <TableCell>0</TableCell>
                    <TableCell>0</TableCell>
                    <TableCell>0</TableCell>
                    <TableCell colSpan={3}></TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    )
}
