import { Button } from 'components/ui/button';
import { Input } from 'components/ui/input';
import { cn } from 'lib/utils';

export const NewComponentForm = () => {
  return (
    <div
      className={cn(
        'relative flex flex-col items-center justify-center gap-2 rounded-md bg-background p-3 shadow-sm'
      )}
    >
      <p className="mb-3 text-xl font-medium">Want another module?</p>

      <div className="flex w-full max-w-xs flex-col justify-center gap-2">
        <Input className="w-full" placeholder="type of module? or name?" type="text" />
        <Button size="sm" className="w-full">
          Send
        </Button>
      </div>
    </div>
  );
};
