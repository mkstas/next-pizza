import { cn } from '@/lib/utils';

interface Props {
  name: string;
  details?: string;
  className?: string;
}

export const CartItemInfo: React.FC<Props> = ({ name, details, className }) => {
  return (
    <div>
      <div className={cn('flex items-center justify-between', className)}>
        <h2 className="flex-1 text-lg leading-6 font-bold">{name}</h2>
      </div>
      {details && <p className="w-[90%] text-xs text-gray-400">{details}</p>}
    </div>
  );
};
