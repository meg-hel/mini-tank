// Mini Tank – Test unserer eigenen Motorblöcke

// Beim Start beide Motoren stoppen
miniTank.anhalten(miniTank.Motor.Beide)

// Taste A: Beide Motoren vorwärts
input.onButtonPressed(Button.A, function () {
    miniTank.motor(
        miniTank.Motor.Beide,
        miniTank.Richtung.Vorwaerts,
        200
    )
})

// Taste B: Beide Motoren stoppen
input.onButtonPressed(Button.B, function () {
    miniTank.anhalten(miniTank.Motor.Beide)
})