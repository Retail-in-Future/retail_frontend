#!/usr/bin/env groovy
pipeline {
    agent any
    tools {
        nodejs 'node_V6.11.0'
    }
    stages {
        stage('Example') {
            steps {
                sh 'npm --version'
            }
        }
    }
}