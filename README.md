
# INSTALLING THE PROJECT
1. Clone the repository to your local machine by running the command, `git clone https://github.com/malachi43/Jobs-API.git` in your CLI (terminal). For this command to work you must have git installed. To download click [here](https://git-scm.com/downloads).

2. cd (change directoty) into JobsAPI directory.

3. run `npm install` in your terminal(command line) to install the required dependencies.

4. run `node app.js` to start the server on port 3000.


#  USING THE API

### JOBS-API

This API helps you keep track of jobs you applied for. The jobs applied for would have the following statuses( **interview**, **pending** or **declined** ). [TEST API](https://jobs-api-hr3f.onrender.com).



<!--- If we have only one group/collection, then no need for the "ungrouped" heading -->
1. [Delete Job](#1-delete-job)
   1. [Delete Job](#i-example-request-delete-job)
1. [Update Job](#2-update-job)
   1. [Update Job](#i-example-request-update-job)
1. [Get Single Job](#3-get-single-job)
   1. [get Single job](#i-example-request-get-single-job)
1. [Get jobs](#4-get-jobs)
   1. [getAllJobs](#i-example-request-getalljobs)
1. [Login User](#5-login-user)
   1. [login User](#i-example-request-login-user)
1. [Create Job](#6-create-job)
   1. [Create Job](#i-example-request-create-job)
1. [Register User](#7-register-user)
   1. [Register User](#i-example-request-register-user)



## Endpoints


--------



### 1. Delete Job


Deletes job specific to a registered user using an ID.


***Endpoint:***

```bash
Method: DELETE
Type: 
URL: http://localhost:3000/api/v1/jobs/63b14abce8b73c11dca11049
```



***More example Requests/Responses:***


#### I. Example Request: Delete Job



***Body: None***



#### I. Example Response: Delete Job
```js
Job deleted successfully
```


***Status Code:*** 200

<br>



### 2. Update Job


Update job specific to a registered user with details provide in the body using an ID.


***Endpoint:***

```bash
Method: PATCH
Type: RAW
URL: http://localhost:3000/api/v1/api/v1/jobs/63b14a8ae8b73c11dca11046
```



***Body:***

```js        
{
	"company": "Konga",
	"position": "Full-Stack developer"
}
```



***More example Requests/Responses:***


#### I. Example Request: Update Job



***Body:***

```js        
{
	"company": "Konga",
	"position": "Full-Stack developer"
}
```



#### I. Example Response: Update Job
```js
{
    "job": {
        "status": "pending",
        "_id": "63b14a8ae8b73c11dca11046",
        "company": "Konga",
        "position": "Full-Stack developer",
        "createdBy": "63b149dae8b73c11dca11041",
        "createdAt": "2023-01-01T08:55:38.665Z",
        "updatedAt": "2023-01-01T09:04:39.288Z",
        "__v": 0
    }
}
```


***Status Code:*** 200

<br>



### 3. Get Single Job


Return a single job specific to a registered user using an ID.


***Endpoint:***

```bash
Method: GET
Type: RAW
URL: http://localhost:3000/api/v1/api/v1/jobs/63b14acfe8b73c11dca1104b
```



***More example Requests/Responses:***


#### I. Example Request: get Single job



#### I. Example Response: get Single job
```js
{
    "job": {
        "status": "pending",
        "_id": "63b14acfe8b73c11dca1104b",
        "company": "Youtube",
        "position": "Fullstack Developer",
        "createdBy": "63b149dae8b73c11dca11041",
        "createdAt": "2023-01-01T08:56:47.339Z",
        "updatedAt": "2023-01-01T08:56:47.339Z",
        "__v": 0
    }
}
```


***Status Code:*** 200

<br>



### 4. Get jobs


Returns all the jobs specific to a registered user.


***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:3000/api/v1/api/v1/jobs/
```



***More example Requests/Responses:***


#### I. Example Request: getAllJobs



***Body: None***



#### I. Example Response: getAllJobs
```js
{
    "jobs": [
        {
            "status": "pending",
            "_id": "63b14a8ae8b73c11dca11046",
            "company": "Google",
            "position": "Backend Developer",
            "createdBy": "63b149dae8b73c11dca11041",
            "createdAt": "2023-01-01T08:55:38.665Z",
            "updatedAt": "2023-01-01T08:55:38.665Z",
            "__v": 0
        },
        {
            "status": "pending",
            "_id": "63b14abce8b73c11dca11049",
            "company": "Facebook",
            "position": "Frontend Developer",
            "createdBy": "63b149dae8b73c11dca11041",
            "createdAt": "2023-01-01T08:56:28.919Z",
            "updatedAt": "2023-01-01T08:56:28.919Z",
            "__v": 0
        },
        {
            "status": "pending",
            "_id": "63b14acfe8b73c11dca1104b",
            "company": "Youtube",
            "position": "Fullstack Developer",
            "createdBy": "63b149dae8b73c11dca11041",
            "createdAt": "2023-01-01T08:56:47.339Z",
            "updatedAt": "2023-01-01T08:56:47.339Z",
            "__v": 0
        },
        {
            "status": "pending",
            "_id": "63b14ad8e8b73c11dca1104d",
            "company": "Amazon",
            "position": "Fullstack Developer",
            "createdBy": "63b149dae8b73c11dca11041",
            "createdAt": "2023-01-01T08:56:56.929Z",
            "updatedAt": "2023-01-01T08:56:56.929Z",
            "__v": 0
        },
        {
            "status": "pending",
            "_id": "63b14aebe8b73c11dca1104f",
            "company": "Ali-baba",
            "position": "Backend Developer",
            "createdBy": "63b149dae8b73c11dca11041",
            "createdAt": "2023-01-01T08:57:15.060Z",
            "updatedAt": "2023-01-01T08:57:15.060Z",
            "__v": 0
        }
    ],
    "count": 5
}
```


***Status Code:*** 200

<br>



### 5. Login User


Gives user access to the various API routes.


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: http://localhost:3000/api/v1/api/v1/auth/login
```



***Body:***

```js        
{
	"email": "usera@gmail.com",
	"password": "secret"
}
```



***More example Requests/Responses:***


#### I. Example Request: login User



***Body:***

```js        
{
	"email": "usera@gmail.com",
	"password": "secret"
}
```



#### I. Example Response: login User
```js
{
    "user": {
        "name": "UserA"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2M2IxNDlkYWU4YjczYzExZGNhMTEwNDEiLCJuYW1lIjoiVXNlckEiLCJpYXQiOjE2NzI1NjMyNDksImV4cCI6MTY3NTE1NTI0OX0.JQYAMS6qoTkMstSYylVY_0bCxx859WL8pnPJ2nsapwo"
}
```


***Status Code:*** 200

<br>



### 6. Create Job


This creates a job specific to a user in the database.


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: http://localhost:3000/api/v1/api/v1/jobs
```



***Body:***

```js        
{
	"company": "Ali-baba",
	"position": "Backend Developer"
}
```



***More example Requests/Responses:***


#### I. Example Request: Create Job



***Body:***

```js        
{
	"company": "Google",
	"position": "Backend Developer"
}
```



#### I. Example Response: Create Job
```js
{
    "job": {
        "status": "pending",
        "_id": "63b148abeb469521ac135454",
        "company": "Google",
        "position": "Backend Developer",
        "createdBy": "63b14665eb469521ac135452",
        "createdAt": "2023-01-01T08:47:39.920Z",
        "updatedAt": "2023-01-01T08:47:39.920Z",
        "__v": 0
    }
}
```


***Status Code:*** 201

<br>



### 7. Register User


This adds a user to the database with the details provided in the body.


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: http://localhost:3000/api/v1/auth/register
```



***Body:***

```js        
{
	"name": "UserA",
	"email": "usera@gmail.com",
	"password": "secret"
}
```



***More example Requests/Responses:***


#### I. Example Request: Register User



***Body:***

```js        
{
	"name": "UserA",
	"email": "usera@gmail.com",
	"password": "secret"
}
```



#### I. Example Response: Register User
```js
{
    "user": {
        "name": "UserA",
        "email": "usera@gmail.com"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2M2IxNDlkYWU4YjczYzExZGNhMTEwNDEiLCJuYW1lIjoiVXNlckEiLCJpYXQiOjE2NzI1NjMxNjIsImV4cCI6MTY3NTE1NTE2Mn0.wCB1a5GSHUKY5JW7e_ak0VHyqMUHCNVWNur4QQvwL9M"
}
```


***Status Code:*** 201

<br>



---
[Back to top](#jobs-api)

>Generated at 2023-01-01 10:37:03 by [Uko Chibuike Malachi](https://github.com/thedevsaddam/docgen)
