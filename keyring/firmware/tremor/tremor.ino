// tremor — substrate vibration as LED brightness. Piezo disc on A0 with a
// 1 M bias resistor to half the supply; LED on D1 (PWM). A running mean
// removes the offset; a fast attack, slow release envelope makes rhythm
// visible.
const uint8_t PIN_PIEZO = A0;
const uint8_t PIN_LED = 1;
float mean = 512, env = 0;

void setup() { pinMode(PIN_LED, OUTPUT); }

void loop() {
  int v = analogRead(PIN_PIEZO);
  mean += (v - mean) * 0.01f;                  // slow mean: the surface at rest
  float dev = fabs(v - mean);
  if (dev > env) env = dev;                     // attack
  else env *= 0.97f;                            // release
  int pwm = map(constrain((int)env, 0, 120), 0, 120, 0, 255);
  analogWrite(PIN_LED, pwm);
  delay(2);
}
