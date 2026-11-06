// radio — nearby transmission on a five-LED bar. The detector (antenna ->
// Schottky diode -> RC -> op-amp) delivers a voltage on A0 that rises with
// field strength; the bar is log-scaled so a phone across the room and a
// phone in the hand both show. Receive only; this transmits nothing, and it
// does not find hidden devices.
const uint8_t PIN_RF = A0;
const uint8_t LEDS[5] = {0, 1, 2, 3, 4};
int floorLevel = 0;

void setup() {
  for (uint8_t i = 0; i < 5; i++) pinMode(LEDS[i], OUTPUT);
  long sum = 0;
  for (int i = 0; i < 32; i++) { sum += analogRead(PIN_RF); delay(5); }
  floorLevel = sum / 32;                    // ambient at power-up is the floor
}

void loop() {
  int v = analogRead(PIN_RF) - floorLevel;
  if (v < 1) v = 1;
  int lit = (int)(log((double)v) / log(2.0));   // 2, 4, 8, 16, 32+ counts above floor
  lit = constrain(lit, 0, 5);
  for (uint8_t i = 0; i < 5; i++) digitalWrite(LEDS[i], i < lit ? HIGH : LOW);
  delay(30);
}
