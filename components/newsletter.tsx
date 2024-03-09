import { Button } from 'components/ui/button';
import { Input } from 'components/ui/input';

export const Newsletter = () => {
  return (
    <div className="flex w-full flex-col items-center gap-2 space-y-2 rounded-lg border border-border bg-background/50 px-4 py-6 shadow-sm">
      <p className="text text-foreground/80">
        Sign up for updates, and get early access to new components.
      </p>
      <div className="flex w-full flex-col justify-center gap-2 sm:flex-row">
        <Input className="w-full sm:w-[300px]" placeholder="Enter your email" type="email" />
        <Button size="sm">Subscribe</Button>
      </div>
    </div>
  );
};
