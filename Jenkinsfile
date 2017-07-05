pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                yarn install
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
                yarn test
            }
        }
    }
}