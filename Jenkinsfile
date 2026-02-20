pipeline {
  agent any

  stages {
    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Build Next.js') {
      steps {
        sh 'npm run build'
      }
    }

    stage('Run app') {
      steps {
        sh 'npm run start &'
      }
    }
  }
}