#!/usr/bin/env groovy
node {
    stage('Resolve Dependencies') {
        sh 'yarn install'
    }
    stage('Test') {
        sh 'yarn test'
    }
}