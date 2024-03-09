import { cn } from 'lib/utils';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';

export const FAQ = ({ className }: { className?: string }) => {
  return (
    <div className={cn('flex flex-col gap-4', className)}>
      <p className="text-lg font-medium text-foreground/80">FAQ</p>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
