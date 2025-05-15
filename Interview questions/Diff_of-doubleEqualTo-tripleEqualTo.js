// There is a fine line of difference between == and ===
/**
 * "=="
 * == is an abstract equality operator
 * This operator will compare for equality after doing an necessary type conversion
 * a = 10;
 * b = "10"
 * a == b // this will give us True boolean answer
 */

/**
 * "==="
 * === is the strict equality operator
 * This operator will not do type converison so if two values are not the same type
 * this will simply return false.
 * a = 10
 * b = "10"
 * a === b // this will give false boolean in console
 */