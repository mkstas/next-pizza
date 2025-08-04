import { cn } from '@/lib/utils';
import { X } from 'lucide-react';
import { FC } from 'react';
import { CartItemProps } from './cart-item-details/cart-item-details.types';
import { CartItemDetailsImage } from './cart-item-details/cart-item-details-image';
import { CartItemInfo } from './cart-item-details/cart-item-info';
import { CartItemDetailsPrice } from './cart-item-details/cart-item-details-price';
import { CartItemDetailsCountButton } from './cart-item-details/cart-item-details-count-button';

interface Props extends CartItemProps {
  onClickCountButton?: (type: 'plus' | 'minus') => void;
  onClickRemove?: () => void;
  className?: string;
}

export const CheckoutCartItem: FC<Props> = ({
  name,
  price,
  imageUrl,
  quantity,
  details,
  className,
  disabled,
  onClickCountButton,
  onClickRemove,
}) => {
  return (
    <div
      className={cn(
        'flex items-center justify-between',
        {
          'pointer-events-none opacity-50': disabled,
        },
        className,
      )}
    >
      <div className="flex flex-1 items-center gap-5 text-balance">
        <CartItemDetailsImage src={imageUrl} />
        <CartItemInfo name={name} details={details} />
      </div>

      <CartItemDetailsPrice value={price} />

      <div className="ml-20 flex items-center gap-5">
        <CartItemDetailsCountButton onClick={onClickCountButton} value={quantity} />
        <button type="button" onClick={onClickRemove}>
          <X className="cursor-pointer text-gray-400 hover:text-gray-600" size={20} />
        </button>
      </div>
    </div>
  );
};
