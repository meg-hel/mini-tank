
 //% color="#5269F4" icon="\uf1b9" block="Mini Tank"
namespace miniTank {

    export enum Motor {
        //% block="links"
        Links = 0,
        //% block="rechts"
        Rechts = 1,
        //% block="beide"
        Beide = 2
    }

    export enum Richtung {
        //% block="vorwärts"
        Vorwaerts = 0,
        //% block="rückwärts"
        Rueckwaerts = 1
    }

    /**
     * Einen oder beide Motoren steuern.
     * Tempo 0 bedeutet Motor aus.
     */
    //% blockId=mini_tank_motor
    //% block="Motor %motor Richtung %richtung Tempo %tempo"
    //% tempo.min=0 tempo.max=1023 tempo.defl=200
    //% weight=100
    export function motor(
        motor: Motor,
        richtung: Richtung,
        tempo: number
    ): void {

        if (tempo < 0) {
            tempo = 0
        }

        if (tempo > 1023) {
            tempo = 1023
        }

        let richtungsSignal = richtung == Richtung.Vorwaerts ? 1 : 0

        // Motor A (links)
        if (motor == Motor.Links || motor == Motor.Beide) {
            pins.analogWritePin(AnalogPin.P1, 0)
            pins.digitalWritePin(DigitalPin.P0, richtungsSignal)
            pins.analogWritePin(AnalogPin.P1, tempo)
        }

        // Motor B (rechts)
        if (motor == Motor.Rechts || motor == Motor.Beide) {
            pins.analogWritePin(AnalogPin.P3, 0)
            pins.digitalWritePin(DigitalPin.P2, richtungsSignal)
            pins.analogWritePin(AnalogPin.P3, tempo)
        }
    }
}
