// bat — a divide-by-16 ultrasound detector. The microphone (SPU0410LR5H,
// biased to half the supply) feeds a comparator-style zero-crossing count on
// A0; the output pin toggles every eight crossings, so 45 kHz becomes an
// audible 2.8 kHz tone on the earphone. Needs a fast ADC loop (ESP32-C3 or
// SAMD21); on slower boards use the analog comparator interrupt instead.
const uint8_t PIN_MIC = A0;
const uint8_t PIN_OUT = 2;
const int MID = 512;
const int HYST = 20;            // hysteresis in ADC counts against noise
bool above = false;
uint8_t crossings = 0;
bool out = false;

void setup() { pinMode(PIN_OUT, OUTPUT); }

void loop() {
  int v = analogRead(PIN_MIC);
  if (!above && v > MID + HYST) { above = true; crossings++; }
  else if (above && v < MID - HYST) { above = false; }
  if (crossings >= 8) {         // 8 rising crossings = 8 cycles -> one output half-cycle
    crossings = 0;
    out = !out;
    digitalWrite(PIN_OUT, out ? HIGH : LOW);
  }
}
