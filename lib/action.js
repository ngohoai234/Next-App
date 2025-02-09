'use server';

export const shareMeal = async (formData) => {
  'use server';

  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('name'),
    creator: formData.get('title'),
    creator_email: formData.get('name'),
  };

  console.log(meal);
};
