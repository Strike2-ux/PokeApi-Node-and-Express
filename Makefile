# Include environment variables from .env
include .env

# Create docker network bridge
network:
	docker network create -d bridge postgres-network

# Docker-compose shortcuts
build:
	docker-compose build

run:
	docker-compose up

start:
	docker-compose up -d

stop:
	docker-compose stop

restart:
	docker-compose restart

rm-containers:
	docker rm $(shell docker stop $(APP_CONTAINER_NAME) $(DB_CONTAINER_NAME))

clean-images:
	docker rmi $(shell docker images -q -f "dangling=true")

rebuild:
	(${MAKE} rm-containers || ${MAKE} clean-images || true) && ${MAKE} build

enter:
	docker exec -it $(APP_CONTAINER_NAME) /bin/bash -l

enter-db:
	docker exec -it $(DB_CONTAINER_NAME) /bin/bash -l

