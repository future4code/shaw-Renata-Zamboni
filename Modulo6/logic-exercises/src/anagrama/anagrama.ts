// Escreva uma função que recebe duas strings s e t e define se t é um anagrama de s.
// Ou seja, se com as mesmas letras de s, é possível escrever t.

function isAnagram(s: string, t: string) {
	return s.split("").sort().join("") === t.split("").sort().join("")
}