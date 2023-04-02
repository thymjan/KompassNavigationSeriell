/**
 * Das ist ein Hinweis
 */
function getDeviation (Zielrichtung: number) {
    IST = input.compassHeading()
    Kurs = Zielrichtung
    IST += Kurs
    // nur Zahlen zwischen 0 und 359 ausgeben
    if (IST > 359) {
        IST += -360
    } else if (IST < 0) {
        IST += 360
    }
    Abweichung = IST
    // Abweichung = [-180...180]
    if (Abweichung > 180) {
        Abweichung += -360
    }
}
function InfoAusgabe () {
    basic.showCompass(25)
    basic.setLedColor(0xff0000)
    serial.writeLine("" + (Abweichung))
    basic.setLedColor(0x000000)
}
function Ansteuern (Zielrichtung: number) {
    getDeviation(Zielrichtung)
    InfoAusgabe()
    while (Math.abs(Abweichung) > 5) {
        getDeviation(Zielrichtung)
        InfoAusgabe()
    }
    basic.setLedColor(0x0000ff)
    basic.pause(1000)
    basic.setLedColor(0x000000)
}
let Abweichung = 0
let Kurs = 0
let IST = 0
IST = 0
let NORTH = 0
let EAST = -90
let SOUTH = -180
let WEST = -270
Kurs = 0
Abweichung = 0
serial.redirectToUSB()
serial.writeLine("..")
serial.writeLine("Los gehts!")
serial.writeLine("Erstmal bitte Kompass kalibrieren!")
// mach das immer
basic.forever(function () {
    // Hier gewünschten Kurs einfügen
    Ansteuern(SOUTH)
    // Hier gewünschten Kurs einfügen
    Ansteuern(WEST)
    // Hier gewünschten Kurs einfügen
    Ansteuern(EAST)
    // Hier gewünschten Kurs einfügen
    Ansteuern(NORTH)
})
