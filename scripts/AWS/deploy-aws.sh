#!/bin/bash

# Install docker (see [here](https://docs.docker.com/install/linux/docker-ce/ubuntu/#install-using-the-repository))
echo ---------------------------------- install docker START
sudo apt-get update
sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   lsb_release -cs) \
   stable"
sudo apt-get update
sudo apt-get install docker-ce
sudo docker run hello-world
echo ---------------------------------- install docker END

# Install Docker-compose (see [here](https://docs.docker.com/compose/install/))
echo ---------------------------------- install docker-compose START
sudo curl -L https://github.com/docker/compose/releases/download/1.19.0/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
docker-compose --version
echo ---------------------------------- install docker-compose END

# Manage Docker as a non-root user (see [here](https://docs.docker.com/install/linux/linux-postinstall/))
echo ---------------------------------- Manage Docker as a non-root user START
sudo groupadd docker
sudo usermod -aG docker $USER
docker run hello-world
echo ---------------------------------- Manage Docker as a non-root user END
echo ---------------------------------- Log out and log back in so that your group membership is re-evaluated.
