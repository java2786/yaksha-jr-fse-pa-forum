create table posts (
	id int NOT NULL AUTO_INCREMENT primary key,
	description varchar(500) not null,
	tags varchar(50) not null,
	title varchar(50) not null
);

create table comments(
	id int NOT NULL AUTO_INCREMENT,
	tags varchar(50) not null,
	comment varchar(200) not null,
	postid int,

	PRIMARY KEY (id),
    FOREIGN KEY (postid) REFERENCES posts(id)
);
