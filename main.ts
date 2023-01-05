radio.onReceivedNumber(function (receivedNumber) {
    if (0 == receivedNumber) {
        basic.showString("droite ou gauche")
    }
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendValue("droite", 0)
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendValue("gauche", 0)
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
