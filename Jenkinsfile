#!/usr/bin/env groovy
pipeline {
    agent any
    tools {
        nodejs 'node_V6.11.0'
    }
    stages {
        stage('Resolve dependencies.') {
            steps {
                sh 'yarn install'
            }
        }
        stage('Run unit test.') {
            steps {
                sh 'yarn test'
            }
        }
    }
}