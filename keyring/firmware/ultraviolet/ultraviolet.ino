// ultraviolet — relative UV irradiance on a five-LED bar. GUVA-S12SD on A0.
// The sensor reads UV-A and UV-B in proportion; without calibration against a
// reference meter the bar is relative, which is why it has five steps, not a
// number.
const uint8_t PIN_UV = A0;
const uint8_t LEDS[5] = {0, 1, 2, 3, 4};
const int FULL_SCALE = 700;   // ADC counts at bright midday sun, roughly; adjust
float smoothed = 0;

void setup() {
  for (uint8_t i = 0; i < 5; i++) pinMode(LEDS[i], OUTPUT);
}

void loop() {
  smoothed += (analogRead(PIN_UV) - smoothed) * 0.1f;   // slow so the bar does not flicker
  int lit = map(constrain((int)smoothed, 0, FULL_SCALE), 0, FULL_SCALE, 0, 5);
  for (uint8_t i = 0; i < 5; i++) digitalWrite(LEDS[i], i < lit ? HIGH : LOW);
  delay(50);
}
