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
     * Einen oder beide Motoren steuern
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

        // Motor A (vorläufig links)
        if (motor == Motor.Links || motor == Motor.Beide) {
            pins.analogWritePin(AnalogPin.P1, 0)
            pins.digitalWritePin(DigitalPin.P0, richtung)
            pins.analogWritePin(AnalogPin.P1, tempo)
        }

        // Motor B (vorläufig rechts)
        if (motor == Motor.Rechts || motor == Motor.Beide) {
            pins.analogWritePin(AnalogPin.P3, 0)
            pins.digitalWritePin(DigitalPin.P2, richtung)
            pins.analogWritePin(AnalogPin.P3, tempo)
        }
    }

    /**
     * Einen oder beide Motoren anhalten
     */
    //% blockId=mini_tank_stop
    //% block="Motor %motor anhalten"
    //% weight=90
    export function anhalten(motor: Motor): void {

        if (motor == Motor.Links || motor == Motor.Beide) {
            pins.analogWritePin(AnalogPin.P1, 0)
        }

        if (motor == Motor.Rechts || motor == Motor.Beide) {
            pins.analogWritePin(AnalogPin.P3, 0)
        }
    }
}