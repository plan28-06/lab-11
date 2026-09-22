pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t lab-11 .'
            }
        }

        stage('Stop Old Container') {
            steps {
                bat 'docker stop lab-11-container || exit 0'
                bat 'docker rm lab-11-container || exit 0'
            }
        }

        stage('Run Container') {
            steps {
                bat 'docker run -d -p 3000:3000 --name lab-11-container lab-11'
            }
        }

        stage('Test API') {
            steps {
                bat 'curl -f http://localhost:3000/status'
            }
        }
    }
}