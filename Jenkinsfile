node {
  def myImage     

  stage('Clone repository') {
    checkout scm    
  }     

  stage('Build image') {
    myImage = docker.build("599895438818.dkr.ecr.sa-east-1.amazonaws.com/my-app:${env.BUILD_ID}", "./docker-app")
  }

  stage('Install packages') {
    myImage.inside {
      sh 'echo "installing packages"'
      sh '(cd docker-app/app; npm install)'
    }    
  }

  stage('Unit tests') {
    myImage.inside {
      sh 'echo "testing app"'
      sh '(cd docker-app/app; npm run test)'
    }    
  }

  stage('Push image') {
    docker.withRegistry(
      'https://599895438818.dkr.ecr.sa-east-1.amazonaws.com', 
      'ecr:sa-east-1:aws-ecr-credentials') {
      myImage.push("latest")        
    }    
  }

  stage('Cleaning up') {
    sh 'echo "cleaning up unused images"'
  }

}