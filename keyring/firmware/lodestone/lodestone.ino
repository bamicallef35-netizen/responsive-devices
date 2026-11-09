// lodestone — magnetic field strength as vibration. Hall-sensor version.
// SS49E output to A0 (idles at half the supply with no field); coin motor
// on D1 through an NPN transistor with a flyback diode.
const uint8_t PIN_HALL = A0;
const uint8_t PIN_MOTOR = 1;
const int DEADBAND = 6;     // ADC counts of noise around the idle point
int idle = 512;

void setup() {
  pinMode(PIN_MOTOR, OUTPUT);
  long sum = 0;
  for (int i = 0; i < 64; i++) { sum += analogRead(PIN_HALL); delay(2); }
  idle = sum / 64;          // the field at power-up counts as zero
}

void loop() {
  int field = analogRead(PIN_HALL) - idle;
  int strength = abs(field) - DEADBAND;
  if (strength < 0) strength = 0;
  int pwm = map(constrain(strength, 0, 300), 0, 300, 0, 255);
  analogWrite(PIN_MOTOR, pwm);
  delay(20);
}
