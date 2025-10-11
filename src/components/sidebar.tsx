import { componentsList } from "@/lib/components";
import Link from "next/link";
export default function SiderBar() {
  return (
    <div className="flex flex-col h-dvh w-[10%] bg-dark gap-5 p-6">
      {componentsList.map((component) => (
        <Link
          href={`/components/${component.fileName}`}
          className="text-center"
          key={component.name}
        >
          {component.name}
        </Link>
      ))}
    </div>
  );
}
