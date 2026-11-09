CXX ?= g++
CXXFLAGS ?= -std=c++11 -Wall -Wextra -Werror -fsyntax-only
STUB := keyring/firmware/stub
SKETCHES := $(wildcard keyring/firmware/*/*.ino)

.PHONY: sketches
# Syntax-check every keyring sketch against the stub Arduino API.
sketches:
	@for s in $(SKETCHES); do \
	  $(CXX) $(CXXFLAGS) -I$(STUB) -include Arduino.h -x c++ $$s && echo "ok  $$s" || exit 1; \
	done
