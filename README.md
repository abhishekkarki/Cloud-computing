# cloud-app-deployment

<img width="1142" alt="cloud" src="https://user-images.githubusercontent.com/47475044/170841797-ba91a12a-a8da-4b9e-83d1-c90cff0e3b08.png">




## Overview
Here I am going to fully deploy an application in clouds using various techniques in fives stages:
- An application development using Node.js
- Cloud access and Application development using Docker
- Building Microservices application
- Application deployment using Kubernetes
- Exercise on FaaS


You can find detailed information about all the problems I faced during building this project and then techniques applied to come over them in the log.txt file.


### Application development using Node.js
- Created an application using **Node.js** for book management system i.e. we can store books with the necessary information and perform some operations on that like updating, deletion, etc.
- Useed **MongoDB** as a database for that and **REST** based APIs.
- After that I have hosted this application on **GCP**(Google cloud platform) on specific port.
- Also applied **reverse proxy** just for getting the flavour of it :)

### Cloud access and Application development using Docker
- Further on the above application, I containerised the the application using docker,
- Created docker image called **cloudcomputinggroup250:lts** and then push it to the docker hub
- link for the image in docker hub https://hub.docker.com/repository/docker/abhishekkarki/cloudcomputinggroup250
- Using the docker composed file, pulled the docker image in the GCP VM
command for running the docker-composed file
```
$ sudo docker-compose up
```
- provide access to certain ports.
- And then deploy the application there.


### Building Microservices application
### Application deployment using Kubernetes
### Exercise on FaaS

