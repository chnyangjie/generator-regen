pipeline {
  stages {
    stage('test') {
      script {
        echo 'test'
      }
    }
    stage('deploy') {
      when {
        branch 'develop'
      }
      script {
        echo 'deploy'
      }
    }
    stage('release') {
      when {
        branch 'master'
      }
      script {
        echo 'release'
      }
    }
  }
}
