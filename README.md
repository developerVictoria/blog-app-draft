# blog-app-draft

Pre-requirements: local postgres (it wasn't tested on the docker conteiner so I can't advise to use dockerized postgres)

#Initial setup:

   BACKEND:
   
1.Go to the nest-postgres-blog, find .env and replace the connection data with yours, make sure to input db name of existing DB

2. In the nest-postgres-blog run `npm i ` command to install all dependancies
   
3.After all of them were installed run  `npm run start:dev` to start the server

  FRONTEND:
  
1.Go to the react-blog folder,find  environment.ts and replace REACT_APP_API_URL with url of the backend running on your instance (with / in the end to insure correct functioning)

2. In the the react-blog folder run `npm i`  command to install all dependancies

3. After all was installed run `npm run start` to start the client

NB: I know that it's extremely important to hash or crypt the passwords and never to store them explisitly in db, however for the sake of expamle and in limited time I ommited this step as well as route protection with jwt token. Also since user login and registration wasn't mentioned in the task description but is nessesary to test I implemented it in a the most basic form that time allowed.

NB2: In the login page if user and email is new it will register you automaticaly without any additional redirects

NB3: You can see edit post button only on your posts, post of other authors you can't edit

!!!: Sometimes it glitches and doesn't immediately, i didn't have time to fix this, so if this happen you can reload or relogin to see the posts, they are added to the db, I just didn't immplement in properly    
