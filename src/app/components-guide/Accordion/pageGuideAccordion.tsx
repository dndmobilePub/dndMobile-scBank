import { AccordionItem,AccordionTrigger,Accordion,AccordionContent } from "@/components/index";
function ComponentGuideAccordionPage() {

  const AccordionContentStyle= `flex flex-col gap-4 text-balance`

  return (
    <div className="mt-3">
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Accordion</h2>
        <div className="flex items-center gap-3 mb-4">

          <Accordion
              type="single"
              collapsible
              className="w-full"
              defaultValue="item-1"
            >
            <AccordionItem value="item-1">
              <AccordionTrigger>Accordion 1</AccordionTrigger>
              <AccordionContent className={`${AccordionContentStyle}`}>
                <p>
                  본문내용 1
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Accordion 2</AccordionTrigger>
             <AccordionContent className={`${AccordionContentStyle}`}>
                <p>
                  본문내용 2
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Accordion 3</AccordionTrigger>
             <AccordionContent className={`${AccordionContentStyle}`}>
                <p>
                  본문내용 3
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          </div>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded text-sm overflow-auto">
          {`import { AccordionItem,AccordionTrigger,Accordion,AccordionContent } from "@/components/index";'

  <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
    <AccordionItem value="item-1">
      <AccordionTrigger>Accordion 1</AccordionTrigger>
      <AccordionContent>...</AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>Accordion 2</AccordionTrigger>
     <AccordionContent>...</AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger>Accordion 3</AccordionTrigger>
     <AccordionContent>...</AccordionContent>
    </AccordionItem>
  </Accordion>`}
        </pre>
      </section>
    </div>
  );
}

export { ComponentGuideAccordionPage };
