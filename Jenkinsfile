pipeline {
    agent any
    tools {nodejs "node"}
     environment {
            CI = 'true'
        }
    stages {
        stage('Prepare') {
            steps {
                bat './jenkins/scripts/prepare.bat'
            }
        }
        stage('Build') {
            steps {
                bat './jenkins/scripts/build.bat'
            }
        }
        stage('Test') {
            steps {
                bat './jenkins/scripts/test.bat'
            }
        }
        stage('Deliver') {
            steps {
                bat './jenkins/scripts/deliver.bat'
            }
                        }

    }
}