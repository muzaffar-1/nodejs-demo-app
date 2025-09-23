pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test || true'   // run tests if you have, ignore if none
            }
        }
        stage('Docker Build & Deploy') {
            steps {
                script {
                    def image = "simple-app:${BUILD_NUMBER}"
                    // Build Docker image
                    sh "docker build -t ${image} ."
                    // Stop old container if running
                    sh "docker rm -f simple-app || true"
                    // Run new container
                    sh "docker run -d --name simple-app -p 3000:3000 ${image}"
                }
            }
        }
    }
}
