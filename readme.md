# NodeJs microsservices project:

credits: Code with Jay - https://www.youtube.com/watch?v=EXDkgjU8DDU

![Alt text](___docs/architecture.png?raw=true "Scheme")


On MongoDB setup: create database and user for databases:
```
mongo -u root -p MongoDB! --authenticationDatabase 'admin'

> use shopping_ms_customer

> db.createUser(
   {
     user: "user_write",
     pwd: passwordPrompt(),
     roles: [
       { role: "readWrite", db: "shopping_ms_customer" },
     ]
   }
 )

```