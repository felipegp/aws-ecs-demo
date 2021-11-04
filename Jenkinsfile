pipeline {
  agent {
    docker { image 'node:14-alpine' }
  }
  
  stages {
    
    stage("build") {
      steps {
        echo "building application"
      }
    }
    
    stage("unit test") {
      steps {
        echo "testing application"
        sh '(cd docker-app/app; npm run test)'
      }
    }

    stage("deploy") {
      when {
        expression {
          env.BRANCH_NAME == 'master'
        }
      }
      steps {
        echo "deploying application"
      }
    }

  }
}
