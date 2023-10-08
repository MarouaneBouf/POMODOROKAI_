import { Input } from "@/components/ui/input";

export function SearchDemo() {
  return (
    <div>
      <Input
        type="search"
        placeholder="Search..."
        className="md:w-[100px] lg:w-[200px]"
      />
    </div>
  );
}
