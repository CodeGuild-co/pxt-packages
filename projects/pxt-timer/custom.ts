
 /**
 * Create timers that countdown and then run code
 */
//% color=#E01818 weight=100
namespace timer {
    /**
     * Set a timer for an inputted time in minutes and seconds
     * @param mins the number of minutes to countdown, eg:1, 2, 5
	 * @param secs the number of seconds to countdown eg: 10, 20, 30
     */
	//% blockId=timer_countdown
	//% block="countdown|mins%mins|secs%secs"
    export function countdown(mins:number=1, secs:number=0, body: Action):void {
        let time = 1000 * (secs + 60 * mins)
        let frequency = time / 25
        let timerState = true

        input.onButtonPressed(Button.B, () => {
            timerState = false
        })

        led.plotAll()
        for (let row = 0; timerState && row < 5; row++) {
            for (let column = 0; timerState && column < 5; column++) {
                basic.pause(frequency)
                led.unplot(column, row)
            }
        }
        basic.clearScreen()

        if (timerState && body) {
            body()
        }
    }
}
