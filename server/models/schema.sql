CREATE TABLE bloodgroup (
  bg_id SERIAL PRIMARY KEY,
  bg VARCHAR(255),
  rhd VARCHAR(255),
  qty BIGINT,
  c_date_created TIMESTAMP --created Date
);


CREATE TABLE users (
  users_id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE,
  email VARCHAR(255) UNIQUE,
  email_verified BOOLEAN,
  f_name VARCHAR(255) ,
  l_name VARCHAR(255) ,
  c_date_created TIMESTAMP --created Date
  last_login TIMESTAMP,
  phone BIGINT,
  user_loc_state VARCHAR(255),
  loc_lga VARCHAR(255),
  donor BOOLEAN,
  blood_group int REFERENCES blood_group(bg_id),
 );


CREATE TABLE bloodcenter (
  bc_id SERIAL PRIMARY KEY,
  name VARCHAR(255),  -- name of the center
  locstate VARCHAR(255),  -- location State 
  loclga VARCHAR(255),  -- location L.G.A
  bg int REFERENCES blood_group(bg_id), --blood group
  qty INT,  -- blood Quantity
  c_date_created TIMESTAMP --created Date
  );

CREATE TABLE booking (
  bk_id SERIAL PRIMARY KEY,
  bg int REFERENCES blood_group(bg_id), -- blood group
  blood_center int REFERENCES bloodcenter(bc_id),  -- blood center 
  user INT REFERENCES users(users_id),  -- user
  p_status int REFERENCES payment(p_id), -- payment state
  c_date_created TIMESTAMP --created Date
);


CREATE TABLE payment (
  p_id SERIAL PRIMARY KEY,
  p_status BOOLEAN, -- payment status
  blood_center INT REFERENCES bloodcenter(bc_id), -- blood center 
  user INT REFERENCES users(users_id), -- user 
  c_date_created TIMESTAMP --created Date
);


CREATE TABLE bloodgroup (
  bg_id SERIAL PRIMARY KEY,
  bg VARCHAR(255),
  rhd VARCHAR(255),
  blood_qty BIGINT,
  date_created TIMESTAMP
);