pipeline {
    agent any
    stages {
        stage('HelloWorld') {
        steps {
            echo 'Hello World'
        }
    }
    stage('Get code') {
        steps {
            git clone "https://pengchuan987@bitbucket.org/retail_in_future/retail_frontend.git"
        }
    }
    stage('Install') {
        steps {
            yarn install
        }
    }
  }
}