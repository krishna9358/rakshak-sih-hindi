import { cn } from "@/lib/utils";

export const SphereMask = ({ reverse = false }: { reverse?: boolean }) => {
  return (
    <div
      className={cn(
        // color
        "bg-gradient-to-br from-gray-900 to-black",
        "pointer-events-none relative -z-[2] mx-auto h-[50rem] overflow-hidden",

        // sphere mask
        "[mask-image:radial-gradient(ellipse_at_center_center,#000000,transparent_50%)]",

        // reverse
        reverse ? "my-[-22rem] rotate-180 md:mt-[-30rem]" : "my-[-18.8rem]",

        // before
        "before:absolute before:inset-0 before:h-full before:w-full before:opacity-40 before:[background-image:radial-gradient(circle_at_bottom_center,#1a1a1a,transparent_70%)]",

        // after
        "after:absolute after:-left-1/2 after:top-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[50%] after:border-t after:border-gray-700 after:bg-gray-900"
      )}
    ></div>
  );
};
