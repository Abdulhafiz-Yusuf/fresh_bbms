CREATE TABLE users (
  users_id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE,
  email VARCHAR(255),
  email_verified BOOLEAN,
  phone INT,
  date_created DATE,
  last_login DATE,
  user_loc_state VARCHAR(255),
  loc_lga VARCHAR(255),
  donor BOOLEAN,
  bg VARCHAR(255)
  );


CREATE TABLE bloodcenter (
  blood_ccenter_id SERIAL PRIMARY KEY,
  center VARCHAR(255),
  loc_state VARCHAR,
  loc_lga VARCHAR(255),
  users_id INT REFERENCES users(users_id),
  date_created TIMESTAMP
  );

CREATE TABLE booking (
  booking_id SERIAL PRIMARY KEY,
  bg VARCHAR(255),
  blood_ccenter_id int REFERENCES bloodcenter(blood_ccenter_id),
  users_id INT REFERENCES users(users_id),
  payment_status BOOLEAN,
  date_created TIMESTAMP
);


CREATE TABLE payment (
  payment_id SERIAL PRIMARY KEY,
  payment_status BOOLEAN,
  blood_ccenter_id INT REFERENCES bloodcenter(blood_ccenter_id),
  users_id INT REFERENCES users(users_id),
  date_created TIMESTAMP
);