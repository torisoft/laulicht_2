strip = neopixel.create(DigitalPin.P1, 8, NeoPixelMode.RGB)
while True:
    x = input.acceleration(Dimension.X) / 2
    y = input.acceleration(Dimension.Y) / 2
    z = input.acceleration(Dimension.Z) / 2
    strip.shift(1)
    strip.set_pixel_color(0, neopixel.rgb(x, y, -z))
    strip.show()
    basic.pause(100)