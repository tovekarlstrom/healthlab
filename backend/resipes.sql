CREATE TABLE recipes (
  id serial PRIMARY key,
  image text NOT NULL,
  name text UNIQUE NOT NULL,
  rating INTEGER NOT NULL,
  time INTEGER NOT NULL,
  likes INTEGER NOT NULL,
  comments INTEGER NOT NULL,
  protein INTEGER NOT NULL,
  carbs INTEGER NOT NULL,
  fat INTEGER NOT NULL,
  kcal INTEGER NOT NULL,
  ingredients text[] NOT NULL,
  instructions text[] NOT NULL
);
INSERT INTO recipes (name, image, rating, time, likes, comments, protein, carbs, fat, kcal, ingredients, instructions)
VALUES('Hawaiian Raw Poke Bowl', 'Pokebowl.png', 4, 45, 178, 9, 31, 43, 30, 572, ARRAY['140 g Salma lax, rå vikt', '40 g ris, okokt vikt', '50 g sjögrässallad, färdigköpt', '60 g avokado','20 g rädisor', '20 g gurka', '10 g sojasås', 'vårlök', 'sesamfrön'], ARRAY['Skär laxen i tuggstora bitar och marinera bitarna med sojasås i cirka 30 minuter.', 'Koka riset enligt anvisningar på förpackningen.', 'Skiva rädisor och gurka.', 'Dela, kärna ur och skär avokadon i bitar.', 'Komponera ihop skålen med sjögräs.', 'Toppa rätten med klippt vårlök och sesamfrön.']);

INSERT INTO recipes (name, image, rating, time, likes, comments, protein, carbs, fat, kcal, ingredients, instructions)
VALUES('Kycklingsallad', 'Kycklingsallad.png', 5, 35, 254, 6, 35, 30, 25, 450,
ARRAY[
  '300 g kycklingfilé',
  '200 g kokta linser',
  '1 rödlök',
  '2 tomater',
  '100 g fetaost',
  'Koriander',
  'Persilja',
  'Dressing'
],
ARRAY[
  'Koka kycklingfiléerna tills de är färdiga.',
  'Låt dem svalna och skär dem sedan i tärningar.',
  'Hacka lök, tomater och fetaost.',
  'I en stor skål kombinerar du de kokta linserna, skivad röd lök, tärnade tomater och kycklingtärningar.',
  'Toppa med persilja och korianer efter smak'
  ]);

  INSERT INTO recipes (name, image, rating, time, likes, comments, protein, carbs, fat, kcal, ingredients, instructions)
VALUES('Protein Smoothie', 'Smoothie.png', 5, 10, 211, 3, 30, 30, 15, 334,
ARRAY[
  '1 mogen banan',
  '240 ml osötad mandelmjölk',
  '30 g chokladproteinpulver ',
  '16 g mandelsmör',
  '5 g honung',
  '2 g kanel',
  'Krossad is (valfritt)',
  'Mynta'
], ARRAY[
  'Lägg i babanan, mandelmjölk, proteinpulver, mandelsmör, honung och kanel tillsammans i en mixer.',
  'Tillsätt några isbitar för att göra smoothien tjockare och kallare.',
  'Mixa alla ingredienser tills smoothien är slät.',
  'Smaka på smoothien och justera sötman eller tjockleken genom att tillsätta mer honung eller isbitar om det behövs.'
  ]);

  CREATE TABLE users (
  id serial PRIMARY key,
  full_name text NOT NULL,
  email text UNIQUE NOT NULL,
  password text NOT NULL
);
INSERT INTO users (full_name, email, password)
VALUES('test user','test@test.com', 'test123');
