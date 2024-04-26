// building the docker image

docker build -t be-i .

// running the docker image (be-i) in container (be-c) on port 3751

docker run -d -p 3751:3751 --name be-c be-i

// stop the container

docker container stop be-c

// remove the container

docker container rm be-c

// remove the image

docker image rm be-i


