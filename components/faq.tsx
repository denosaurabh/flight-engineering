import { cn } from 'lib/utils';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';

export const FAQ = ({ className }: { className?: string }) => {
  return (
    <div className={cn('flex flex-col gap-4', className)}>
      <p className="text-lg font-medium text-foreground/80">FAQ</p>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>When will the shipping start after pre-order?</AccordionTrigger>
          <AccordionContent>
            Shipping for pre-orders will commence between the 3rd and 4th week of April. Please note
            that subsequent batches will be shipped out at a much faster pace.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>Can I cancel my order?</AccordionTrigger>
          <AccordionContent>
            You have the option to cancel your order before it has been shipped. Additionally, we
            offer a 7-day return policy after the item has been delivered. For more details on
            cancellations and returns, please visit our policy page at
            https://flight.engineering/shipping-return-policy.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>How much refund will I get on cancellation or return?</AccordionTrigger>
          <AccordionContent>
            For cancellations, you will receive a 100% refund, excluding the payment processing fee.
            In the case of returns, we typically refund 80% of the purchase price. However, full
            refunds may be granted on a case-by-case basis.{' '}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
