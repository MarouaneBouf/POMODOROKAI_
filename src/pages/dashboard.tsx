import { SearchDemo } from "@/mainParts/commandSearch";
import { MainNav } from "@/mainParts/minNav";
import { UserNav } from "@/mainParts/userNav";

export function Dashboard() {
  return (
    <>
      <div className="hidden flex-col md:flex">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
              <SearchDemo />
              <UserNav />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
