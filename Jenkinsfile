currentBuild.displayName = "project-"+currentBuild.number
node('master') {    
stage ('Code Checkout'){
git branch: 'drago', credentialsId: 'GitHub_123', url: 'https://github.com/dhamodaranv/main-pjt-files.git'
}

 stage('Building-Infra') {
    sh 'docker build -t $dockerimg:$version . '
}
 stage('Creating ECR Registory'){
    sh '''cd terraform/ && terraform init && terraform apply -auto-approve'''
}
 stage ('Push image to ECR') {
    sh '''aws ecr get-login-password --region us-west-2 | docker login --username AWS --password-stdin $aws-id.dkr.ecr.us-west-2.amazonaws.com 
          docker tag $dockerimg:$version $aws-id.dkr.ecr.us-west-2.amazonaws.com/pjt:$version
 '''
 }
}
