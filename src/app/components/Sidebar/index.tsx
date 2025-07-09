import { Logo } from "./Logo";
import { MainNavigation } from "./MainNavigation";
import { UsedSpaceWidget } from "./UsedSpaceWidget";
import { Profile } from "./Profile";
import { Input } from "./Input";

export function Sidebar() {
  return (
    <aside className="border-r border-zinc-200 px-5 py-8 shadow flex flex-col gap-6">
      <Logo />
      <Input />

      <MainNavigation />

      <UsedSpaceWidget />

      <div className="h-px bg-zinc-200" />
      <Profile />
    </aside>
  );
}
