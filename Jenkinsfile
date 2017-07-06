#!/usr/bin/env groovy
pipeline {
    agent any
    tools {
        nodejs 'Node 6.x'
    }
    stages {
        stage('Example') {
            steps {
                sh 'npm --version'
            }
        }
    }
}