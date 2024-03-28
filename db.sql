INSERT INTO CHAIN  (
		id,
		name,
		num_hotels,
		hq_address,
		email,
		phone_num
	)
	VALUES
	(1, 'Groupe Luxe', 123, '123 A St.', 'aide@groupeluxe.com', '514-000-0000'),
	(2, 'Princeton and Key Inc', 123, '123 B St.', 'info@princetonandkey.com', '416-000-0000'),
	(3, 'Locklear Hotels Group', 123, '123 C St.', 'help@locklear.ca', '647-000-000'),
	(4, 'Les Maisons Belles', 123, '123 D St.', 'info@lmb.ca', '438-000-0000'),
	(5, 'Cozy Inns Inc.', 123, '123 E St.', 'info@cozy.ca', '613-000-0000');

INSERT INTO employee (
	ssn,
	name,
	username,
	password
) VALUES
	('000 000 001', 'Jordan Lau', 'jlau004', 'password'),
	('000 000 003', 'Robert Zuchniak', 'rzuch423', 'password'),
	('000 000 002', 'Reuben De Souza', 'rdeso029', 'password'),
	('000 000 015', 'Verena Kantere', 'vkant056', 'password'),
	('000 000 077', 'Baoming Chang', 'bchan076', 'password'),
	('000 000 004', 'Sina Negarandeh', 'snega082', 'password'),
	('000 000 036', 'Balumuri Sathvika', 'bsath087', 'password'),
	('000 000 048', 'Nidhi Kumari Chauhan', 'nkuma077', 'password'),
	('000 000 021', 'Verma Divyanshu', 'vdivy088', 'password'),
	('000 000 012', 'Ameya Chawla', 'achaw018', 'password'),
	('000 000 030', 'Gayathri Macharla Ramakrishnan', 'gmach043', 'password'),
	('000 000 041', 'Liu Chang', 'lchan034', 'password'),
	('000 000 006', 'Muthuvel, Mahalakshmi', 'mmaha920', 'password'),
	('000 000 032', 'Sahi Ishveen Manjeet', 'sishv063', 'password');

INSERT INTO HOTEL (
		name,
		CHAIN,
		stars,
		city,
		num_rooms,
		address,
		manager
	) VALUES
	('Hotel Luxe Angrigon', 1, 4.7, 'Montreal', 5, '34 Blvd Trinitaires',  '000 000 001'),
	('Hotel Luxe Mont-Royal', 1, 4.3, 'Montreal', 5, '30 Blvd Graham',  '000 000 001'),
	('Hotel Luxe Chelsea', 1, 3.1, 'Ottawa', 5, '21 Sussex Ave',  '000 000 003'),
	('Hotel Luxe Tribeca', 1, 2.8, 'New York', 5, '132 W Broadway St',  '000 000 002'),
	('Hotel Luxe Quartier Francais', 1, 5.0, 'New Orleans', 5, '74 Orleans St',  '000 000 015'),
	('Hotel Luxe Vieux Quebec', 1, 4.9, 'Quebec City', 5, '37 rue Champlain',  '000 000 077'),
	('Cheateau Luxe Montebello', 1, 3.9, 'Ottawa', 5, '3 av de la Lac',  '000 000 003'),
	('Luxor Hotel by Groupe Deluxe', 1, 4.5, 'Toronto', 5, '232 King St W',  '000 000 004'),

	('Royal Princeton Hotel', 2, 3.4, 'Ottawa', 5, '93 Wellington St', '000 000 003'),
	('Royal Key Hotel', 2, 4.8, 'Toronto', 5, '45 Bay St', '000 000 004'),
	('Hotel on the Lake by Princeton and Key', 2, 3.7, 'Toronto', 5, '33 Lakeshore Blvd',  '000 000 004'),
	('Grand Duchess of Lexington', 2, 4.9, 'Boston', 5, '3 Bristol Lane',  '000 000 012'),
	('Princeton and Key West Side', 2, 5.0, 'New York', 5, '7 Megajor St',  '000 000 002'),
	('Princeton and Key Yorkville', 2, 2.9, 'Toronto', 5, '12 Yorkville Ave',  '000 000 004'),
	('Princeton and Key Garden District', 2, 4.3, 'New Orleans', 5, '90 Algiers St',  '000 000 015'),
	('Archbishop of Westminster Palo Alto', 2, 3.0, 'San Fransisco', 5, '4 Jorman Ave',  '000 000 030'),

	('La Maison Belle Rosedale', 3, 4.9, 'Toronto', 5, '838 Yonge St',  '000 000 004'),
	('Chez Marcelle', 3, 4.6, 'Montreal', 5, '102 rue Berri',  '000 000 001'),
	('La Maison Belle Bridle Path', 3, 4.4, 'Toronto', 5, '16 the Bridle Path',  '000 000 004'),
	('La Maison Belle Granville', 3, 3.7, 'Vancouver', 5, '33 Pine St',  '000 000 036'),
	('La Maison Belle Sherbrooke', 3, 3.9, 'Sherbrooke', 5, '9 Route 112',  '000 000 021'),
	('La Maison Belle Quartier Sainte-Foy', 3, 5.0, 'Quebec City', 5, '17 ave Saint-Redempteur',  '000 000 077'),
	('La Maison Belle Quartier Petit Champlain', 3, 2.9, 'Quebec City', 5, '44 rue McMann',  '000 000 077'),
	('Chez Madeline', 3, 4.6, 'New York', 5, '10 W 22nd St',  '000 000 002'),

	('Platinum Jubilee Hotel', 4, 4.6, 'New York', 5, '11 E 15th St',  '000 000 002'),
	('Locklear and Vincenti', 4, 5.0, 'Toronto', 5, '10 Adelaide St',  '000 000 004'),
	('Royal Locklear Forest Hill', 4, 3.9, 'Toronto', 5, '21 St Clair Ave',  '000 000 004'),
	('Locklear Suites Lunenberg', 4, 4.0, 'Halifax', 5, '241 Cobalt St',  '000 000 006'),
	('Grand Halifax Hotel', 4, 4.1, 'Halifax', 5, '31 Hollis St',  '000 000 006'),
	('Royal Locklear Menlo Park', 4, 3.2, 'San Fransisco', 5, '27 Santa Fe St',  '000 000 030'),
	('Royal Locklear Scarsdale', 4, 2.8, 'New York', 5, '34 Drake Rd',  '000 000 002'),
	('Royal Locklear Cherry Hills', 4, 4.5, 'Denver', 5, '168 Cherry St',  '000 000 032'),

	('Cozy Hotel and Spa', 5, 3.6, 'Ottawa', 5, '87 Bank St',  '000 000 003'),
	('Le Cozy', 5, 4.8, 'Montreal', 5, '5 rue Tremblay',  '000 000 001'),
	('Cozy Inn on the Canal', 5, 5.0, 'Ottawa', 5, '34 Colonel By Dr',  '000 000 003'),
	('Cozy Inn West Vancouver', 5, 4.0, 'Vancouver', 5, '74 Mountain View Dr',  '000 000 036'),
	('Cozy Inn Shaugnessy Heights', 5, 4.3, 'Vancouver', 5, '1 Maple Lane',  '000 000 036'),
	('Cozy Inn Roxboro', 5, 2.9, 'Calgary', 5, '3 Belgrade Cres',  '000 000 048'),
	('Cozy Inn Westmount', 5, 4.8, 'Montreal', 5, '3 rue du Jardin',  '000 000 001'),
	('Cozy Inn Pearson Airport', 5, 4.7, 'Toronto', 5, '234 Kiping Ave',  '000 000 004'),
	('Little Victoria Inn', 5, 4.3, 'Victoria', 5, '135 Mattamy St',  '000 000 041');