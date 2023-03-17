.PHONY: build
build:
	docker build --no-cache -t react-prod:latest .

.PHONY: start
start:
	docker run --name madagascar --rm -d -p 8080:8080 react-prod:latest

.PHONY: stop
stop:
	docker stop madagascar
