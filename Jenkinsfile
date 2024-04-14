pipeline {
    agent any
    tools {nodejs "node"}
     environment {
            CI = 'true'
        }
    stages {
        stage('Build') {
            steps {
                bat './jenkins/scripts/prepare.bat'
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