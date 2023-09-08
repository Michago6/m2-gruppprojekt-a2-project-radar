radio.onReceivedNumber(function (receivedNumber) {
    if (xMaxReceived == 1) {
        xMax = radio.receivedPacket(RadioPacketProperty.SignalStrength)
        xMaxReceived = 0
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(0 - xMax - 45)
    basic.pause(5000)
    basic.showNumber(2)
})
let xMax = 0
let xMaxReceived = 0
basic.showNumber(2)
xMaxReceived = 0
basic.forever(function () {
    if (xMaxReceived == 0) {
        radio.setGroup(115)
        radio.sendNumber(xMax)
        radio.setGroup(118)
        xMaxReceived = 1
    }
    basic.pause(3000)
})
