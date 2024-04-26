# necessary commands to build/run/stop/delete docker containers/images with docker-compose

# building the docker images
docker-compose build

# running the docker images in containers
docker-compose up -d

# stopping the containers
docker-compose stop

# removing the containers
docker-compose rm

# removing the images
docker-compose down --rmi all
