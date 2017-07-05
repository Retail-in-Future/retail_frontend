#!/usr/bin/env groovy
node {
    stage('Resolve Dependencies') {
        yarn install
    }
    stage('Test') {
        yarn test
    }
}