# Authentication Project

An application where the authentication system was implemented using tools such as:


&nbsp;

* backend
    * Typescript
    * NodeJs with express
    * MongoDB with mongoose
    * jsonwebToken (jwt)
    * dotenv
    * cors

&nbsp;

* Frontend
    * Javascript
    * React
    * Tailwind


&nbsp;


which shows that only authorized users can have access to certain applications pages or functionalities, in this case, the dashboard page using client-side-rendering.


&nbsp;


# Project Status

> Development

Later on, it might be added functionalities to logged in users (authorized users) such as create, delete & update your onw posts such as read other users public posts (CRUD actions).

&nbsp;

# Screen shots
register: https://i.imgur.com/L9dZxPQ.png

login: https://i.imgur.com/A7Ngi7b.png

dashboard: https://i.imgur.com/OCCxJIE.png

hover: https://i.imgur.com/UTS7Yfn.png

&nbsp;

# Deployed version

to Vercel: https://authentication2-lac.vercel.app/login

&nbsp;
# Installation and Setup Instructions
Clone down this repository. You will need node and npm installed globally on your machine.



* Installation:

```bash
    npm i -g npm
    npm i -g node
```

&nbsp;

* Running Locally:

Once the backend is already hosted and the frontend will use it, you can run the react app already, first go into the frontend directory:


```bash
    cd frontend
```

...now run:

```bash
    npm run build
    npm run start
```

To run the server (optional):

```bash
    npm run dev
    npm run build
    npm run start
```

Most of the routes are for post requests.

# Reflection

> What was the context for this project? 

It was an Experimental project. The main Idea was to implement an authorization/authentication system without using ready Libraries such as nextJs next-auth, aws/firebase services but doing stuff from scratch by generating and validating credentials/tokens, setting up database & storing cookies.

> Why was this project challenging and a good learning experience?


Some good learnings were:
* Connecting backend and frontend, CORS policy.
* Dealing with deploy issues.
* Using helmet with react to help CEO.

