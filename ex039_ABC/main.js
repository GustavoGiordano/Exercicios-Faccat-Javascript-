/*39) Para A = V, B = V e C = F, qual o resultado da avaliação das seguintes expressões:

a) (A e B) ou (A xou B)
b) (A ou B) e (A e C)
c) A ou C e B xou A e não B */

var A = true
var B = true
var C = false

var a = (A && B) || (A ^ B)
var b = (A || B) && (A && C)
var c = A || C && B ^ A && !B

alert("a) (A e B) ou (A xou B) = " + a + "\nb) (A ou B) e (A e C) = " + b + "\nc) A ou C e B xou A e não B = " + c)
