#include <Servo.h>
Servo right;
Servo left;
int pos=0;
void setup(){
  right.attach(9);
  left.attach(3);
}
