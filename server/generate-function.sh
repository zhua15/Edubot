cat base_sketch.ino > ai_sketch/ai_sketch.ino
cd ../..
cd Deltahacks\ 9/
source env/Scripts/activate
cd src
#python main.py 'move forward for 3 seconds and then turn right and continue moving for 5 seconds' # example
python main.py "$1"
cat ../function.c >> ../../Edubot/server/ai_sketch/ai_sketch.ino
arduino-cli compile --fqbn arduino:avr:uno ai_sketch/ai_sketch.ino
arduino-cli upload -p COM3 --fqbn arduino:avr:uno ai_sketch/ai_sketch.ino