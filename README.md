# Matching Card Game

### Description

- Develop with [Next.js](https://nextjs.org "Next.JS") (version 10) & React (version 17.0.2 and use react-hook), Redux, TypeScript
- This game about matching card (12 card best score is 12 point, point count by open card)
- You can edit maximum card on environtment variable.
- Demo click [here](https://card-matching-game-ten.vercel.app "here") (deploy with vercel)

####KickStart

Note. for kickstart project install [Git](https://git-scm.com/downloadsttp:// "Git"), [Node.js](https://nodejs.org/en/ "Node.js") or [Docker](https://docs.docker.com/engine/install/ubuntu/ "Docker")

###### Clone Repository

	git clone https://github.com/freedomzzzii/Card-matching-game.git
	git checkout develop

###### ENV File

Create .env file on root project

	NEXT_PUBLIC_HOST_API=http://localhost:3000/api
	NEXT_PUBLIC_NUMBER_CARD=1,2,3,4,5,6,1,2,3,4,5,6

###### Script Run

	npm install
	npm run dev
	--- or ---
	docker build . -t card-game
	docker run -p 3000:3000 card-game
