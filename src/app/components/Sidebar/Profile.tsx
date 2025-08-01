import { LogOut } from "lucide-react";

export function Profile() {
    return (
        <div className="flex items-center gap-3 grid-cols-profile">
            <img src="https://github.com/polyaneTuag.png" className="h-10 w-10 rounded-full" alt="" />
            <div className="flex flex-1 flex-col truncate">
                <span className="text-sm font-semibold text-zinc-700">Polyane Tuag</span>
                <span className="text-sm text-zinc-500 truncate">pollyportugues@gmail.com</span>
            </div>
            <button type="button" className="ml-auto rounded-md p-2 hover:bg-zinc-50">
                <LogOut className="h-5 w-5 text-zinc-500 hover:text-zinc-700 transition-colors" />  
            </button>
        </div>
    )
}
       