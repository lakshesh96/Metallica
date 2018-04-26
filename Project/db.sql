-- All Traders
select * from Users where Type = 0;

-- All PMs
select * from Users where Type = 1;

select * from Admins;

select * from Employees;

insert into Employees (Name)
values ('ishan'), ('aayush');

select * from Orders