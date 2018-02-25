DROP TABLE if exists players;
DROP TABLE if exists teams;

CREATE TABLE teams(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) not null,
  stadium VARCHAR(255),
  division VARCHAR(255),
  conference VARCHAR(255),
  head_coach VARCHAR(255),
  active BOOLEAN
);

CREATE TABLE players(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) not null,
  position VARCHAR(255),
  salary INTEGER
);