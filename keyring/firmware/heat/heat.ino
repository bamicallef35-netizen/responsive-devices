// heat — surface temperature at a distance, as pitch. MLX90614 over I2C;
// piezo on D3. Reads the object-temperature register directly so no library
// is needed.
#include <Wire.h>
const uint8_t MLX_ADDR = 0x5A;
const uint8_t REG_TOBJ = 0x07;
const uint8_t PIN_PIEZO = 3;

float readObjectC() {
  Wire.beginTransmission(MLX_ADDR);
  Wire.write(REG_TOBJ);
  Wire.endTransmission(false);
  Wire.requestFrom(MLX_ADDR, (uint8_t)3);
  if (Wire.available() < 3) return NAN;
  uint16_t raw = Wire.read();
  raw |= (uint16_t)Wire.read() << 8;
  Wire.read();                              // PEC, ignored here
  return raw * 0.02f - 273.15f;             // register unit is 0.02 K
}

void setup() {
  Wire.begin();
  pinMode(PIN_PIEZO, OUTPUT);
  Serial.begin(115200);
}

void loop() {
  float c = readObjectC();
  if (isnan(c)) { noTone(PIN_PIEZO); delay(200); return; }
  // 0 C -> 200 Hz, 60 C -> 2000 Hz: cold is low, hot is high.
  unsigned int hz = (unsigned int)map(constrain((int)c, 0, 60), 0, 60, 200, 2000);
  tone(PIN_PIEZO, hz);
  Serial.println(c);
  delay(100);
}
