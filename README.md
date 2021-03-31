# Matching Card Game

### Description

- Develop with [Next.js](https://nextjs.org "Next.JS") (version 10) & React (version 17.0.2 and use react-hook), Redux, TypeScript
- This game about matching card (12 card best score is 12 point, point count by open card)
- You can edit maximum card on environtment variable.
- Demo click [here](https://card-matching-game-ten.vercel.app "here") (deploy with vercel)

### KickStart

Note. for kickstart project install [Git](https://git-scm.com/downloadsttp:// "Git"), [Node.js](https://nodejs.org/en/ "Node.js") or [Docker](https://docs.docker.com/engine/install/ubuntu/ "Docker"). If you want to connect realtime database please add env cofig firebase but don't want to connect remove env for config firebase (if you want to create own firebase read [more](https://firebase.google.com/docs/database/web/start "more") and creat database follow [structor](https://drive.google.com/file/d/1lLJbaM555t_7pZDCuGFnC6kRPe0CiYuv/preview "structor")).

###### Clone Repository

	git clone https://github.com/freedomzzzii/Card-matching-game.git
	git checkout develop

###### ENV File

Create .env file on root project you can update value
Note. for variable
NEXT_PUBLIC_HOST_API = URL to call api in app
NEXT_PUBLIC_NUMBER_CARD = number of cards to render on UI
NEXT_PUBLIC_API_KEY = config firebase
NEXT_PUBLIC_AUTH_DOMAIN = config firebase
NEXT_PUBLIC_DB_URL = config firebase
NEXT_PUBLIC_PROJECT_ID = config firebase
NEXT_PUBLIC_STORAGE_BUCKET = config firebase
NEXT_PUBLIC_MESSAGING_SENDER_ID = config firebase
NEXT_PUBLIC_APP_ID = config firebase
NEXT_PUBLIC_MEASUREMENT_ID = config firebase

	NEXT_PUBLIC_HOST_API=http://localhost:3000/api
	NEXT_PUBLIC_NUMBER_CARD=1,2,3,4,5,6,1,2,3,4,5,6
	NEXT_PUBLIC_API_KEY=AIzaSyCtwI66TLH-jcMmQLPbeX_eyX0ArRwDChE
	NEXT_PUBLIC_AUTH_DOMAIN=card-game-b3faa.firebaseapp.com
	NEXT_PUBLIC_DB_URL=https://card-game-b3faa-default-rtdb.firebaseio.com
	NEXT_PUBLIC_PROJECT_ID=card-game-b3faa
	NEXT_PUBLIC_STORAGE_BUCKET=card-game-b3faa.appspot.com
	NEXT_PUBLIC_MESSAGING_SENDER_ID=642882267008
	NEXT_PUBLIC_APP_ID=1:642882267008:web:8e0c120368f097f7ec4365
	NEXT_PUBLIC_MEASUREMENT_ID=G-7CY9Y2X8V7

###### Script Run

	npm install
	npm run dev
	--- or ---
	docker build . -t card-game
	docker run -p 3000:3000 card-game
