Create database invi_app;
use invi_app;
use invi;

Create table user(  userId varchar(15) NOT NULL primary key,
  username varchar(233) NOT NULL,
  password varchar(233) NOT NULL,
  logDate date ,
  logTime time,
  role int
);

Alter table user ADD role int;

CREATE TABLE department(
  deptid varchar(3) NOT NULL,
  deptname varchar(255) NOT NULL,
  Constraint d_pk primary key(deptid)
);

CREATE TABLE faculty(
  fid varchar(15) NOT NULL primary key,
  fname varchar(233) NOT NULL,
  deptid varchar(233) NOT NULL,
  femail varchar(255) NOT NULL,
  fphone varchar(255) NOT NULL,
  Constraint f_fk foreign key(fid)  references user(userId)
); 
ALTER TABLE faculty ADD mon varchar(30),
ADD tue varchar(30),
ADD wed varchar(30),
ADD thu varchar(30),
ADD fri varchar(30),
ADD sat varchar(30);

CREATE TABLE classroom (
  roomno int(255) NOT NULL primary key,
  capacity int(255) NOT NULL
);

Create table course(
Courseid varchar(100) primary key,
Cname varchar(100)
 );
 
 create table branch(
deptid varchar(3) NOT NULL ,
sec varchar(1),
nos int,
primary key(deptid,sec),
Constraint b_fk foreign key(deptid) references department(deptid)
);

create table course_branch(
Courseid varchar(100) not null,
deptid varchar(3) NOT NULL ,
sec varchar(1) not null,
primary key(deptid,sec,Courseid),
Constraint cb_fk foreign key(deptid,sec) references branch(deptid,sec),
Constraint cb_fk1 foreign key(Courseid) references course(Courseid)
);

CREATE TABLE  exam(
   examid int(23) NOT NULL primary key,
   examdate date NOT NULL,
   courseid varchar(100),
   Constraint e_fk foreign key(courseid) references course(Courseid)
);

Create table coe(
Coeid varchar(15),
ndays int,
sdate date not null,
edate date not null,
cdate date not null,
primary key(Coeid,sdate,edate),
constraint c_fk foreign key(Coeid) references user(userId)
);
Create table allocation(
Examid int(23),
courseid varchar(100),
Rnos int not null,
Roomno int(255) ,
Invid varchar(15),
Conf varchar(2),
primary key(Examid,Roomno),
Constraint a_fk1 foreign key(courseid) references course(Courseid),
Constraint a_fk2 foreign key(Examid) references exam(Examid),
Constraint a_fk3 foreign key(Roomno) references classroom(roomno),
Constraint a_fk4 foreign key(Invid) references faculty(fid)
);

Insert into user (userId,username,password,logDate,logTime,role) values 
('T12','Lathika','lathi123','2019-11-09','19:20:10',0),
('C10','Lokesh','lok123','2019-11-09','13:20:10',1),
('T11','Srehari','sre123','2019-11-07','19:20:10',0);

delete from user where userId=12345;

select * from allocation;
select * from classroom;
select * from coe;
select * from course;
select * from department;
select * from exam;
select * from faculty;
select * from user;
