/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe: (parameters) => {
            if (val !== parameters) throw new Error("Not Equal");
            else return true;
        },
        notToBe: (parameters) => {
            if (val === parameters) throw new Error("Equal");
            else return true;
        }
    }
};


/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */