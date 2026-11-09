// Minimal stub of the Arduino API, enough to syntax-check the keyring
// sketches on a host with `make sketches`. Not a simulator.
#pragma once
#include <stdint.h>
#include <math.h>
#define HIGH 1
#define LOW 0
#define INPUT 0
#define OUTPUT 1
#define INPUT_PULLUP 2
#define A0 14
#define A1 15
#define A2 16
#define A3 17
typedef uint8_t byte;
typedef bool boolean;
inline void pinMode(uint8_t, uint8_t) {}
inline void digitalWrite(uint8_t, uint8_t) {}
inline int digitalRead(uint8_t) { return 0; }
inline int analogRead(uint8_t) { return 512; }
inline void analogWrite(uint8_t, int) {}
inline void delay(unsigned long) {}
inline void delayMicroseconds(unsigned int) {}
inline unsigned long millis() { return 0; }
inline unsigned long micros() { return 0; }
inline void tone(uint8_t, unsigned int) {}
inline void noTone(uint8_t) {}
inline long map(long x, long in_min, long in_max, long out_min, long out_max) {
  return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
template <class T> T constrain(T x, T lo, T hi) { return x < lo ? lo : (x > hi ? hi : x); }
template <class T> T abs_(T x) { return x < 0 ? -x : x; }
#define abs(x) abs_(x)
struct SerialStub {
  void begin(unsigned long) {}
  void print(const char*) {} void print(int) {} void print(float) {} void print(unsigned long) {}
  void println(const char*) {} void println(int) {} void println(float) {} void println(unsigned long) {} void println() {}
};
static SerialStub Serial;
struct WireStub {
  void begin() {}
  void beginTransmission(uint8_t) {}
  size_t write(uint8_t) { return 1; }
  uint8_t endTransmission(bool = true) { return 0; }
  uint8_t requestFrom(uint8_t, uint8_t, bool = true) { return 0; }
  int available() { return 0; }
  int read() { return 0; }
};
static WireStub Wire;
