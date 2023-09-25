FROM amazoncorretto:20-alpine
MAINTAINER felipegp

RUN mkdir /app

COPY app.jar app/app.jar

WORKDIR /app

ENTRYPOINT ["java","-jar","/app.jar"]
