import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/index";
import { ScBox, ScTextField, ScSearchField } from "@/app/scBank-components/component/ui/index";
import {
  ScBtnGuide,
  ScBoxGuide,
  ScInputGuide,
  ScSelectGuide,
  ScCommonGuide,
  ScListGuide,
  ScHrGuide,
  ScAccordionGuide,
  ScTabGuide,
} from "./index";

export function SamplePage() {
  const pageList = [
    { name: "ScCommonGuide", com: <ScCommonGuide /> },
    { name: "Button", com: <ScBtnGuide /> },
    { name: "ScBox,ScVFlex,ScHFlex", com: <ScBoxGuide /> },
    { name: "ScInputFiled", com: <ScInputGuide /> },
    { name: "ScSelect", com: <ScSelectGuide /> },
    { name: "ScList", com: <ScListGuide /> },
    { name: "ScHrGuide", com: <ScHrGuide /> },
    { name: "ScAccordionGuide", com: <ScAccordionGuide /> },
    { name: "ScTab", com: <ScTabGuide /> },
  ];

  return (
    <ScBox className="flex w-full flex-col gap-6 mt-4">
      <Tabs defaultValue="Button" className="w-full">
        <TabsList>
          {pageList.map((item) => {
            return (
              <TabsTrigger key={item.name} value={item.name}>
                {item.name}
              </TabsTrigger>
            );
          })}
        </TabsList>
        {pageList.map((item) => {
          return (
            <TabsContent key={item.name} value={item.name}>
              {item.com}
            </TabsContent>
          );
        })}
      </Tabs>
    </ScBox>
  );
}
