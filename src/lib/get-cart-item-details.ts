import { mapPizzaType, PizzaSize, PizzaType } from '@/constants/pizza';
import { Ingredient } from '@prisma/client';

export const getCartItemDetails = (pizzaType: PizzaType, pizzaSize: PizzaSize, ingredients: Ingredient[]) => {
  const details = [];

  if (pizzaSize && pizzaType) {
    details.push(`${mapPizzaType[pizzaType]} тесто, ${pizzaSize} см`);
  }

  if (ingredients) {
    details.push(...ingredients.map(ingredient => ingredient.name));
  }

  return details.join(', ');
};
