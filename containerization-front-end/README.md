# this is specific in the package.json file of the front-end project

# <short command> --> <actual command>
# you can use "npm run <short command>" to run the actual command

  docker-build --> docker build -t fe-i .
  docker-run --> docker run --name fe-c -d -p 3750:3750 fe-i
  docker-build-and-run --> npm run docker-build && npm run docker-run
  docker-stop --> docker stop fe-c
  docker-rm --> docker rm fe-c
  docker-stop-and-rm --> npm run docker-stop && npm run docker-rm
  