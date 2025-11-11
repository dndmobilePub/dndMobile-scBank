import { Button } from "@/components/index";
function ComponentGuideButtonPage() {
  return (
    <div className="mt-3">
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Button</h2>
        <div className="flex items-center gap-3 mb-4">
          <Button variant="default">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded text-sm overflow-auto">
          {`import { Button } from '@/components/ui/button'

<Button variant="default">Primary</Button>`}
        </pre>
      </section>
    </div>
  );
}

export { ComponentGuideButtonPage };
