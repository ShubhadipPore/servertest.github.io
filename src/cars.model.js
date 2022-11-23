
                            /**Main clss */
class Car {
    constructor(name) {                     /**Constractor */
        this.brand = name;
    }
    present() {
        return 'I have a ' + this.brand;
    }
}
                 /**Inherited clss */
class Model extends Car { 
    constructor(name, modelname) {
        super(name);                          /**Super Class */
        this.model = modelname;
    }
    show() {
        return (this.present() + ' it is a ' + this.model)
    }
}
const mycar = new Model("Ford", "Royal");
let hello = val => "Hello" + val;       /**Arrow Function */

const myFirstElement = <h1>{hello("World") + mycar.show()}</h1>

export {myFirstElement}