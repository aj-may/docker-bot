all: install build up tmux

install:
	npm install

build:
	npm run build && docker-compose build

up:
	docker-compose up -d

clean:
	rm -r dist node_modules

tmux:
	tmux new-session -Ad -s docker-bot
	tmux source-file .tmux.conf
	tmux attach-session
