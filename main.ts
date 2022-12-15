radio.onReceivedNumber(function (receivedNumber) {
    if (0 == receivedNumber) {
        basic.showString("droite ou gauche")
    }
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendNumber(4)
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendNumber(5)
})
radio.setGroup(1)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendNumber(1)
    }
    if (input.buttonIsPressed(Button.B)) {
        radio.sendNumber(2)
    }
    if (input.isGesture(Gesture.Shake)) {
        radio.sendNumber(3)
    }
})
