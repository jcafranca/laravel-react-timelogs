import Guest from "@/Layouts/GuestLayout";
import { Header } from "./Template/Header";

export default function Memo() {
    return (
        <Guest title="Memo">
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <Header title="Memo" subtitle="" />

                <main></main>
            </div>
        </Guest>
    )
}