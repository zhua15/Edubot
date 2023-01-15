#include <Servo.h>
Servo right;
Servo left;
void setup(){
  right.attach(9);
  left.attach(3);
}
void stopBot(){
    right.write(90);
    left.write(90);
}