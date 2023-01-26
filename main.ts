radio.onReceivedNumber(function (receivedNumber) {
    if (0 == receivedNumber) {
        basic.showString("droite ou gauche")
        message = 1
    }
})
let message = 0
radio.setGroup(1)
message = 0
basic.showString("")
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
basic.forever(function () {
    if (1 == message) {
        while (false == input.isGesture(Gesture.TiltRight) || false == input.isGesture(Gesture.TiltLeft)) {
            if (input.isGesture(Gesture.TiltRight)) {
                radio.sendValue("droite", 0)
            }
            if (input.isGesture(Gesture.TiltLeft)) {
                radio.sendValue("gauche", 0)
            }
        }
        message = 0
    }
})
