provider "aws" {
  region = "us-west-2"
}

resource "aws_instance" "iot_cloud_monitoring" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"

  tags = {
    Name = "IoTCloudMonitoringInstance"
  }

  provisioner "remote-exec" {
    inline = [
      "sudo apt-get update",
      "sudo apt-get install -y nodejs npm mongodb",
      "git clone https://github.com/oaslananka/IoTCloudMonitoring.git /home/ubuntu/IoTCloudMonitoring",
      "cd /home/ubuntu/IoTCloudMonitoring/backend && npm install",
      "cd /home/ubuntu/IoTCloudMonitoring/backend && npm start"
    ]
  }
}
