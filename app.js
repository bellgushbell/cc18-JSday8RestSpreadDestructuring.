// import { sayGoodbye, hi } from "./module1.js"
import * as say from "./module1.js";
import bell from "./module2.js";
export function sayHi() {
    console.log('Hello Modules')
}

sayHi()

say.sayHello()
say.sayGoodbye()
bell()
