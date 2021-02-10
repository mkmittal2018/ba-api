# BA API TASK


## Local Development Setup

## Using Docker

#### Prerequisites

  * [Git](https://git-scm.com/downloads)
  * [Docker](https://docs.docker.com/get-docker/)


### Setting up the development environment

* Clone the git repository:

```
git clone  https://github.com/ba-api.git &&  cd ba-api
```


* Verify docker is installed & running:

```
docker version

## output will display

Client: Docker Engine - Community
 Cloud integration: 1.0.2
 Version:           19.03.13
 API version:       1.40
 Go version:        go1.13.15

Server: Docker Engine - Community
 Engine:
  Version:          19.03.13
  API version:      1.40 (minimum version 1.12)
  Go version:       go1.13.15
```


* Build the docker images:

```
docker build -t ba-api:1.0.0 .
```

* Once the images are built verify the docker images:

```
docker images
```

* Run the containers:

```
docker run --name ba-api -p 8080:8080 -d ba-api:1.0.0

```
