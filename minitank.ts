
 //% color="#0D47A1" icon="\uf1b9" block="Mini Tank"
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
    //% tempo.shadow=math_number_minmax    
    //% tempo.min=0 tempo.max=300 tempo.defl=200
    //% weight=100
    export function motor(
        motor: Motor,
        richtung: Richtung,
        tempo: number
    ): void {

        if (tempo < 0) {
            tempo = 0
        }

        if (tempo > 300) {
            tempo = 300
        }

        // Richtung für beide Motoren invertiert
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
