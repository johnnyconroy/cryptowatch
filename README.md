# cryptowatch
Web app monitoring various cryptocurrencies through public APIs.

## Demo
TBD

## Stack
* [ReactJS](https://reactjs.org/)
* [Node.js](https://nodejs.org/en/)
* [Express](http://expressjs.com/)
* [Redis](https://redis.io/download)
* [Nginx](https://nginx.org/en/)
* [Docker](https://www.docker.com/)

![alt text](https://raw.githubusercontent.com/johnnyconroy/cryptowatch/master/images/stackDiagram.png)

## Get Started
* Install and launch [Redis](https://redis.io/download)
```bash
# on a Mac
cd /my/redis/installation/folder
make
src/redis-server
```
* Dependencies
```bash
yarn
```
* Start server - in a second terminal window
```bash
yarn start-server
```
> Running on http://localhost:4000
* Start React App
```bash
yarn start
```
> Running on http://localhost:3000

## Run with Docker
* Install [Docker](https://www.docker.com/) and launch the docker-compose
```bash
docker-compose up -d
```
* Watch the logs until the web app is running
```bash
docker-compose logs -f -t
```
> App running on http://localhost and Redis Commander running on http://localhost:8081

## Deploy on AWS
Here's a set-up example.
* Launch an Ubuntu EC2 instance with default parameters except for the security groups (see picture below)
* SSH to your instance
* Install Docker (see [here](https://docs.docker.com/install/linux/docker-ce/ubuntu/#install-using-the-repository))
```bash
$ sudo apt-get update
$ sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    software-properties-common
$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
$ sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
$ sudo apt-get update
$ sudo apt-get install docker-ce
$ sudo docker run hello-world
```
* Install Docker-compose (see [here](https://docs.docker.com/compose/install/))
```bash
$ sudo curl -L https://github.com/docker/compose/releases/download/1.19.0/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
$ sudo chmod +x /usr/local/bin/docker-compose
$ docker-compose --version
```
* Manage Docker as a non-root user (see [here](https://docs.docker.com/install/linux/linux-postinstall/))
```bash
$ sudo groupadd docker
$ sudo usermod -aG docker $USER
$ docker run hello-world
```
* Clone this repository
* Launch docker-compose
```
docker-compose up -d
```
* Watch the logs until the web app is running
```bash
docker-compose logs -f -t
```
> App running on your EC2 public DNS (something like http://ec2-39-205-118-100.us-west-2.compute.amazonaws.com/)
