import sql from 'better-sqlite3';
import fs from 'node:fs';
import slugify from 'slugify';
import xss from 'xss';

const db = sql('meals.db');

export const getMeals = async () => {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });

  return db.prepare('SELECT * FROM meals').all();
};

export const getMeal = async (slug) => {
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
};

export const saveMeal = async (meal) => {
  meal.slug = slugify(meal.title, {
    lower: true,
  });

  meal.instructions = xss(meal.instructions);

  const stream = fs.createWriteStream(`public/images/${meal.image}`);
  const bufferedImage = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error(`Error saving failed`);
    }
  });

  meal.image = `/images/${meal.image}`;

  db.prepare(
    `
      INSERT INTO meals (title, summary, instructions, creator, creator_email, image, slug) 

      VALUES(
        @title,
        @summary,
        @instructions,
        @creator,
        @creator_email,
        @image,
        @slug
      )
    `
  ).run(meal);
};
