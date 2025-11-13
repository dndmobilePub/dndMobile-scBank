import { Button, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/index";
function ComponentGuideCardPage() {
  return (
    <div className="mt-3">
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Card</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Card className="shadow">
            <CardHeader>
              <CardTitle className="text-lg">Welcome</CardTitle>
              <CardDescription>Sign in to your account</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                This is a short card example using Tailwind utilities.
              </p>
            </CardContent>
            <CardFooter>
              <Button>Get started</Button>
            </CardFooter>
          </Card>

          <Card className="shadow">
            <div className="h-40 bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500">
              Image/Preview
            </div>
            <CardHeader>
              <CardTitle className="text-lg">Product</CardTitle>
              <CardDescription>Product short description</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-xl font-bold text-green-600">$49.99</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Buy</Button>
            </CardFooter>
          </Card>
        </div>

        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded text-sm overflow-auto mt-4">
          {`import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'

<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Desc</CardDescription>
  </CardHeader>
  <CardContent>...</CardContent>
  <CardFooter>...</CardFooter>
</Card>`}
        </pre>
      </section>
    </div>
  );
}

export { ComponentGuideCardPage };
