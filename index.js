'use strict';

/**
 * @obinexusltd/go-polycall
 * Professional Go Language Binding for LibPolyCall v1trial
 *
 * Architecture: Protocol-compliant adapter (program-first paradigm)
 * Author: Nnamdi Michael Okpala — OBINexusComputing / Aegis Engineering
 *
 * This npm package distributes the Go source files for the LibPolyCall
 * Go binding. All runtime operations require polycall.exe.
 *
 * Directory layout:
 *   pkg/       — public Go package (client.go)
 *   config/    — Go binding configuration, source, and tests
 *   examples/  — usage examples
 *   go.mod     — Go module definition
 */

const path = require('path');

const root = __dirname;

module.exports = {
  /** Absolute path to the package root (contains go.mod) */
  root,

  /** Absolute path to the pkg/ directory (public Go package) */
  pkg: path.join(root, 'pkg'),

  /** Absolute path to the config/ directory */
  config: path.join(root, 'config'),

  /** Absolute path to the examples/ directory */
  examples: path.join(root, 'examples'),

  /** Package metadata */
  meta: {
    name: '@obinexusltd/go-polycall',
    version: '1.0.0',
    goModule: 'github.com/obinexus/libpolycall-v1trial/bindings/go-polycall',
    goVersion: '1.21',
    protocolVersion: '1',
    architecture: 'program-first',
    runtime: 'polycall.exe',
  },
};
