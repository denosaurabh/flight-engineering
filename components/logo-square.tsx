import clsx from 'clsx';
import LogoIcon from './icons/logo';

export default function LogoSquare({ size }: { size?: 'sm' | 'xl' | undefined }) {
  return (
    <div
      className={clsx('flex items-center justify-center border bg-foreground', {
        'h-[40px] w-[40px] rounded-xl': !size,
        'h-[30px] w-[30px] rounded-lg': size === 'sm',
        'h-[70px] w-[70px] rounded-lg': size === 'xl'
      })}
    >
      <LogoIcon
        className={clsx({
          'h-[16px] w-[16px]': !size,
          'h-[10px] w-[10px]': size === 'sm',
          'h-[60px] w-[60px] rounded-lg': size === 'xl'
        })}
      />
    </div>
  );
}
