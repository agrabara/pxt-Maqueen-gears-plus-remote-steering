function wyswietl(num: number) {
    led.plotBarGraph(
        num,
        250
    )
}
radio.onReceivedString(function (receivedString) {
    if (receivedString == "A") {
        prętkość = prętkość + 10
        if (prętkość > 250) {
            prętkość = 250
        }
        wyswietl(prętkość)
    } else if (receivedString == "B") {
        prętkość = prętkość - 10
        if (prętkość < 50) {
            prętkość = 50
        }
        wyswietl(prętkość)
    } else if (receivedString == "C") {
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, prętkość)
        for (let index = 0; index < 5; index++) {
            music.playTone(880, music.beat(BeatFraction.Sixteenth))
            basic.pause(200)
            music.playTone(880, music.beat(BeatFraction.Sixteenth))
        }
        maqueen.motorStop(maqueen.Motors.All)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    } else if (receivedString == "D") {
        music.playTone(415, music.beat(BeatFraction.Whole))
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 74)
        basic.pause(1000)
        maqueen.motorStop(maqueen.Motors.All)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    } else if (receivedString == "E") {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, prętkość)
        basic.pause(1000)
        maqueen.motorStop(maqueen.Motors.All)
    } else if (receivedString == "F") {
        music.playTone(277, music.beat(BeatFraction.Whole))
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 74)
        basic.pause(1000)
        maqueen.motorStop(maqueen.Motors.All)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
    } else if (receivedString == "P") {
        music.playTone(392, music.beat(BeatFraction.Whole))
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.playTone(587, music.beat(BeatFraction.Whole))
        music.playTone(147, music.beat(BeatFraction.Whole))
        music.playTone(988, music.beat(BeatFraction.Whole))
        music.playTone(698, music.beat(BeatFraction.Whole))
        music.playTone(880, music.beat(BeatFraction.Whole))
        music.playTone(659, music.beat(BeatFraction.Whole))
        music.playTone(784, music.beat(BeatFraction.Whole))
        music.playTone(988, music.beat(BeatFraction.Whole))
        music.playTone(494, music.beat(BeatFraction.Whole))
        music.playTone(659, music.beat(BeatFraction.Whole))
        music.playTone(698, music.beat(BeatFraction.Whole))
        music.playTone(494, music.beat(BeatFraction.Whole))
        music.playTone(698, music.beat(BeatFraction.Whole))
        music.playTone(784, music.beat(BeatFraction.Whole))
    } else {

    }
})
WSJoyStick.onKey(KEY.A, function () {
    radio.sendString("A")
})
WSJoyStick.onKey(KEY.P, function () {
    radio.sendString("P")
})
WSJoyStick.onKey(KEY.B, function () {
    radio.sendString("B")
})
WSJoyStick.onKey(KEY.F, function () {
    radio.sendString("F")
})
WSJoyStick.onKey(KEY.E, function () {
    radio.sendString("E")
})
WSJoyStick.onKey(KEY.D, function () {
    radio.sendString("D")
})
WSJoyStick.onKey(KEY.C, function () {
    radio.sendString("C")
})
let prętkość = 0
WSJoyStick.JoyStickInit()
radio.setGroup(67)
basic.showIcon(IconNames.Heart)
prętkość = 50
basic.forever(function () {

})
 