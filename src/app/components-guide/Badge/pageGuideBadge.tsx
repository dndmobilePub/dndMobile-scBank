import { AlertCircleIcon, BadgeCheckIcon, CheckIcon } from "lucide-react"
import { Badge   } from "@/components/index";
function ComponentGuideBadgePage() {
  return (
    <div className="mt-3">
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Badge</h2>
        <div className="flex items-center gap-3 mb-4">
          <div className="flex flex-col items-center gap-2">
            <div className="flex w-full flex-wrap gap-2">
              <Badge>Badge</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>
            <div className="flex w-full flex-wrap gap-2">
              <Badge
                variant="secondary"
                className="bg-blue-500 text-white dark:bg-blue-600"
              >
                <BadgeCheckIcon />
                Verified
              </Badge>
              <Badge className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums">
                8
              </Badge>
              <Badge
                className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums"
                variant="destructive"
              >
                99
              </Badge>
              <Badge
                className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums"
                variant="outline"
              >
                20+
              </Badge>
              </div>
            </div>
        </div>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded text-sm overflow-auto">
{`import { Badge } from "@/components/index";

<Badge>Badge</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>`}
        </pre>
      </section>
    </div>
  );
}

export { ComponentGuideBadgePage };
