FROM amazoncorretto:20-alpine
MAINTAINER felipegp
COPY app/target/demo-1.0.0.jar demo-1.0.0.jar
ENTRYPOINT ["java","-jar","/demo-1.0.0.jar"]
