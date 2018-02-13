# cryptowatch
Web app monitoring various cryptocurrencies through public APIs.

## Demo
TBD

## Stack
* [ReactJS](https://reactjs.org/)
* [Node.js](https://nodejs.org/en/)
* [Express](http://expressjs.com/)
* [Redis](https://redis.io/download)
* [Docker](https://www.docker.com/)

## Get Started
* Install and launch **[Redis](https://redis.io/download)**
```bash
cd /my/redis/installation/folder
src/redis-server
```
* Dependencies
```bash
yarn
```
* Start server
```bash
yarn start-server
```
> Running locally on http://localhost:4000
* Start React App
```bash
yarn start
```
> Running locally on http://localhost:3000

## Deployment with Docker
* Install [Docker](https://www.docker.com/) and launch the docker-compose
```bash
docker-compose up -d
```
* Watch the logs until the web app is running
```bash
docker-compose logs -f -t
```
> Running locally on http://localhost:4000
