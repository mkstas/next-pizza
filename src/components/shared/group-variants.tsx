'use client';

import { cn } from '@/lib/utils';
import { FC } from 'react';

export type Variant = {
  name: string;
  value: string;
  disabled?: boolean;
};

interface Props {
  items: readonly Variant[];
  onClick?: (value: Variant['value']) => void;
  value?: Variant['value'];
  className?: string;
}

export const GroupVariants: FC<Props> = ({ className, items, onClick, value }) => {
  return (
    <div className={cn(className, 'flex justify-between rounded-md bg-white p-1 select-none')}>
      {items.map(item => (
        <button
          key={item.name}
          onClick={() => onClick?.(item.value)}
          className={cn(
            'flex h-[30px] flex-1 cursor-pointer items-center justify-center rounded-md px-5 text-sm transition-all duration-400',
            {
              'text-primary bg-white shadow': item.value === value,
              'pointer-events-none text-gray-500 opacity-50': item.disabled,
            },
          )}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};
