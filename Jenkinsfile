pipeline {
  agent {
    docker { image 'node:14-alpine' }
  }
  
  stages {
    
    stage("install packages") {
      steps {
        echo "installing packages"
        sh '(cd docker-app/app; npm install)'
      }
    }
    
    stage("unit test") {
      steps {
        echo "testing application"
        sh '(cd docker-app/app; npm run test)'
      }
    }

    stage("build image") {
      steps {
        echo "building image"
        sh '(cd docker-app; docker build -t 599895438818.dkr.ecr.sa-east-1.amazonaws.com/my-app:1.0 .)'
      }
    }

    stage("deploy") {
      steps {
        echo "deploying application"
      }
    }
  }
}
