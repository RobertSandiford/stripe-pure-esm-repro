
// TS says it is OK, but actually fails a runtime
import { loadStripe as loadStripe1 } from '@stripe/stripe-js/pure'

// imports a CJS file, works
import { loadStripe as loadStripe2 } from '@stripe/stripe-js/pure/index.js'

// the pure/index.mjs is invalid because it tries to import a file without specifying the extension
// tsc detects this and reports an error
import { loadStripe as loadStripe3 } from '@stripe/stripe-js/pure/index.mjs'

console.log(loadStripe1) // prevent unused import from being stripped
console.log(loadStripe2) // prevent unused import from being stripped
console.log(loadStripe3) // prevent unused import from being stripped