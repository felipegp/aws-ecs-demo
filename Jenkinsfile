pipeline {
  agent {
    docker { image 'node:14-alpine' }
  }
  
  stages {
    
    stage("build") {
      steps {
        echo "building application"
        sh 'node --version'
      }
    }
    
    stage("unit test") {
      steps {
        echo "testing application"
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
