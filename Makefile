# https://qiita.com/sun33/items/d728bc9ec27129b53e17
build:
	docker compose build
down:
	docker compose down
logs:
	docker compose logs -f
build-no-cache:
	docker compose build --no-cache
# https://zenn.dev/boarinclover/articles/a839e8d24ff9c0#:~:text=%E3%81%A6%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84%E3%80%82-,%E5%AE%9F%E8%A1%8C%E4%B8%AD%E3%81%AE%E3%82%B3%E3%83%B3%E3%83%86%E3%83%8A%E3%81%AE%E4%B8%AD%E3%81%AB%E5%85%A5%E3%82%8A%E3%81%BE%E3%81%99%E3%80%82,-%24%20docker%20compose%20exec
node:
	docker compose exec app bash
# https://qiita.com/suin/items/19d65e191b96a0079417
pulse:
	docker compose down --rmi all --volumes --remove-orphans
ps:
	docker compose ps
start:
	docker compose run --rm  app npm start

setup:
	brew install make
	@make build
up:
	docker compose up
up-background:
	docker compose up -d
