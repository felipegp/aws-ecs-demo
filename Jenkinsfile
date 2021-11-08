node {
  def myImage
  def awsDomain = "599895438818.dkr.ecr.sa-east-1.amazonaws.com"
  def myImageName = "${awsDomain}/my-app:${env.BUILD_ID}"

  stage('Clone repository') {
    checkout scm    
  }     

  stage('Build image') {
    myImage = docker.build(myImageName, "./docker-app")
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
      'https://' + awsDomain, 
      'ecr:sa-east-1:aws-ecr-credentials') {
      myImage.push("latest")        
    }    
  }

  stage('Cleaning up') {
    sh 'echo "removing image"'
    sh """
    docker rmi """ + myImageName + """
    """
  }

}