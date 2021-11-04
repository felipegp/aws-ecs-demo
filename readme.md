docker run -d \
-u root \
-v jenkins_home:/var/jenkins_home \
-v /var/run/docker.sock:/var/run/docker.sock \
-v $(which docker):/usr/bin/docker \
-p 8080:8080 -p 50000:50000 \
jenkins/jenkins:latest