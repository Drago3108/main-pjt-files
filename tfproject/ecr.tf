resource "aws_ecr_repository" "demo-repository" {
  name                 = "pjt"
  image_tag_mutability = "IMMUTABLE"
}
