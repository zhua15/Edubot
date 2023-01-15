void loop() {
  //move forward
  rightServo.write(90);
  leftServo.write(90);
  delay(3000);
  //turn right
  rightServo.write(0);
  leftServo.write(180);
  delay(5000);
}