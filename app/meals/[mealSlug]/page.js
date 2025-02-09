import Image from 'next/image';
import classes from './page.module.css';
import { getMeal } from '@/lib/meals';

export default async function MealDetailsPage({ params }) {
  const meal = await getMeal(params.mealSlug);
  const instructions = meal.instructions.replace(/\n/g, '<br/>');
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image fill src={meal.image} alt={meal.title} />
        </div>
      </header>
      <div className={classes.headerText}>
        <h1>{meal.title}</h1>
        <p className={classes.creator}>
          by <a href={`mailto:${'EMAIL'}`}>{meal.creator_email}</a>
        </p>
        <p className={classes.summary}>{meal.summary}</p>
      </div>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: instructions,
          }}
        ></p>
      </main>
    </>
  );
}
