import Image from "next/image"
import { AspectRatio  } from "@/components/index";
function ComponentGuideAspectRatioPage() {
  return (
    <div className="mt-3">
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Aspect-ratio</h2>
        <div className="flex items-center gap-3 mb-4">
          <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg">
            <Image
              src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
              alt="Photo by Drew Beamer"
              fill
              className="h-full w-full rounded-lg object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </AspectRatio>
         </div>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded text-sm overflow-auto">
{`import Image from "next/image"; 
import { AspectRatio } from "@/components/index";'

<AspectRatio ratio={16 / 9} className="bg-muted rounded-lg">
  <Image
    src="이미지 경로"
    alt="이미지 alt"
    fill
  />
</AspectRatio>`}
        </pre>
      </section>
    </div>
  );
}

export { ComponentGuideAspectRatioPage };
