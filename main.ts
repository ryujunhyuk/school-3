radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        basic.showNumber(Math.abs(radio.receivedPacket(RadioPacketProperty.SignalStrength)))
        Distance = Math.abs(radio.receivedPacket(RadioPacketProperty.SignalStrength))
    }
})
let Distance = 0
radio.setGroup(77)
radio.setTransmitPower(7)
basic.forever(function () {
    radio.sendNumber(1)
})
