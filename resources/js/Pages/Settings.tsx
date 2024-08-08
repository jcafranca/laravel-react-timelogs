import Guest from "@/Layouts/GuestLayout";
import { Header } from "./Template/Header";

export default function Settings() {
    return (
        <Guest title="Settings">
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <Header title="Settings" subtitle="" />

                <main></main>
            </div>
        </Guest>
    )
}