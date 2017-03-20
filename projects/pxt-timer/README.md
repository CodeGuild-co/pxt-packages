#Timer Documentation

Input the length of time required in minutes and seconds and watch the timer count down by turning off a LED light at regular intervals. 
It will start when it is run in the program but it can be aborted during the timer by pressing the B button. 

```sig
timer.countdown(1, 30);
```
### Parameters 

* Mins is the number of minutes for the countdown. E.g. 1, 2, 3
* Secs is the number of seconds for the countdown. E.g. 10, 20, 30
* Body is the function that represents all the blocks inside of the timer block

###Examples

```blocks
timer.countdown(0, 10, () => {
	basic.showNumber(10)
});
```
