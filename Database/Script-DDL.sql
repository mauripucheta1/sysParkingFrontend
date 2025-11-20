CREATE TABLE roles (
	id_rol SERIAL PRIMARY KEY,
	role_name VARCHAR(45) NOT NULL UNIQUE
);

CREATE TABLE users (
	id_user SERIAL PRIMARY KEY,
	dni INT UNIQUE NOT NULL,
	user_name VARCHAR(45) NOT NULL,
	user_last_name VARCHAR(65) NOT NULL,
	age INT NOT NULL,
	email VARCHAR(120) UNIQUE NOT NULL,
	user_password VARCHAR(255) NOT NULL,
	phone_number VARCHAR(40),
	id_rol INT NOT NULL,
	FOREIGN KEY (id_rol) REFERENCES roles(id_rol)
);

CREATE TABLE vehicles (
	id_vehicle SERIAL PRIMARY KEY,
	licence_plate VARCHAR(15) UNIQUE NOT NULL,
	brand VARCHAR(45) NOT NULL,
	model VARCHAR(45) NOT NULL,
	color VARCHAR(25) NOT NULL,
	id_user INT NOT NULL,
	FOREIGN KEY (id_user) REFERENCES users(id_user)
);

CREATE TABLE parking_spots (
	id_spot SERIAL PRIMARY KEY, 
	code VARCHAR(10) UNIQUE NOT NULL,
	status VARCHAR(15) NOT NULL DEFAULT 'available',
		CHECK (status IN ('available', 'occupied', 'maintenance'))
);

CREATE TABLE services (
	id_service SERIAL PRIMARY KEY,
	name_service VARCHAR(45) NOT NULL,
	description TEXT,
	price NUMERIC(10, 2) NOT NULL
);

CREATE TABLE parking_sessions (
	id_session SERIAL PRIMARY KEY,
	entry_time TIMESTAMP NOT NULL DEFAULT NOW(),
	exit_time TIMESTAMP, 
	total_amount NUMERIC(10, 2),
	status VARCHAR(12) NOT NULL DEFAULT 'in_progress',
		CHECK (status IN ('in_progress', 'completed', 'cancelled')),
	id_vehicle INT NOT NULL,
	id_spot INT NOT NULL,
	FOREIGN KEY (id_vehicle) REFERENCES vehicles(id_vehicle),
	FOREIGN KEY (id_spot) REFERENCES parking_spots(id_spot)
);

CREATE TABLE parking_session_services (
    id SERIAL PRIMARY KEY,
    id_session INT NOT NULL,
    id_service INT NOT NULL,
    quantity INT DEFAULT 1,
    FOREIGN KEY (id_session) REFERENCES parking_sessions(id_session),
    FOREIGN KEY (id_service) REFERENCES services(id_service)
);

CREATE TABLE payments (
    id_payment SERIAL PRIMARY KEY,
    method_payment VARCHAR(20) NOT NULL
        CHECK (method_payment IN ('cash', 'credit_card', 'debit_card', 'transfer')),
    amount NUMERIC(10,2) NOT NULL,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	id_session INT NOT NULL,
    FOREIGN KEY (id_session) REFERENCES parking_sessions(id_session)
);

INSERT INTO roles (role_name) VALUES ('Administrator');
INSERT INTO roles (role_name) VALUES ('User');

INSERT INTO users (dni, user_name, user_last_name, age, email, user_password, phone_number, id_rol) VALUES (45936651, 'Mauricio', 'Pucheta', 21, 'mauri@example.com', 'EXample11??', '+54 9 111111', 1);