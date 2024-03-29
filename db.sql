INSERT INTO CHAIN  (
		id,
		name,
		num_hotels,
		hq_address,
		email,
		phone_num
	)
	VALUES
	(1, 'Groupe Luxe', 0, '123 A St.', 'aide@groupeluxe.com', '514-000-0000'),
	(2, 'Princeton and Key Inc', 0, '123 B St.', 'info@princetonandkey.com', '416-000-0000'),
	(3, 'Locklear Hotels Group', 0, '123 C St.', 'help@locklear.ca', '647-000-000'),
	(4, 'Les Maisons Belles', 0, '123 D St.', 'info@lmb.ca', '438-000-0000'),
	(5, 'Cozy Inns Inc.', 0, '123 E St.', 'info@cozy.ca', '613-000-0000');

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

INSERT INTO hotel (
		name,
		CHAIN,
		stars,
		city,
		num_rooms,
		address,
		manager
	) VALUES
	('Hotel Luxe Angrigon', 1, 4.7, 'Montreal', 0, '34 Blvd Trinitaires',  '000 000 001'),
	('Hotel Luxe Mont-Royal', 1, 4.3, 'Montreal', 0, '30 Blvd Graham',  '000 000 001'),
	('Hotel Luxe Chelsea', 1, 3.1, 'Ottawa', 0, '21 Sussex Ave',  '000 000 003'),
	('Hotel Luxe Tribeca', 1, 2.8, 'New York', 0, '132 W Broadway St',  '000 000 002'),
	('Hotel Luxe Quartier Francais', 1, 5.0, 'New Orleans', 0, '74 Orleans St',  '000 000 015'),
	('Hotel Luxe Vieux Quebec', 1, 4.9, 'Quebec City', 0, '37 rue Champlain',  '000 000 077'),
	('Cheateau Luxe Montebello', 1, 3.9, 'Ottawa', 0, '3 av de la Lac',  '000 000 003'),
	('Luxor Hotel by Groupe Deluxe', 1, 4.5, 'Toronto', 0, '232 King St W',  '000 000 004'),

	('Royal Princeton Hotel', 2, 3.4, 'Ottawa', 0, '93 Wellington St', '000 000 003'),
	('Royal Key Hotel', 2, 4.8, 'Toronto', 0, '45 Bay St', '000 000 004'),
	('Hotel on the Lake by Princeton and Key', 2, 3.7, 'Toronto', 0, '33 Lakeshore Blvd',  '000 000 004'),
	('Grand Duchess of Lexington', 2, 4.9, 'Boston', 0, '3 Bristol Lane',  '000 000 012'),
	('Princeton and Key West Side', 2, 5.0, 'New York', 0, '7 Megajor St',  '000 000 002'),
	('Princeton and Key Yorkville', 2, 2.9, 'Toronto', 0, '12 Yorkville Ave',  '000 000 004'),
	('Princeton and Key Garden District', 2, 4.3, 'New Orleans', 0, '90 Algiers St',  '000 000 015'),
	('Archbishop of Westminster Palo Alto', 2, 3.0, 'San Fransisco', 0, '4 Jorman Ave',  '000 000 030'),

	('La Maison Belle Rosedale', 4, 4.9, 'Toronto', 0, '838 Yonge St',  '000 000 004'),
	('Chez Marcelle', 4, 4.6, 'Montreal', 0, '102 rue Berri',  '000 000 001'),
	('La Maison Belle Bridle Path', 4, 4.4, 'Toronto', 0, '16 the Bridle Path',  '000 000 004'),
	('La Maison Belle Granville', 4, 3.7, 'Vancouver', 0, '33 Pine St',  '000 000 036'),
	('La Maison Belle Sherbrooke', 4, 3.9, 'Sherbrooke', 0, '9 Route 112',  '000 000 021'),
	('La Maison Belle Quartier Sainte-Foy', 4, 5.0, 'Quebec City', 0, '17 ave Saint-Redempteur',  '000 000 077'),
	('La Maison Belle Quartier Petit Champlain', 4, 2.9, 'Quebec City', 0, '44 rue McMann',  '000 000 077'),
	('Chez Madeline', 4, 4.6, 'New York', 0, '10 W 22nd St',  '000 000 002'),

	('Platinum Jubilee Hotel', 3, 4.6, 'New York', 0, '11 E 15th St',  '000 000 002'),
	('Locklear and Vincenti', 3, 5.0, 'Toronto', 0, '10 Adelaide St',  '000 000 004'),
	('Royal Locklear Forest Hill', 3, 3.9, 'Toronto', 0, '21 St Clair Ave',  '000 000 004'),
	('Locklear Suites Lunenberg', 3, 4.0, 'Halifax', 0, '241 Cobalt St',  '000 000 006'),
	('Grand Halifax Hotel', 3, 4.1, 'Halifax', 0, '31 Hollis St',  '000 000 006'),
	('Royal Locklear Menlo Park', 3, 3.2, 'San Fransisco', 0, '27 Santa Fe St',  '000 000 030'),
	('Royal Locklear Scarsdale', 3, 2.8, 'New York', 0, '34 Drake Rd',  '000 000 002'),
	('Royal Locklear Cherry Hills', 3, 4.5, 'Denver', 0, '168 Cherry St',  '000 000 032'),
	
	('Cozy Hotel and Spa', 5, 3.6, 'Ottawa', 0, '87 Bank St',  '000 000 003'),
	('Le Cozy', 5, 4.8, 'Montreal', 0, '5 rue Tremblay',  '000 000 001'),
	('Cozy Inn on the Canal', 5, 5.0, 'Ottawa', 0, '34 Colonel By Dr',  '000 000 003'),
	('Cozy Inn West Vancouver', 5, 4.0, 'Vancouver', 0, '74 Mountain View Dr',  '000 000 036'),
	('Cozy Inn Shaugnessy Heights', 5, 4.3, 'Vancouver', 0, '1 Maple Lane',  '000 000 036'),
	('Cozy Inn Roxboro', 5, 2.9, 'Calgary', 0, '3 Belgrade Cres',  '000 000 048'),
	('Cozy Inn Westmount', 5, 4.8, 'Montreal', 0, '3 rue du Jardin',  '000 000 001'),
	('Cozy Inn Pearson Airport', 5, 4.7, 'Toronto', 0, '234 Kiping Ave',  '000 000 004'),
	('Little Victoria Inn', 5, 4.3, 'Victoria', 0, '135 Mattamy St',  '000 000 041');

INSERT INTO room (
	hotel ,
	number ,
	price ,
	capacity ,
	view ,
	amenities ,
	extendible ,
	damage 
) VALUES 
	(1, 1, 100.99, 3, 'Mountain View', ARRAY['Air conditioning', 'TV', 'Kitchenette'], FALSE, FALSE),
	(1, 2, 100.99, 3, 'Mountain View', ARRAY['Air conditioning', 'TV', 'Kitchenette'], FALSE, FALSE),
	(1, 3, 100.99, 3, 'Mountain View', ARRAY['Air conditioning', 'TV', 'Kitchenette'], FALSE, FALSE),
	(1, 4, 100.99, 3, 'Mountain View', ARRAY['Air conditioning', 'TV', 'Kitchenette'], FALSE, FALSE),
	(1, 5, 100.99, 3, 'Mountain View', ARRAY['Air conditioning', 'TV', 'Kitchenette'], FALSE, FALSE),

	(2, 1, 199.99, 3, 'Mountain View', ARRAY['Air conditioning', 'TV', 'Kitchenette'], FALSE, FALSE),
	(2, 2, 199.99, 3, 'Mountain View', ARRAY['Air conditioning', 'TV', 'Kitchenette'], FALSE, FALSE),
	(2, 3, 199.99, 3, 'Mountain View', ARRAY['Air conditioning', 'TV', 'Kitchenette'], FALSE, FALSE),
	(2, 4, 199.99, 3, 'Mountain View', ARRAY['Air conditioning', 'TV', 'Kitchenette'], FALSE, FALSE),
	(2, 5, 199.99, 3, 'Mountain View', ARRAY['Air conditioning', 'TV', 'Kitchenette'], FALSE, FALSE),

	(3, 1, 150.99, 2, 'City View', ARRAY['Air conditioning', 'TV', 'Kitchenette'], FALSE, FALSE),
	(3, 2, 150.99, 2, 'City View', ARRAY['Air conditioning', 'TV', 'Kitchenette'], FALSE, FALSE),
	(3, 3, 150.99, 2, 'City View', ARRAY['Air conditioning', 'TV', 'Kitchenette'], FALSE, FALSE),
	(3, 4, 150.99, 2, 'City View', ARRAY['Air conditioning', 'TV', 'Kitchenette'], FALSE, FALSE),
	(3, 5, 150.99, 2, 'City View', ARRAY['Air conditioning', 'TV', 'Kitchenette'], FALSE, FALSE),
	
	(4, 1, 100.99, 3, 'Ocean View', ARRAY['Air conditioning', 'TV', 'Kitchenette'], FALSE, FALSE),
	(4, 2, 100.99, 3, 'Ocean View', ARRAY['Air conditioning', 'TV', 'Kitchenette'], FALSE, FALSE),
	(4, 3, 100.99, 3, 'Ocean View', ARRAY['Air conditioning', 'TV', 'Kitchenette'], FALSE, FALSE),
	(4, 4, 100.99, 3, 'Ocean View', ARRAY['Air conditioning', 'TV', 'Kitchenette'], FALSE, FALSE),
	(4, 5, 100.99, 3, 'Ocean View', ARRAY['Air conditioning', 'TV', 'Kitchenette'], FALSE, FALSE),

	(5, 1, 199.99, 3, 'City View', ARRAY['Air conditioning', 'TV'], FALSE, FALSE),
	(5, 2, 199.99, 3, 'City View', ARRAY['Air conditioning', 'TV'], FALSE, FALSE),
	(5, 3, 199.99, 3, 'City View', ARRAY['Air conditioning', 'TV'], FALSE, FALSE),
	(5, 4, 199.99, 3, 'City View', ARRAY['Air conditioning', 'TV'], FALSE, FALSE),
	(5, 5, 199.99, 3, 'City View', ARRAY['Air conditioning', 'TV'], FALSE, FALSE),

	(6, 1, 450, 4, 'Mountain View', ARRAY['Air conditioning', 'TV', 'Kitchenette', 'Washer/Dryer', 'Pool Table'], FALSE, FALSE),
	(6, 2, 450, 4, 'Mountain View', ARRAY['Air conditioning', 'TV', 'Kitchenette', 'Washer/Dryer', 'Pool Table'], FALSE, FALSE),
	(6, 3, 450, 4, 'Mountain View', ARRAY['Air conditioning', 'TV', 'Kitchenette', 'Washer/Dryer', 'Pool Table'], FALSE, FALSE),
	(6, 4, 450, 4, 'Mountain View', ARRAY['Air conditioning', 'TV', 'Kitchenette', 'Washer/Dryer', 'Pool Table'], FALSE, FALSE),
	(6, 5, 450, 4, 'Mountain View', ARRAY['Air conditioning', 'TV', 'Kitchenette', 'Washer/Dryer', 'Pool Table'], FALSE, FALSE),

	(7, 1, 400, 4, 'Mountain View', ARRAY['Air conditioning', 'TV', 'Kitchenette', 'Washer/Dryer'], FALSE, FALSE),
	(7, 2, 400, 4, 'Mountain View', ARRAY['Air conditioning', 'TV', 'Kitchenette', 'Washer/Dryer'], FALSE, FALSE),
	(7, 3, 400, 4, 'Mountain View', ARRAY['Air conditioning', 'TV', 'Kitchenette', 'Washer/Dryer'], FALSE, FALSE),
	(7, 4, 400, 4, 'Mountain View', ARRAY['Air conditioning', 'TV', 'Kitchenette', 'Washer/Dryer'], FALSE, FALSE),
	(7, 5, 400, 4, 'Mountain View', ARRAY['Air conditioning', 'TV', 'Kitchenette', 'Washer/Dryer'], FALSE, FALSE),

	(8, 1, 400, 4, 'City View', ARRAY['Air conditioning', 'TV', 'Kitchenette', 'Washer/Dryer'], FALSE, FALSE),
	(8, 2, 400, 4, 'City View', ARRAY['Air conditioning', 'TV', 'Kitchenette', 'Washer/Dryer'], FALSE, FALSE),
	(8, 3, 400, 4, 'City View', ARRAY['Air conditioning', 'TV', 'Kitchenette', 'Washer/Dryer'], FALSE, FALSE),
	(8, 4, 400, 4, 'City View', ARRAY['Air conditioning', 'TV', 'Kitchenette', 'Washer/Dryer'], FALSE, FALSE),
	(8, 5, 400, 4, 'City View', ARRAY['Air conditioning', 'TV', 'Kitchenette', 'Washer/Dryer'], FALSE, FALSE),
	
	(9, 1, 100, 2, 'City View', ARRAY['Air conditioning', 'TV'], FALSE, FALSE),
	(9, 2, 100, 2, 'City View', ARRAY['Air conditioning', 'TV'], FALSE, FALSE),
	(9, 3, 100, 2, 'City View', ARRAY['Air conditioning', 'TV'], FALSE, FALSE),
	(9, 4, 100, 2, 'City View', ARRAY['Air conditioning', 'TV'], FALSE, FALSE),
	(9, 5, 100, 2, 'City View', ARRAY['Air conditioning', 'TV'], FALSE, FALSE),

	(10, 1, 100, 2, 'Ocean View', ARRAY['Air conditioning', 'TV'], TRUE, FALSE),
	(10, 2, 100, 2, 'Ocean View', ARRAY['Air conditioning', 'TV'], TRUE, FALSE),
	(10, 3, 100, 2, 'Ocean View', ARRAY['Air conditioning', 'TV'], TRUE, FALSE),
	(10, 4, 100, 2, 'Ocean View', ARRAY['Air conditioning', 'TV'], TRUE, FALSE),
	(10, 5, 100, 2, 'Ocean View', ARRAY['Air conditioning', 'TV'], TRUE, FALSE),

	(11, 1, 200, 2, 'City View', ARRAY['Air conditioning', 'TV'], FALSE, FALSE),
	(11, 2, 200, 2, 'City View', ARRAY['Air conditioning', 'TV'], FALSE, FALSE),
	(11, 3, 200, 2, 'City View', ARRAY['Air conditioning', 'TV'], FALSE, FALSE),
	(11, 4, 200, 2, 'City View', ARRAY['Air conditioning', 'TV'], FALSE, FALSE),
	(11, 5, 200, 2, 'City View', ARRAY['Air conditioning', 'TV'], FALSE, FALSE),

	(12, 1, 100.99, 3, 'Mountain View', ARRAY['Air conditioning', 'TV', 'Kitchenette'], FALSE, FALSE),
	(12, 2, 100.99, 3, 'Mountain View', ARRAY['Air conditioning', 'TV', 'Kitchenette'], FALSE, FALSE),
	(12, 3, 100.99, 3, 'Mountain View', ARRAY['Air conditioning', 'TV', 'Kitchenette'], FALSE, FALSE),
	(12, 4, 100.99, 3, 'Mountain View', ARRAY['Air conditioning', 'TV', 'Kitchenette'], FALSE, FALSE),
	(12, 5, 100.99, 3, 'Mountain View', ARRAY['Air conditioning', 'TV', 'Kitchenette'], FALSE, FALSE),

	(13, 1, 299.99, 3, 'City View', ARRAY['TV', 'Kitchenette'], FALSE, FALSE),
	(13, 2, 299.99, 3, 'City View', ARRAY['TV', 'Kitchenette'], FALSE, FALSE),
	(13, 3, 299.99, 3, 'City View', ARRAY['TV', 'Kitchenette'], FALSE, FALSE),
	(13, 4, 299.99, 3, 'City View', ARRAY['TV', 'Kitchenette'], FALSE, FALSE),
	(13, 5, 299.99, 3, 'City View', ARRAY['TV', 'Kitchenette'], FALSE, FALSE),
	
	(14, 1, 300.99, 3, 'City View', ARRAY['TV', 'Kitchenette'], FALSE, FALSE),
	(14, 2, 300.99, 3, 'City View', ARRAY['TV', 'Kitchenette'], FALSE, FALSE),
	(14, 3, 300.99, 3, 'City View', ARRAY['TV', 'Kitchenette'], FALSE, FALSE),
	(14, 4, 300.99, 3, 'City View', ARRAY['TV', 'Kitchenette'], FALSE, FALSE),
	(14, 5, 300.99, 3, 'City View', ARRAY['TV', 'Kitchenette'], FALSE, FALSE),

	(15, 1, 100.99, 3, 'Mountain View', ARRAY['Air conditioning', 'TV', 'Kitchenette'], FALSE, FALSE),
	(15, 2, 100.99, 3, 'Mountain View', ARRAY['Air conditioning', 'TV', 'Kitchenette'], FALSE, FALSE),
	(15, 3, 100.99, 3, 'Mountain View', ARRAY['Air conditioning', 'TV', 'Kitchenette'], FALSE, FALSE),
	(15, 4, 100.99, 3, 'Mountain View', ARRAY['Air conditioning', 'TV', 'Kitchenette'], FALSE, FALSE),
	(15, 5, 100.99, 3, 'Mountain View', ARRAY['Air conditioning', 'TV', 'Kitchenette'], FALSE, FALSE),

	(16, 1, 100.99, 3, 'Park View', ARRAY['Air conditioning', 'TV', 'Kitchenette'], FALSE, FALSE),
	(16, 2, 100.99, 3, 'Park View', ARRAY['Air conditioning', 'TV', 'Kitchenette'], FALSE, FALSE),
	(16, 3, 100.99, 3, 'Park View', ARRAY['Air conditioning', 'TV', 'Kitchenette'], FALSE, FALSE),
	(16, 4, 100.99, 3, 'Park View', ARRAY['Air conditioning', 'TV', 'Kitchenette'], FALSE, FALSE),
	(16, 5, 100.99, 3, 'Park View', ARRAY['Air conditioning', 'TV', 'Kitchenette'], FALSE, FALSE),
	
	(17, 1, 299.99, 4, 'Park View', ARRAY['Air conditioning', 'TV', 'Kitchenette'], FALSE, FALSE),
	(17, 2, 299.99, 4, 'Park View', ARRAY['Air conditioning', 'TV', 'Kitchenette'], FALSE, FALSE),
	(17, 3, 299.99, 4, 'Park View', ARRAY['Air conditioning', 'TV', 'Kitchenette'], FALSE, FALSE),
	(17, 4, 299.99, 4, 'Park View', ARRAY['Air conditioning', 'TV', 'Kitchenette'], FALSE, FALSE),
	(17, 5, 299.99, 4, 'Park View', ARRAY['Air conditioning', 'TV', 'Kitchenette'], FALSE, FALSE),
	
	(18, 1, 99.99, 2, 'City View', ARRAY['Air conditioning', 'TV', 'Kitchenette'], FALSE, FALSE),
	(18, 2, 99.99, 2, 'City View', ARRAY['Air conditioning', 'TV', 'Kitchenette'], FALSE, FALSE),
	(18, 3, 99.99, 2, 'City View', ARRAY['Air conditioning', 'TV', 'Kitchenette'], FALSE, FALSE),
	(18, 4, 99.99, 2, 'City View', ARRAY['Air conditioning', 'TV', 'Kitchenette'], FALSE, FALSE),
	(18, 5, 99.99, 2, 'City View', ARRAY['Air conditioning', 'TV', 'Kitchenette'], FALSE, FALSE),

	(19, 1, 100, 2, 'City View', ARRAY['Air conditioning', 'TV'], FALSE, FALSE),
	(19, 2, 100, 2, 'City View', ARRAY['Air conditioning', 'TV'], FALSE, FALSE),
	(19, 3, 100, 2, 'City View', ARRAY['Air conditioning', 'TV'], FALSE, FALSE),
	(19, 4, 100, 2, 'City View', ARRAY['Air conditioning', 'TV'], FALSE, FALSE),
	(19, 5, 100, 2, 'City View', ARRAY['Air conditioning', 'TV'], FALSE, FALSE),

	(20, 1, 100, 2, 'City View', ARRAY['Air conditioning', 'TV'], TRUE, FALSE),
	(20, 2, 100, 2, 'City View', ARRAY['Air conditioning', 'TV'], TRUE, FALSE),
	(20, 3, 100, 2, 'City View', ARRAY['Air conditioning', 'TV'], TRUE, FALSE),
	(20, 4, 100, 2, 'City View', ARRAY['Air conditioning', 'TV'], TRUE, FALSE),
	(20, 5, 100, 2, 'City View', ARRAY['Air conditioning', 'TV'], TRUE, FALSE),

	(21, 1, 200, 2, 'City View', ARRAY['Air conditioning', 'TV'], FALSE, FALSE),
	(21, 2, 200, 2, 'City View', ARRAY['Air conditioning', 'TV'], FALSE, FALSE),
	(21, 3, 200, 2, 'City View', ARRAY['Air conditioning', 'TV'], FALSE, FALSE),
	(21, 4, 200, 2, 'City View', ARRAY['Air conditioning', 'TV'], FALSE, FALSE),
	(21, 5, 200, 2, 'City View', ARRAY['Air conditioning', 'TV'], FALSE, FALSE),

	(22, 1, 150, 2, 'Ocean View', ARRAY['Air conditioning', 'TV'], FALSE, FALSE),
	(22, 2, 150, 2, 'Ocean View', ARRAY['Air conditioning', 'TV'], FALSE, FALSE),
	(22, 3, 150, 2, 'City View', ARRAY['Air conditioning', 'TV'], FALSE, FALSE),
	(22, 4, 150, 2, 'Ocean View', ARRAY['Air conditioning', 'TV'], FALSE, FALSE),
	(22, 5, 150, 2, 'Ocean View', ARRAY['Air conditioning', 'TV'], FALSE, FALSE),

	(23, 1, 300, 3, 'City View', ARRAY['Air conditioning', 'TV'], FALSE, FALSE),
	(23, 2, 300, 3, 'City View', ARRAY['Air conditioning', 'TV'], FALSE, FALSE),
	(23, 3, 300, 3, 'City View', ARRAY['Air conditioning', 'TV'], FALSE, FALSE),
	(23, 4, 300, 3, 'City View', ARRAY['Air conditioning', 'TV'], FALSE, FALSE),
	(23, 5, 300, 3, 'City View', ARRAY['Air conditioning', 'TV'], FALSE, FALSE),

	(24, 1, 100.99, 1, 'Ocean View', ARRAY['Air conditioning', 'TV'], TRUE, FALSE),
	(24, 2, 100.99, 1, 'Ocean View', ARRAY['Air conditioning', 'TV'], TRUE, FALSE),
	(24, 3, 100.99, 1, 'Ocean View', ARRAY['Air conditioning', 'TV'], TRUE, FALSE),
	(24, 4, 100.99, 1, 'Ocean View', ARRAY['Air conditioning', 'TV'], TRUE, FALSE),
	(24, 5, 100.99, 1, 'Ocean View', ARRAY['Air conditioning', 'TV'], TRUE, FALSE),

	(25, 1, 99, 2, 'City View', ARRAY['Air conditioning', 'TV'], FALSE, FALSE),
	(25, 2, 99, 2, 'City View', ARRAY['Air conditioning', 'TV'], FALSE, FALSE),
	(25, 3, 99, 2, 'City View', ARRAY['Air conditioning', 'TV'], FALSE, FALSE),
	(25, 4, 99, 2, 'City View', ARRAY['Air conditioning', 'TV'], FALSE, FALSE),
	(25, 5, 99, 2, 'City View', ARRAY['Air conditioning', 'TV'], FALSE, FALSE),

	(26, 1, 100, 2, 'City View', ARRAY['Air conditioning', 'TV'], FALSE, FALSE),
	(26, 2, 100, 2, 'City View', ARRAY['Air conditioning', 'TV'], FALSE, FALSE),
	(26, 3, 100, 2, 'City View', ARRAY['Air conditioning', 'TV'], FALSE, FALSE),
	(26, 4, 100, 2, 'City View', ARRAY['Air conditioning', 'TV'], FALSE, FALSE),
	(26, 5, 100, 2, 'City View', ARRAY['Air conditioning', 'TV'], FALSE, FALSE),

	(27, 1, 75, 2, 'City View', ARRAY['Air conditioning', 'TV'], TRUE, TRUE),
	(27, 2, 75, 2, 'City View', ARRAY['Air conditioning', 'TV'], TRUE, TRUE),
	(27, 3, 75, 2, 'City View', ARRAY['Air conditioning', 'TV'], TRUE, TRUE),
	(27, 4, 75, 2, 'City View', ARRAY['Air conditioning', 'TV'], TRUE, TRUE),
	(27, 5, 75, 2, 'City View', ARRAY['Air conditioning', 'TV'], TRUE, TRUE),

	(28, 1, 100, 2, 'City View', ARRAY['Air conditioning', 'TV'], FALSE, FALSE),
	(28, 2, 100, 2, 'City View', ARRAY['Air conditioning', 'TV'], FALSE, FALSE),
	(28, 3, 100, 2, 'City View', ARRAY['Air conditioning', 'TV'], FALSE, FALSE),
	(28, 4, 100, 2, 'City View', ARRAY['Air conditioning', 'TV'], FALSE, FALSE),
	(28, 5, 100, 2, 'City View', ARRAY['Air conditioning', 'TV'], FALSE, FALSE),

	(29, 1, 100, 2, 'Mountain View', ARRAY['Air conditioning', 'TV'], FALSE, FALSE),
	(29, 2, 100, 2, 'Mountain View', ARRAY['Air conditioning', 'TV'], FALSE, FALSE),
	(29, 3, 100, 2, 'Mountain View', ARRAY['Air conditioning', 'TV'], FALSE, FALSE),
	(29, 4, 100, 2, 'Mountain View', ARRAY['Air conditioning', 'TV'], FALSE, FALSE),
	(29, 5, 100, 2, 'Mountain View', ARRAY['Air conditioning', 'TV'], FALSE, FALSE),
		
	(30, 1, 100, 2, 'Mountain View', ARRAY['Air conditioning', 'TV'], FALSE, FALSE),
	(30, 2, 100, 2, 'Mountain View', ARRAY['Air conditioning', 'TV'], FALSE, FALSE),
	(30, 3, 100, 2, 'Mountain View', ARRAY['Air conditioning', 'TV'], FALSE, FALSE),
	(30, 4, 100, 2, 'Mountain View', ARRAY['Air conditioning', 'TV'], FALSE, FALSE),
	(30, 5, 100, 2, 'Mountain View', ARRAY['Air conditioning', 'TV'], FALSE, FALSE),
		
	(31, 1, 100, 2, 'City View', ARRAY['Air conditioning', 'TV'], FALSE, FALSE),
	(31, 2, 100, 2, 'City View', ARRAY['Air conditioning', 'TV'], FALSE, FALSE),
	(31, 3, 100, 2, 'City View', ARRAY['Air conditioning', 'TV'], FALSE, FALSE),
	(31, 4, 100, 2, 'City View', ARRAY['Air conditioning', 'TV'], FALSE, FALSE),
	(31, 5, 100, 2, 'City View', ARRAY['Air conditioning', 'TV'], FALSE, FALSE),

	(32, 1, 200, 2, 'City View', ARRAY['Air conditioning', 'TV', 'Kitchenette'], FALSE, FALSE),
	(32, 2, 200, 2, 'City View', ARRAY['Air conditioning', 'TV', 'Kitchenette'], FALSE, FALSE),
	(32, 3, 200, 2, 'City View', ARRAY['Air conditioning', 'TV', 'Kitchenette'], FALSE, FALSE),
	(32, 4, 200, 2, 'City View', ARRAY['Air conditioning', 'TV', 'Kitchenette'], FALSE, FALSE),
	(32, 5, 200, 2, 'City View', ARRAY['Air conditioning', 'TV', 'Kitchenette'], FALSE, FALSE),

	(32, 1, 250, 3, 'City View', ARRAY['TV'], TRUE, FALSE),
	(32, 2, 250, 3, 'City View', ARRAY['TV'], TRUE, FALSE),
	(32, 3, 250, 3, 'City View', ARRAY['TV'], TRUE, FALSE),
	(32, 4, 250, 3, 'City View', ARRAY['TV'], TRUE, FALSE),
	(32, 5, 250, 3, 'City View', ARRAY['TV'], TRUE, FALSE),

	(33, 1, 250, 3, 'Ocean View', ARRAY['Air conditioning', 'TV', 'Kitchenette'], FALSE, FALSE),
	(33, 2, 250, 3, 'Ocean View', ARRAY['Air conditioning', 'TV', 'Kitchenette'], FALSE, FALSE),
	(33, 3, 250, 3, 'Ocean View', ARRAY['Air conditioning', 'TV', 'Kitchenette'], FALSE, FALSE),
	(33, 4, 250, 3, 'Ocean View', ARRAY['Air conditioning', 'TV', 'Kitchenette'], FALSE, FALSE),
	(33, 5, 250, 3, 'Ocean View', ARRAY['Air conditioning', 'TV', 'Kitchenette'], FALSE, FALSE),
	
	(34, 1, 250, 3, 'City View', ARRAY['Air conditioning', 'TV', 'Kitchenette'], FALSE, FALSE),
	(34, 2, 250, 3, 'City View', ARRAY['Air conditioning', 'TV', 'Kitchenette'], FALSE, FALSE),
	(34, 3, 250, 3, 'City View', ARRAY['Air conditioning', 'TV', 'Kitchenette'], FALSE, FALSE),
	(34, 4, 250, 3, 'City View', ARRAY['Air conditioning', 'TV', 'Kitchenette'], FALSE, FALSE),
	(34, 5, 250, 3, 'City View', ARRAY['Air conditioning', 'TV', 'Kitchenette'], FALSE, FALSE),

	(35, 1, 250, 3, 'Mountain View', ARRAY['Air conditioning', 'TV', 'Kitchenette'], FALSE, FALSE),
	(35, 2, 250, 3, 'Mountain View', ARRAY['Air conditioning', 'TV', 'Kitchenette'], FALSE, FALSE),
	(35, 3, 250, 3, 'Mountain View', ARRAY['Air conditioning', 'TV', 'Kitchenette'], FALSE, FALSE),
	(35, 4, 250, 3, 'Mountain View', ARRAY['Air conditioning', 'TV', 'Kitchenette'], FALSE, FALSE),
	(35, 5, 250, 3, 'Mountain View', ARRAY['Air conditioning', 'TV', 'Kitchenette'], FALSE, FALSE),

	(36, 1, 450, 4, 'Mountain View', ARRAY['Air conditioning', 'TV', 'Full Kitchen'], FALSE, FALSE),
	(36, 2, 450, 4, 'Mountain View', ARRAY['Air conditioning', 'TV', 'Full Kitchen'], FALSE, FALSE),
	(36, 3, 450, 4, 'Mountain View', ARRAY['Air conditioning', 'TV', 'Full Kitchen'], FALSE, FALSE),
	(36, 4, 450, 4, 'Mountain View', ARRAY['Air conditioning', 'TV', 'Full Kitchen'], FALSE, FALSE),
	(36, 5, 450, 4, 'Mountain View', ARRAY['Air conditioning', 'TV', 'Full Kitchen'], FALSE, FALSE),

	(37, 1, 450, 4, 'Mountain View', ARRAY['Air conditioning', 'TV', 'Full Kitchen'], FALSE, FALSE),
	(37, 2, 450, 4, 'Mountain View', ARRAY['Air conditioning', 'TV', 'Full Kitchen'], FALSE, FALSE),
	(37, 3, 450, 4, 'Mountain View', ARRAY['Air conditioning', 'TV', 'Full Kitchen'], FALSE, FALSE),
	(37, 4, 450, 4, 'Mountain View', ARRAY['Air conditioning', 'TV', 'Full Kitchen'], FALSE, FALSE),
	(37, 5, 450, 4, 'Mountain View', ARRAY['Air conditioning', 'TV', 'Full Kitchen'], FALSE, FALSE),

	(38, 1, 250, 3, 'City View', ARRAY['Air conditioning', 'TV', 'Kitchenette'], FALSE, FALSE),
	(38, 2, 250, 3, 'City View', ARRAY['Air conditioning', 'TV', 'Kitchenette'], FALSE, FALSE),
	(38, 3, 250, 3, 'City View', ARRAY['Air conditioning', 'TV', 'Kitchenette'], FALSE, FALSE),
	(38, 4, 250, 3, 'City View', ARRAY['Air conditioning', 'TV', 'Kitchenette'], FALSE, FALSE),
	(38, 5, 250, 3, 'City View', ARRAY['Air conditioning', 'TV', 'Kitchenette'], FALSE, FALSE),

	(39, 1, 200, 3, 'City View', ARRAY['Air conditioning', 'TV', 'Kitchenette'], FALSE, FALSE),
	(39, 2, 200, 3, 'City View', ARRAY['Air conditioning', 'TV', 'Kitchenette'], FALSE, FALSE),
	(39, 3, 200, 3, 'City View', ARRAY['Air conditioning', 'TV', 'Kitchenette'], FALSE, FALSE),
	(39, 4, 200, 3, 'City View', ARRAY['Air conditioning', 'TV', 'Kitchenette'], FALSE, FALSE),
	(39, 5, 200, 3, 'City View', ARRAY['Air conditioning', 'TV', 'Kitchenette'], FALSE, FALSE),

	(40, 1, 175, 4, 'Mountain View', ARRAY['Air conditioning', 'TV'], FALSE, FALSE),
	(40, 2, 175, 4, 'Mountain View', ARRAY['Air conditioning', 'TV'], FALSE, FALSE),
	(40, 3, 175, 4, 'Mountain View', ARRAY['Air conditioning', 'TV'], FALSE, FALSE),
	(40, 4, 175, 4, 'Mountain View', ARRAY['Air conditioning', 'TV'], FALSE, FALSE),
	(40, 5, 175, 4, 'Mountain View', ARRAY['Air conditioning', 'TV'], FALSE, FALSE),

	(41, 1, 175, 4, 'Mountain View', ARRAY['Air conditioning', 'TV'], FALSE, FALSE),
	(41, 2, 175, 4, 'Mountain View', ARRAY['Air conditioning', 'TV'], FALSE, FALSE),
	(41, 3, 175, 4, 'Mountain View', ARRAY['Air conditioning', 'TV'], FALSE, FALSE),
	(41, 4, 175, 4, 'Mountain View', ARRAY['Air conditioning', 'TV'], FALSE, FALSE),
	(41, 5, 175, 4, 'Mountain View', ARRAY['Air conditioning', 'TV'], FALSE, FALSE);