pipeline {
    agent any
    tools {nodejs "node"}
     environment {
            CI = 'true'
        }
    triggers {
        // Trigger the pipeline when changes are pushed to the main branch
        pollSCM('*/1 * * * *') // Polls the SCM every 5 minutes
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
                bat './jenkins/scripts/build.bat'
                bat './jenkins/scripts/killold.bat'
                bat './jenkins/scripts/deliver.bat'
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                bat './jenkins/scripts/kill.bat'
            }
                        }

    }
}