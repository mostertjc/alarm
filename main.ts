input.onPinPressed(TouchPin.P2, function () {
    Alarm = true
    while (Alarm == true) {
        music.playTone(349, music.beat(BeatFraction.Whole))
        music.playTone(494, music.beat(BeatFraction.Whole))
    }
})
input.onButtonPressed(Button.AB, function () {
    if (Alarm == true) {
        Alarm = false
    } else {
        basic.showIcon(IconNames.Yes)
        basic.pause(5000)
        Alarm = true
    }
})
let Alarm = false
Alarm = false
basic.forever(function () {
    while (false) {
        basic.showIcon(IconNames.Heart)
    }
})
