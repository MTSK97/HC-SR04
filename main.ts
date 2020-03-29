let D = 0
let myCounter = sevenseg.createCounter(SegmentStyle.Thick, SegmentScale.Full, 3)
forever(function () {
    pins.P0.analogWrite(0)
    pins.P0.analogSetPeriod(2)
    pins.P0.analogWrite(1023)
    pins.P0.analogSetPeriod(10)
    pins.P0.analogWrite(0)
    D = Math.idiv(pins.P1.pulseIn(PulseValue.High), 58)
    myCounter.count = D
})
