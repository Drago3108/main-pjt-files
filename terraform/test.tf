resource "aws_ecr_repository" "test" {
name                 = "pjt"
  image_tag_mutability = "MUTABLE"
  image_scanning_configuration {
  scan_on_push = "true"
#  visibility = "public"
#repository_url = "943557877060.dkr.ecr.us-west-2.amazonaws.com/${name}"
#repository = "${data.aws_ecr_repository_url.test.registory_url}"
}
}
