'use strict';

/**
 * The S-box 0 for ZUC.
 * @const
 * @type {Uint8Array}
 */
const S0 = Uint8Array.of(
  0x3E, 0x72, 0x5B, 0x47, 0xCA, 0xE0, 0x00, 0x33,
  0x04, 0xD1, 0x54, 0x98, 0x09, 0xB9, 0x6D, 0xCB,
  0x7B, 0x1B, 0xF9, 0x32, 0xAF, 0x9D, 0x6A, 0xA5,
  0xB8, 0x2D, 0xFC, 0x1D, 0x08, 0x53, 0x03, 0x90,
  0x4D, 0x4E, 0x84, 0x99, 0xE4, 0xCE, 0xD9, 0x91,
  0xDD, 0xB6, 0x85, 0x48, 0x8B, 0x29, 0x6E, 0xAC,
  0xCD, 0xC1, 0xF8, 0x1E, 0x73, 0x43, 0x69, 0xC6,
  0xB5, 0xBD, 0xFD, 0x39, 0x63, 0x20, 0xD4, 0x38,
  0x76, 0x7D, 0xB2, 0xA7, 0xCF, 0xED, 0x57, 0xC5,
  0xF3, 0x2C, 0xBB, 0x14, 0x21, 0x06, 0x55, 0x9B,
  0xE3, 0xEF, 0x5E, 0x31, 0x4F, 0x7F, 0x5A, 0xA4,
  0x0D, 0x82, 0x51, 0x49, 0x5F, 0xBA, 0x58, 0x1C,
  0x4A, 0x16, 0xD5, 0x17, 0xA8, 0x92, 0x24, 0x1F,
  0x8C, 0xFF, 0xD8, 0xAE, 0x2E, 0x01, 0xD3, 0xAD,
  0x3B, 0x4B, 0xDA, 0x46, 0xEB, 0xC9, 0xDE, 0x9A,
  0x8F, 0x87, 0xD7, 0x3A, 0x80, 0x6F, 0x2F, 0xC8,
  0xB1, 0xB4, 0x37, 0xF7, 0x0A, 0x22, 0x13, 0x28,
  0x7C, 0xCC, 0x3C, 0x89, 0xC7, 0xC3, 0x96, 0x56,
  0x07, 0xBF, 0x7E, 0xF0, 0x0B, 0x2B, 0x97, 0x52,
  0x35, 0x41, 0x79, 0x61, 0xA6, 0x4C, 0x10, 0xFE,
  0xBC, 0x26, 0x95, 0x88, 0x8A, 0xB0, 0xA3, 0xFB,
  0xC0, 0x18, 0x94, 0xF2, 0xE1, 0xE5, 0xE9, 0x5D,
  0xD0, 0xDC, 0x11, 0x66, 0x64, 0x5C, 0xEC, 0x59,
  0x42, 0x75, 0x12, 0xF5, 0x74, 0x9C, 0xAA, 0x23,
  0x0E, 0x86, 0xAB, 0xBE, 0x2A, 0x02, 0xE7, 0x67,
  0xE6, 0x44, 0xA2, 0x6C, 0xC2, 0x93, 0x9F, 0xF1,
  0xF6, 0xFA, 0x36, 0xD2, 0x50, 0x68, 0x9E, 0x62,
  0x71, 0x15, 0x3D, 0xD6, 0x40, 0xC4, 0xE2, 0x0F,
  0x8E, 0x83, 0x77, 0x6B, 0x25, 0x05, 0x3F, 0x0C,
  0x30, 0xEA, 0x70, 0xB7, 0xA1, 0xE8, 0xA9, 0x65,
  0x8D, 0x27, 0x1A, 0xDB, 0x81, 0xB3, 0xA0, 0xF4,
  0x45, 0x7A, 0x19, 0xDF, 0xEE, 0x78, 0x34, 0x60
);

/**
 * The S-box 1 for ZUC.
 *
 * @const
 * @type {Uint8Array}
 */
const S1 = Uint8Array.of(
  0x55, 0xC2, 0x63, 0x71, 0x3B, 0xC8, 0x47, 0x86,
  0x9F, 0x3C, 0xDA, 0x5B, 0x29, 0xAA, 0xFD, 0x77,
  0x8C, 0xC5, 0x94, 0x0C, 0xA6, 0x1A, 0x13, 0x00,
  0xE3, 0xA8, 0x16, 0x72, 0x40, 0xF9, 0xF8, 0x42,
  0x44, 0x26, 0x68, 0x96, 0x81, 0xD9, 0x45, 0x3E,
  0x10, 0x76, 0xC6, 0xA7, 0x8B, 0x39, 0x43, 0xE1,
  0x3A, 0xB5, 0x56, 0x2A, 0xC0, 0x6D, 0xB3, 0x05,
  0x22, 0x66, 0xBF, 0xDC, 0x0B, 0xFA, 0x62, 0x48,
  0xDD, 0x20, 0x11, 0x06, 0x36, 0xC9, 0xC1, 0xCF,
  0xF6, 0x27, 0x52, 0xBB, 0x69, 0xF5, 0xD4, 0x87,
  0x7F, 0x84, 0x4C, 0xD2, 0x9C, 0x57, 0xA4, 0xBC,
  0x4F, 0x9A, 0xDF, 0xFE, 0xD6, 0x8D, 0x7A, 0xEB,
  0x2B, 0x53, 0xD8, 0x5C, 0xA1, 0x14, 0x17, 0xFB,
  0x23, 0xD5, 0x7D, 0x30, 0x67, 0x73, 0x08, 0x09,
  0xEE, 0xB7, 0x70, 0x3F, 0x61, 0xB2, 0x19, 0x8E,
  0x4E, 0xE5, 0x4B, 0x93, 0x8F, 0x5D, 0xDB, 0xA9,
  0xAD, 0xF1, 0xAE, 0x2E, 0xCB, 0x0D, 0xFC, 0xF4,
  0x2D, 0x46, 0x6E, 0x1D, 0x97, 0xE8, 0xD1, 0xE9,
  0x4D, 0x37, 0xA5, 0x75, 0x5E, 0x83, 0x9E, 0xAB,
  0x82, 0x9D, 0xB9, 0x1C, 0xE0, 0xCD, 0x49, 0x89,
  0x01, 0xB6, 0xBD, 0x58, 0x24, 0xA2, 0x5F, 0x38,
  0x78, 0x99, 0x15, 0x90, 0x50, 0xB8, 0x95, 0xE4,
  0xD0, 0x91, 0xC7, 0xCE, 0xED, 0x0F, 0xB4, 0x6F,
  0xA0, 0xCC, 0xF0, 0x02, 0x4A, 0x79, 0xC3, 0xDE,
  0xA3, 0xEF, 0xEA, 0x51, 0xE6, 0x6B, 0x18, 0xEC,
  0x1B, 0x2C, 0x80, 0xF7, 0x74, 0xE7, 0xFF, 0x21,
  0x5A, 0x6A, 0x54, 0x1E, 0x41, 0x31, 0x92, 0x35,
  0xC4, 0x33, 0x07, 0x0A, 0xBA, 0x7E, 0x0E, 0x34,
  0x88, 0xB1, 0x98, 0x7C, 0xF3, 0x3D, 0x60, 0x6C,
  0x7B, 0xCA, 0xD3, 0x1F, 0x32, 0x65, 0x04, 0x28,
  0x64, 0xBE, 0x85, 0x9B, 0x2F, 0x59, 0x8A, 0xD7,
  0xB0, 0x25, 0xAC, 0xAF, 0x12, 0x03, 0xE2, 0xF2
);

/**
 * The constant D.
 *
 * @const
 * @type {Uint16Array}
 */
const D = Uint16Array.of(
  0x44D7, 0x26BC, 0x626B, 0x135E, 0x5789, 0x35E2, 0x7135, 0x09AF,
  0x4D78, 0x2F13, 0x6BC4, 0x1AF1, 0x5E26, 0x3C4D, 0x789A, 0x47AC
);

/**
 * The state registers of LFSR.
 *
 * @type {Uint32Array}
 */
const LFSR = new Uint32Array(16);

/**
 * The outputs of bit-reorganization.
 *
 * @type {Uint32Array}
 */
const X = new Uint32Array(4);

/**
 * The registers of F.
 *
 * @type {Uint32Array}
 */
const R = new Uint32Array(2);
/**
 * Emulated addition over GF(2 ^ 31 - 1).
 *
 * @param {number} augend
 * @param {number} addend
 * @returns {number}
 */
function addition31(augend, addend) {
  const summand = ((augend >>> 0) + (addend >>> 0)) >>> 0;
  return (((summand & 0x7FFFFFFF) >>> 0) + (summand >>> 31)) >>> 0;
}

/**
 * Circular left shift over GF(2 ^ 31 - 1).
 *
 * @param {number} x
 * @param {number} n
 * @returns {number}
 */
function rotateLeft31(x, n) {
  return (((((x >>> 0) << n) | (x >>> (31 - n))) >>> 0) & 0x7FFFFFFF) >>> 0;
}

/**
 * Circular left shift over GF(2 ^ 32 - 1).
 *
 * @param {number} x
 * @param {number} n
 * @returns {number}
 */
function rotateLeft32(x, n) {
  return ((((x >>> 0) << n) | (x >>> (32 - n))) >>> 0) >>> 0;
}

/**
 * Linear transform 1.
 *
 * @param {number} x
 * @returns {number}
 */
function linearTransform1(x) {
  return (x ^ rotateLeft32(x, 2) ^ rotateLeft32(x, 10) ^
    rotateLeft32(x, 18) ^ rotateLeft32(x, 24)) >>> 0;
}

/**
 * Linear transform 2.
 *
 * @param {number} x
 * @returns {number}
 */
function linearTransform2(x) {
  return (x ^ rotateLeft32(x, 8) ^ rotateLeft32(x, 14) ^
    rotateLeft32(x, 22) ^ rotateLeft32(x, 30)) >>> 0;
}

/**
 * Tester: run with Node.js.
 */
(() => {
  const assert = require('assert');
  // Testing initialization.
  assert.strictEqual(S0.length, 256);
  assert.strictEqual(S0.BYTES_PER_ELEMENT, 1);
  assert.strictEqual(S1.length, 256);
  assert.strictEqual(S1.BYTES_PER_ELEMENT, 1);
  assert.strictEqual(D.length, 16);
  assert.strictEqual(D.BYTES_PER_ELEMENT, 2);
  assert.strictEqual(LFSR.length, 16);
  assert.strictEqual(LFSR.BYTES_PER_ELEMENT, 4);
  assert.strictEqual(X.length, 4);
  assert.strictEqual(X.BYTES_PER_ELEMENT, 4);
  assert.strictEqual(R.length, 2);
  assert.strictEqual(R.BYTES_PER_ELEMENT, 4);
  // Testing bitop utilities.
  for (let i = 0; i <= 32; ++i) {
    assert.strictEqual(rotateLeft31(0xFFFFFFFF, i), 0x7FFFFFFF);
    assert.strictEqual(rotateLeft32(0xFFFFFFFF, i), 0xFFFFFFFF);
    assert.strictEqual(rotateLeft31(i, i), ((i << i) | i >>> (31 - i)) & 0x7FFFFFFF);
    assert.strictEqual(rotateLeft32(i, i), ((i << i) | i >>> (32 - i)) >>> 0);
  }
})();
