// lumen — the counting version: measure a lamp's flicker frequency and blink
// it back, one short blink per 10 Hz, so 100 Hz mains flicker reads as ten
// blinks. The analogue earphone version needs no microcontroller at all
// (photodiode -> transimpedance amplifier -> jack). Photodiode amplifier out
// on A0, biased to half the supply; LED on D1.
const uint8_t PIN_LIGHT = A0;
const uint8_t PIN_LED = 1;
const int HYST = 8;

void setup() { pinMode(PIN_LED, OUTPUT); }

void loop() {
  // Count rising crossings of the mean over 200 ms.
  long sum = 0; int n = 0;
  unsigned long t0 = millis();
  while (millis() - t0 < 50) { sum += analogRead(PIN_LIGHT); n++; }
  int mid = n ? (int)(sum / n) : 512;
  bool above = false; unsigned int crossings = 0;
  t0 = millis();
  while (millis() - t0 < 200) {
    int v = analogRead(PIN_LIGHT);
    if (!above && v > mid + HYST) { above = true; crossings++; }
    else if (above && v < mid - HYST) { above = false; }
  }
  unsigned int hz = crossings * 5;             // crossings per 200 ms -> per second
  unsigned int blinks = hz / 10;
  for (unsigned int i = 0; i < blinks && i < 20; i++) {
    digitalWrite(PIN_LED, HIGH); delay(40); digitalWrite(PIN_LED, LOW); delay(60);
  }
  delay(600);
}
