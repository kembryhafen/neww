basic.showIcon(IconNames.Heart)
basic.showNumber(3)
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    music.playTone(262, music.beat(BeatFraction.Breve))
})
