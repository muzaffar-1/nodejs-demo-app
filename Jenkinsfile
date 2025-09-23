pipeline {
  agent any
  environment {
    DOCKERHUB_REPO = "yourdockerhubuser/simple-app"   // change this
  }
  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }
    stage('Install & Build') {
      steps {
        sh 'npm install'
      }
    }
    stage('Test') {
      steps {
        sh 'npm test || true'
      }
    }
    stage('Docker Build') {
      steps {
        script {
          sh "docker build -t ${DOCKERHUB_REPO}:${BUILD_NUMBER} ."
        }
      }
    }
    stage('Push to DockerHub') {
      steps {
        withCredentials([usernamePassword(credentialsId: 'dockerhub-credentials', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
          sh 'echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin'
          sh "docker push ${DOCKERHUB_REPO}:${BUILD_NUMBER}"
        }
      }
    }
    stage('Deploy') {
      steps {
        script {
          sh "docker rm -f simple-app || true"
          sh "docker run -d --name simple-app -p 3000:3000 ${DOCKERHUB_REPO}:${BUILD_NUMBER}"
        }
      }
    }
  }
}
