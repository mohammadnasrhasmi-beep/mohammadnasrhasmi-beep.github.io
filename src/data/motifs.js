/*
  Motifs de la matrice LED 8×8.
  Un motif = 8 octets, un par rangée : chaque bit à 1 allume une LED
  (même principe que les registres du contrôleur HT16K33).
*/
export const LETTRE_M = [
  0b10000001,
  0b11000011,
  0b10100101,
  0b10011001,
  0b10000001,
  0b10000001,
  0b10000001,
  0b00000000,
];

export const LETTRE_N = [
  0b10000001,
  0b11000001,
  0b10100001,
  0b10010001,
  0b10001001,
  0b10000101,
  0b10000011,
  0b00000000,
];

export const LETTRE_H = [
  0b10000001,
  0b10000001,
  0b10000001,
  0b11111111,
  0b10000001,
  0b10000001,
  0b10000001,
  0b00000000,
];

// Le motif de balayage utilisé dans matrice_led.py
export const BALAYAGE = Array(8).fill(0b10100101);
