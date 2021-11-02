pipeline {
  agent any
  
  stages {
    
    stage("build") {
      steps {
        echo "building application"
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
