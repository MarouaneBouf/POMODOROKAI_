import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Faq() {
  return (
    <div className="flex flex-col items-center justify-center text-black dark:text-white font-SF pt-10 mb-[5rem]">
      <div className="font-SF p-4 text-[4rem] max-sm:text-[2rem] font-semibold">
        FAQ
      </div>
      <Accordion
        type="single"
        collapsible
        className="w-[45rem] max-sm:w-[17rem]"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-[1.2rem] max-sm:text-[1rem] font-medium">
            Is it free?
          </AccordionTrigger>
          <AccordionContent className="text-[1rem]">
            Yes. it's 100% free.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-[1.2rem] max-sm:text-[1rem] font-medium">
            Is it user friendly?
          </AccordionTrigger>
          <AccordionContent className="text-[1rem]">
            Yes. it's the simplest app you'll ever use!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-[1.2rem] max-sm:text-[1rem] first-letter font-medium">
            Is it opensource?
          </AccordionTrigger>
          <AccordionContent className="text-[1rem]">
            No, but soon we'll make it opensource.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
