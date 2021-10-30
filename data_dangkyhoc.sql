create database if not exists dangkyhoc;
use dangkyhoc;

#drop table if exists students; 
create table if not exists students (
	id_sd	int not null,
    fullname	varchar(50) not null,
    course	varchar(10) not null,
	dateofbirth	date not null,
    disadvantaged	int null,
    birthplace varchar(255) not null,
    constraint pk_student primary key (id_sd)
)ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;

create table if not exists accounts (
	username varchar(50) not null,
    pass varchar(50) not null,
    id_sd int not null,
    isadmin int not null,
    constraint fk_users foreign key (id_sd)
    references students (id_sd) 
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
)ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;

#drop table if exists lecturers;
create table if not exists lecturers (
	id_lt	int not null,
    fullname	varchar(50) not null,
	dateofbirth	date not null,
    degree varchar(100) null,
    working int null,
    birthplace varchar(255) not null,
    constraint pk_lecturers primary key (id_lt)
)ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;

#drop table if exists subjects;
create table if not exists subjects (
	id_sj varchar(50) not null,
    subjectname varchar(50) not null,
    room varchar(50) not null,
    thu int not null,
    Period varchar(50),
    credits int not null,
    id_lt int not null,
    constraint pk_subjects primary key (id_sj),
    constraint fk_subjects_lecturers foreign key (id_lt)
    references lecturers (id_lt) 
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
)ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;

#drop table if exists register;
create table if not exists register (
	id_sd int not null,
    id_sj varchar(50) not null,
    constraint fk_register_students foreign key (id_sd)
    references students (id_sd)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
    constraint fk_register_subjects foreign key (id_sj)
    references subjects (id_sj)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
)ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;

#drop table if exists sbstatus;
create table if not exists sbstatus (
	id_sd int not null,
    id_sj varchar(50) not null,
    stt varchar(32) not null,
    constraint fk_sbstatus_students foreign key (id_sd)
    references students (id_sd)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
    constraint fk_sbstatus_subjects foreign key (id_sj)
    references subjects (id_sj)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
)ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;