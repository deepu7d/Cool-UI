import React from "react";

export default async function Component({
  params,
}: {
  params: { component: string };
}) {
  const componentName = (await params).component;
  console.log(componentName);
  const componentModule = await import(
    `@/registry/default/${componentName}.tsx`
  );
  const DynamicComponent = componentModule.default;
  return (
    <div className="flex justify-center items-center bg-neutral-500 w-full p-6 h-dvh ">
      <DynamicComponent />
    </div>
  );
}
