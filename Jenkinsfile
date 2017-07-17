#!/usr/bin/env groovy
pipeline {
    agent any
    stages {
        stage('Build docker') {
            steps {
                sh 'scripts/ci/build_docker.sh'
            }
        }
        stage('Resolve dependencies.') {
            steps {
                sh 'scripts/ci/prepare.sh'
            }
        }
        stage('Run unit test.') {
            steps {
                sh 'scripts/ci/test.sh'
            }
        }
    }
}
