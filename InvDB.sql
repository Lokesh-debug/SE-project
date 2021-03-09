
Create table user(  userId int(25) NOT NULL primary key,
  username varchar(233) NOT NULL,
  password varchar(233) NOT NULL,
  logDate date ,
  logTime time
);
Alter table user ADD role int;
CREATE TABLE department(
  deptid int(255) NOT NULL,
  deptname varchar(255) NOT NULL,
  Constraint d_pk primary key(deptid)
);

CREATE TABLE faculty(
  fid int(23) NOT NULL primary key,
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
Cname varchar(100),
Cnos int(255)
 );


CREATE TABLE  exam(
   examid int(23) NOT NULL primary key,
   examdate date NOT NULL,
   courseid varchar(100),
   Constraint e_fk foreign key(courseid) references course(Courseid)
);
Create table coe(
Coeid int(25),
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
Invid int(23),
Conf varchar(2),
primary key(Examid,Roomno),
Constraint a_fk1 foreign key(courseid) references course(Courseid),
Constraint a_fk2 foreign key(Examid) references exam(Examid),
Constraint a_fk3 foreign key(Roomno) references classroom(roomno),
Constraint a_fk4 foreign key(Invid) references faculty(fid)
)

select * from allocation;
select * from classroom;
select * from coe;
select * from course;
select * from department;
select * from exam;
select * from faculty;
select * from user;
