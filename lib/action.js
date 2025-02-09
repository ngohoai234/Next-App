'use server';

import { redirect } from 'next/navigation';
import { saveMeal } from './meals';

const isInValidText = (text) => text === '' || text.trim() === '';

export const shareMeal = async (currentState, formData) => {
  'use server';

  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
    creator: formData.get('title'),
    creator_email: formData.get('name'),
  };

  if (
    isInValidText(meal.title) ||
    isInValidText(meal.summary) ||
    isInValidText(meal.instructions) ||
    isInValidText(meal.image) ||
    isInValidText(meal.creator) ||
    isInValidText(meal.creator_email) ||
    !meal.creator_email.includes('@')
  ) {
    return {
      message: 'Invalid input',
    };
  }

  saveMeal(meal);

  redirect('/meals');
};
