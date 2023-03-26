input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    V += 100
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    V += -100
})
let strip = neopixel.create(DigitalPin.P1, 8, NeoPixelMode.RGB)
strip.setBrightness(64)
let V = 100
while (true) {
    for (let Index = 0; Index <= 7; Index++) {
        strip.setPixelColor(Index, neopixel.colors(NeoPixelColors.Red))
        strip.show()
        basic.pause(V)
        strip.setPixelColor(Index, neopixel.colors(NeoPixelColors.Black))
        strip.show()
    }
    for (let Index = 0; Index <= 7; Index++) {
        strip.setPixelColor(7 - Index, neopixel.colors(NeoPixelColors.Violet))
        strip.show()
        basic.pause(V)
        strip.setPixelColor(7 - Index, neopixel.colors(NeoPixelColors.Black))
        strip.show()
    }
}
