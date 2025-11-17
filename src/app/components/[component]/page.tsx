import React from "react";
import CopyCommand from "@/components/copy-command";

export default async function Component({
  params,
}: {
  params: { component: string };
}) {
  const componentName = (await params).component;
  const componentDisplayName = componentName
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  const copyLink = `npx shadcn@latest add ${process.env.NEXT_PUBLIC_BASE_URL}/r/${componentName}.json`;

  const componentModule = await import(
    `@/registry/default/${componentName}.tsx`
  );
  const DynamicComponent = componentModule.default;

  return (
    <div className="z-10 mx-auto flex min-h-dvh w-full max-w-4xl flex-col gap-6 p-4 lg:gap-8 lg:p-10 lg:pt-32">
      {/* change the hard coded top padding value for navbar overlay */}

      <div className="space-y-2">
        <h1 className="text-2xl font-bold tracking-tight lg:text-4xl">
          {componentDisplayName}
        </h1>
        <p className="text-neutral-400">
          Copy the command below to add this component to your project
        </p>
      </div>

      <CopyCommand baseCommand={copyLink} />

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Preview</h2>
        <div className="relative mx-auto flex w-full justify-center rounded-lg p-6">
          <DynamicComponent />
        </div>
      </div>
    </div>
  );
}
