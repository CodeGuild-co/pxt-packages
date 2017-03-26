/**
* Do things with binary numbers
*/
//% weight=5 color=#2699BF
namespace binary {
	/**
	 * Displays the inputted number as binary on the LEDs, where the top left LED is 0 or 1 and the bottom right LED is the highest possible value (rows, then columns)
	 * @param power is the power of 2 when calculating the binary number eg. 0, 1, 24
	 **/
	//% blockId=binary_show
	//% block="show binary version of %decimal"
	export function showBinaryNumber(decimal: number): void {
		let power = 24
		basic.clearScreen()
		if (decimal <= 33554431) {
			while (decimal > 0) {
				if (decimal >= Math.pow(2, power)) {
					decimal += -Math.pow(2, power)
					for (let i = 0; i <= 4; i++) {
						if (power <= 5 * (i + 1) - 1) {
							led.plot(power - 5 * i, i)
						}
					}
				}
				power += -1
			}
		} else {
			basic.showString("Too Big")
		}
	}
}
