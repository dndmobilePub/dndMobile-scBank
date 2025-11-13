import { Input } from "@/components/index";
function ComponentGuideInputPage() {
  return (
    <div className="mt-3">
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Form / Input</h2>
        <div className="max-w-md">
          <label className="block text-sm font-medium mb-1">Email</label>
          <Input placeholder="you@example.com" className="mb-3" />
          <label className="block text-sm font-medium mb-1">Password</label>
          <Input placeholder="••••••••" type="password" />
        </div>

        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded text-sm overflow-auto mt-4">
          {`import { Input } from '@/components/ui/input'

<Input placeholder="you@example.com" />`}
        </pre>
      </section>
    </div>
  );
}

export { ComponentGuideInputPage };
