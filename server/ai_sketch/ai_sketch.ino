#include <Servo.h>
Servo right;
Servo left;
int pos=0;
void setup(){
  right.attach(9);
  left.attach(3);
}
void loop(){
  for(pos=0;pos<=180;pos+=1){
    right.write(pos);
    left.write(180-pos);
    delay(15);
  }
  for(pos=180;pos>=0;pos-=1){
    right.write(pos);
    left.write(180-pos);
    delay(15);
  }
}