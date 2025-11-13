import { Avatar, AvatarImage, AvatarFallback } from "@/components/index";
function ComponentGuideAvatarPage() {
  return (
    <div className="mt-3">
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Avatar</h2>
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="/assets/avif-test-image.avif" alt="avatar" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium">Jane Doe</div>
            <div className="text-sm text-gray-500">Product Manager</div>
          </div>
        </div>

        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded text-sm overflow-auto mt-4">
          {`import { Avatar } from '@/components/ui/avatar'

<Avatar>
  <Avatar.Image src="/path/to/img.jpg" alt="avatar" />
</Avatar>`}
        </pre>
      </section>
    </div>
  );
}

export { ComponentGuideAvatarPage };
