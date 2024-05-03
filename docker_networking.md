# Docker Networking
docker network ls

# show containers
docker ps

# run shell of one container
# (when using container_id, you can use the first 3 characters of the container_id)
# (-it: interactive terminal)
docker exec -it <container_name>|<container_id> sh 


apt-get update
apt-get install iputils-ping
# ifconfig...
apt-get install net-tools 

# inside mongo container
# open mongo shell
mongo
# show databases
show dbs
# use a database
use <database_name>
# show collections
show collections
# show documents in a collection
db.<collection_name>.find()

db.auth("admin", "admin")


# ping a container inside the shell
ping <container_name>|<container_id>

# ...but you get permission denied
# ... then run shell of one container as root!
# (-u | --user: user)
docker exec -it --user root <container_name>|<container_id> sh

# see the ip address of the container
ifconfig
