pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                yarn install
            }
        }
        stage('Test') {
            steps {
                yarn test
            }
        }
    }
}