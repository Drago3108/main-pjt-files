currentBuild.displayName = "project-"+currentBuild.number
node('master') {    
stage ('Code Checkout'){
git branch: 'drago', credentialsId: 'GitHub_123', url: 'https://github.com/dhamodaranv/main-pjt-files.git'
}

 stage('Building-Infra') {
    sh 'docker build -t $dockerimg:$version . '
}
}
