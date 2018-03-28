pipeline {
  agent any
  stages {
    stage('test') {
      steps {
        echo 'test'
      }
    }
    stage('deploy') {
      when {
        branch 'develop'
      }
      steps {
        echo 'deploy'
      }
    }
    stage('release') {
      when {
        branch 'master'
      }
      steps {
        echo 'release'
      }
    }
  }
}
