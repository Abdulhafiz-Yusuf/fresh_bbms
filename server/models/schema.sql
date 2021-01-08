CREATE TABLE bloodgroup (
  bg_id SERIAL PRIMARY KEY,
  bg VARCHAR(255),
  rhd VARCHAR(255),
  blood_qty BIGINT,
  date_created TIMESTAMP
);


CREATE TABLE users (
  users_id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE,
  email VARCHAR(255) UNIQUE,
  email_verified BOOLEAN,
  f_name VARCHAR(255) ,
  l_name VARCHAR(255) ,
  date_created DATE,
  last_login TIMESTAMP,
  phone BIGINT,
  user_loc_state VARCHAR(255),
  loc_lga VARCHAR(255),
  donor BOOLEAN,
  blood_group int REFERENCES blood_group(bg_id),
 );


CREATE TABLE bloodcenter (
  bc_id SERIAL PRIMARY KEY,
  bc_name VARCHAR(255),
  bc_loc_state VARCHAR(255),
  bc_loc_lga VARCHAR(255),
  blood_group int REFERENCES blood_group(bg_id),
  date_created TIMESTAMP,
  );

CREATE TABLE booking (
  bk_id SERIAL PRIMARY KEY,
  blood_group int REFERENCES blood_group(bg_id),
  blood_center int REFERENCES bloodcenter(bc_id),
  user INT REFERENCES users(users_id),
  payment_status int REFERENCES bloodcenter(p_id),
  date_created TIMESTAMP
);


CREATE TABLE payment (
  p_id SERIAL PRIMARY KEY,
  payment_status BOOLEAN,
  blood_center INT REFERENCES bloodcenter(bc_id),
  user INT REFERENCES users(users_id),
  date_created TIMESTAMP
);


CREATE TABLE bloodgroup (
  bg_id SERIAL PRIMARY KEY,
  bg VARCHAR(255),
  rhd VARCHAR(255),
  blood_qty BIGINT,
  date_created TIMESTAMP
);