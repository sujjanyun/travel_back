CREATE TABLE location (
    id serial PRIMARY KEY,
    location text NOT NULL UNIQUE,
    slug text NOT NULL UNIQUE
);

CREATE TABLE activity (
    id serial PRIMARY KEY,
    date text,
    activity_title text NOT NULL,
    activity_body text NOT NULL,
    location_slug text REFERENCES location (slug)
)