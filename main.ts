input.onGesture(Gesture.TiltRight, function () {
    radio.sendNumber(90)
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendNumber(-90)
})
radio.setGroup(1)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendNumber(1)
    }
    if (input.buttonIsPressed(Button.B)) {
        radio.sendNumber(2)
    }
    if (input.buttonIsPressed(Button.AB)) {
        radio.sendNumber(3)
    }
})
basic.forever(function () {
    basic.showLeds(`
        . . . . #
        . . . . #
        . . . . #
        . . . . #
        . . . . #
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . # #
        . . . # .
        . . . # .
        . . . # .
        . . . # #
        `)
    basic.pause(100)
    basic.showLeds(`
        . . # # .
        . . # . #
        . . # . #
        . . # . #
        . . # # .
        `)
    basic.pause(100)
    basic.showLeds(`
        . # # . .
        . # . # .
        . # . # .
        . # . # .
        . # # . .
        `)
    basic.pause(100)
    basic.showLeds(`
        # # . . #
        # . # . #
        # . # . #
        # . # . #
        # # . . #
        `)
    basic.pause(100)
    basic.showLeds(`
        # . . # #
        . # . # .
        . # . # #
        . # . # .
        # . . # .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . # # .
        # . # . #
        # . # # .
        # . # . #
        . . # . #
        `)
    basic.pause(100)
    basic.showLeds(`
        . # # . .
        . # . # .
        . # # . .
        . # . # .
        . # . # .
        `)
    basic.pause(100)
    basic.showLeds(`
        # # . . .
        # . # . #
        # # . . #
        # . # . #
        # . # . .
        `)
    basic.pause(100)
    basic.showLeds(`
        # . . . #
        . # . # .
        # . . # .
        . # . # .
        . # . . #
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . # #
        # . # . .
        . . # . .
        # . # . .
        # . . # #
        `)
    basic.pause(100)
    basic.showLeds(`
        . . # # .
        . # . . #
        . # . . #
        . # . . #
        . . # # .
        `)
    basic.pause(100)
    basic.showLeds(`
        . # # . .
        # . . # .
        # . . # .
        # . . # .
        . # # . .
        `)
    basic.showLeds(`
        # # . . #
        . . # . .
        . . # . #
        . . # . #
        # # . . #
        `)
    basic.showLeds(`
        # . . # .
        . # . . .
        . # . # .
        . # . # .
        # . . # .
        `)
    basic.showLeds(`
        . . # . #
        # . . . .
        # . # . .
        # . # . .
        . . # . .
        `)
    basic.showLeds(`
        . # . # #
        . . . . #
        . # . . #
        . # . . #
        . # . . #
        `)
    basic.showLeds(`
        # . # # #
        . . . # .
        # . . # .
        # . . # .
        # . . # .
        `)
    basic.showLeds(`
        . # # # .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        # # # . #
        . # . . #
        . # . . #
        . # . . #
        . # . . #
        `)
    basic.showLeds(`
        # # . # #
        # . . # .
        # . . # #
        # . . # .
        # . . # #
        `)
    basic.showLeds(`
        # . # # #
        . . # . .
        . . # # .
        . . # . .
        . . # # #
        `)
    basic.showLeds(`
        . # # # .
        . # . . .
        . # # . .
        . # . . .
        . # # # .
        `)
    basic.showLeds(`
        # # # . .
        # . . . .
        # # . . .
        # . . . .
        # # # . .
        `)
    basic.showLeds(`
        # # . . .
        . . . . .
        # . . . .
        . . . . .
        # # . . .
        `)
    basic.showLeds(`
        # . . . .
        . . . . #
        . . . . #
        . . . . #
        # . . . .
        `)
    basic.showLeds(`
        . . . . #
        . . . # .
        . . . # .
        . . . # .
        . . . . #
        `)
    basic.showLeds(`
        . . . # #
        . . # . .
        . . # . .
        . . # . .
        . . . # #
        `)
    basic.showLeds(`
        . . # # .
        . # . . #
        . # . . #
        . # . . #
        . . # # .
        `)
    basic.showLeds(`
        . # # . .
        # . . # .
        # . . # .
        # . . # .
        . # # . .
        `)
    basic.showLeds(`
        # # . . #
        . . # . #
        . . # . #
        . . # . #
        # # . . .
        `)
    basic.showLeds(`
        # . . # .
        . # . # .
        . # . # .
        . # . # .
        # . . . #
        `)
    basic.showLeds(`
        . . # . .
        # . # . .
        # . # . .
        # . # . .
        . . . # #
        `)
    basic.showLeds(`
        . # . . #
        . # . . #
        . # . . #
        . # . . #
        . . # # .
        `)
    basic.showLeds(`
        # . . # .
        # . . # .
        # . . # .
        # . . # .
        . # # . .
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        # # . . .
        `)
    basic.showLeds(`
        . # . . .
        . # . . .
        . # . . .
        . # . . .
        # . . . .
        `)
    basic.showLeds(`
        # . . . .
        # . . . #
        # . . . #
        # . . . #
        . . . . .
        `)
    basic.showLeds(`
        . . . . #
        . . . # .
        . . . # .
        . . . # .
        . . . . #
        `)
    basic.showLeds(`
        . . . # #
        . . # . .
        . . # . #
        . . # . .
        . . . # #
        `)
    basic.showLeds(`
        . . # # #
        . # . . .
        . # . # #
        . # . . #
        . . # # .
        `)
    basic.showLeds(`
        . # # # .
        # . . . .
        # . # # .
        # . . # .
        . # # . .
        `)
    basic.showLeds(`
        # # # . .
        . . . . #
        . # # . #
        . . # . #
        # # . . #
        `)
    basic.showLeds(`
        # # . . #
        . . . # .
        # # . # #
        . # . # .
        # . . # .
        `)
    basic.showLeds(`
        # . . # .
        . . # . #
        # . # # #
        # . # . #
        . . # . #
        `)
    basic.showLeds(`
        . . # . .
        . # . # .
        . # # # .
        . # . # .
        . # . # .
        `)
    basic.showLeds(`
        . . # . .
        . # . # .
        . # # # .
        . # . # .
        . # . # .
        `)
    basic.showLeds(`
        . # . . #
        # . # . #
        # # # . #
        # . # . #
        # . # . .
        `)
    basic.showLeds(`
        # . . # .
        . # . # .
        # # . # .
        . # . # .
        . # . . #
        `)
    basic.showLeds(`
        . . # . .
        # . # . .
        # . # . .
        # . # . .
        # . . # #
        `)
    basic.showLeds(`
        . # . . #
        . # . . #
        . # . . #
        . # . . #
        . . # # .
        `)
    basic.showLeds(`
        # . . # .
        # . . # .
        # . . # .
        # . . # .
        . # # . .
        `)
    basic.showLeds(`
        . . # . .
        . . # . #
        . . # . #
        . . # . #
        # # . . .
        `)
    basic.showLeds(`
        . # . . #
        . # . # .
        . # . # .
        . # . # .
        # . . . #
        `)
    basic.showLeds(`
        . . . # #
        # . # . .
        # . # . .
        # . # . .
        . . . # #
        `)
    basic.showLeds(`
        . . # # .
        . # . . .
        . # . . .
        . # . . .
        . . # # .
        `)
    basic.showLeds(`
        . # # . #
        # . . . #
        # . . . #
        # . . . #
        . # # . #
        `)
    basic.showLeds(`
        # # . # .
        . . . # .
        . . . # #
        . . . # .
        # # . # .
        `)
    basic.showLeds(`
        # . # . #
        . . # . #
        . . # # #
        . . # . #
        # . # . #
        `)
    basic.showLeds(`
        . # . # .
        . # . # .
        . # # # .
        . # . # .
        . # . # .
        `)
    basic.showLeds(`
        # . # . #
        # . # . #
        # # # . #
        # . # . #
        # . # . #
        `)
    basic.showLeds(`
        . # . # #
        . # . # .
        # # . # #
        . # . # .
        . # . # #
        `)
    basic.showLeds(`
        # . # # #
        # . # . .
        # . # # .
        # . # . .
        # . # # #
        `)
    basic.showLeds(`
        . # # # .
        . # . . .
        . # # . .
        . # . . .
        . # # # .
        `)
    basic.showLeds(`
        # # # . .
        # . . . .
        # # . . .
        # . . . .
        # # # . .
        `)
    basic.showLeds(`
        # # . . .
        . . . . .
        # . . . .
        . . . . .
        # # . . .
        `)
    basic.pause(500)
    basic.showLeds(`
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        `)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
