let zvuk = 0
let svetlo = 0
let strip = neopixel.create(DigitalPin.P1, 1, NeoPixelMode.RGB)
OLED.init(128, 64)
basic.forever(function () {
    OLED.clear()
    svetlo = smarthome.ReadLightIntensity(AnalogPin.P2)
    zvuk = smarthome.ReadNoise(AnalogPin.P3)
    OLED.writeString("svetlo: ")
    OLED.writeNum(svetlo)
    OLED.newLine()
    OLED.writeString("zvuk: ")
    OLED.writeNum(zvuk)
    if (svetlo < 5) {
        if (zvuk > 90) {
            strip.showColor(neopixel.colors(NeoPixelColors.White))
            basic.pause(5000)
            strip.showColor(neopixel.colors(NeoPixelColors.Black))
        }
    }
})
