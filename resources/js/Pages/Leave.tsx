import Guest from "@/Layouts/GuestLayout";
import { Header } from "./Template/Header";
import { Footer } from "./Template/Footer";
import LeaveDataTable from "@/Components/Custom/LeaveDataTable";

export default function Leave() {
    return (
        <Guest title="Leave">
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <Header title="Leave" subtitle="Request and manage your leave." />
                <main className="flex flex-col flex-1 gap-4 p-4 md:gap-8 md:p-8">
                    <LeaveDataTable/>
                </main>
                <Footer/>
            </div>
        </Guest>
    )
}