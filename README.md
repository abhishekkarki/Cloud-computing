# Cloud-computing

<img width="1142" alt="cloud" src="https://user-images.githubusercontent.com/47475044/170841797-ba91a12a-a8da-4b9e-83d1-c90cff0e3b08.png">




## Overview
Here we are going to do five tasks from our Cloud computing course
- An application development using Node.js
- Cloud access and Application development using Docker
- Building Microservices application
- Application deployment using Kubernetes
- Exercise on FaaS


### Application development using Node.js
- Created an application using **Node.js** for book management system i.e. we can store books with the necessary information and perform some operations on that like updating, deletion, etc.
- We use **MongoDB** as a database for that and **REST** based APIs.
- After that we have hosted this application on **GCP**(Google cloud platform)
- Also applied **reverse proxy** just for getting the flavour of it :)

### Cloud access and Application development using Docker
- Further on the above application, I containerised the the application using docker,
- Created docker image and then push it to the docker registry 
- Also created docker-composed.yml file
- Using the docker composed file I pulled the docker image in the GCP VM
- And then deploy the application there.
```
$ sudo docker-compose up
```

### Building Microservices application
### Application deployment using Kubernetes
### Exercise on FaaS

