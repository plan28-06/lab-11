pipeline {
    agent any

    environment {
        IMAGE = "plan280406/lab-11:latest"
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t %IMAGE% .'
            }
        }

        stage('Push to Docker Hub') {
            steps {
                bat 'docker push %IMAGE%'
            }
        }

        stage('Deploy GREEN') {
            steps {
                bat 'docker rm -f green 2>NUL || exit 0'
                bat 'docker run -d --name green -p 3002:3000 -e ENVIRONMENT=GREEN %IMAGE%'
            }
        }

        stage('Test GREEN') {
            steps {
                bat 'curl -f http://localhost:3002/status'
            }
        }

        stage('Switch to GREEN') {
            steps {
                bat 'docker rm -f blue 2>NUL || exit 0'
                bat 'docker rm -f active 2>NUL || exit 0'
                bat 'docker run -d --name active -p 3000:3000 -e ENVIRONMENT=GREEN %IMAGE%'
            }
        }

        stage('Verify Active Deployment') {
            steps {
                bat 'curl -f http://localhost:3000/status'
            }
        }
    }
}