input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    CreateMan()
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Asleep)
    led.setDisplayMode(DisplayMode.BlackAndWhite)
})
function CreateMan () {
    basic.showIcon(IconNames.Ghost)
    music.playMelody("C5 G C5 G C5 B A G ", 200)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    music.playMelody("C C5 G B F C C5 G ", 244)
    music.playMelody("C5 B A - - - - - ", 244)
    Is_Playing_Game = 1
    Hero = game.createSprite(2, 2)
    Food = game.createSprite(4, 4)
    ghost = game.createSprite(0, 0)
    ghost.change(LedSpriteProperty.Blink, 100)
    ghost.set(LedSpriteProperty.Brightness, 10)
    Food.set(LedSpriteProperty.Brightness, 5)
    while (true) {
        basic.pause(400)
        if (ghost.get(LedSpriteProperty.X) < Hero.get(LedSpriteProperty.X)) {
            ghost.change(LedSpriteProperty.X, 1)
        } else if (ghost.get(LedSpriteProperty.X) > Hero.get(LedSpriteProperty.X)) {
            ghost.change(LedSpriteProperty.X, -1)
        } else if (ghost.get(LedSpriteProperty.Y) < Hero.get(LedSpriteProperty.Y)) {
            ghost.change(LedSpriteProperty.Y, 1)
        } else if (ghost.get(LedSpriteProperty.Y) > Hero.get(LedSpriteProperty.Y)) {
            ghost.change(LedSpriteProperty.Y, -1)
        }
        if (input.acceleration(Dimension.X) > 200) {
            Hero.change(LedSpriteProperty.X, 1)
        } else if (input.acceleration(Dimension.X) < -200) {
            Hero.change(LedSpriteProperty.X, -1)
        }
        if (input.acceleration(Dimension.Y) > 200) {
            Hero.change(LedSpriteProperty.Y, 1)
        } else if (input.acceleration(Dimension.Y) < -200) {
            Hero.change(LedSpriteProperty.Y, -1)
        }
        if (Hero.isTouching(Food)) {
            game.addScore(1)
            Food.set(LedSpriteProperty.X, randint(0, 5))
            Food.set(LedSpriteProperty.Y, randint(0, 5))
            if (Food.get(LedSpriteProperty.X) < 2 && Food.get(LedSpriteProperty.Y) < 2) {
                ghost.set(LedSpriteProperty.X, 4)
                ghost.set(LedSpriteProperty.Y, 4)
            } else if (Food.get(LedSpriteProperty.X) > 2 && Food.get(LedSpriteProperty.Y) < 2) {
                ghost.set(LedSpriteProperty.X, 0)
                ghost.set(LedSpriteProperty.Y, 4)
            } else if (Food.get(LedSpriteProperty.X) < 2 && Food.get(LedSpriteProperty.Y) > 2) {
                ghost.set(LedSpriteProperty.X, 4)
                ghost.set(LedSpriteProperty.Y, 0)
            } else {
                ghost.set(LedSpriteProperty.X, 0)
                ghost.set(LedSpriteProperty.Y, 0)
            }
        }
        if (Hero.isTouching(ghost)) {
            game.gameOver()
        }
    }
    ghost.set(LedSpriteProperty.X, 4)
}
input.onPinPressed(TouchPin.P1, function () {
	
})
input.onGesture(Gesture.Shake, function () {
    if (Is_Playing_Game == 1) {
    	
    } else {
        basic.showLeds(`
            . . . . .
            # # # # #
            . . . . .
            . # . # .
            # . # . #
            `)
        music.playMelody("C5 C5 C5 C5 C5 C5 C5 C5 ", 244)
    }
})
let ghost: game.LedSprite = null
let Food: game.LedSprite = null
let Hero: game.LedSprite = null
let Is_Playing_Game = 0
koi.koi_speechcmd_addmodel("Hey Boxer")
Is_Playing_Game = 0
basic.showLeds(`
    . . . . .
    . . . . .
    # # # # #
    . . . . .
    . . . . .
    `)
music.playSoundEffect(music.createSoundEffect(WaveShape.Sawtooth, 1, 5000, 255, 255, 5092, SoundExpressionEffect.Vibrato, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
music.playSoundEffect(music.builtinSoundEffect(soundExpression.yawn), SoundExpressionPlayMode.UntilDone)
Kitronik_VIEWTEXT32.showString("Boxing 32")
if (makerbit.isLcdConnected()) {
    makerbit.showStringOnLcd1602("Boxing 32", makerbit.position1602(LcdPosition1602.Pos1), 16)
}
basic.showLeds(`
    . . . . .
    . . # . .
    # # . # #
    . . . . .
    . . . . .
    `)
basic.pause(5)
basic.showLeds(`
    . . # . .
    . # . # .
    # . . . #
    . . . . .
    . . . . .
    `)
basic.pause(5)
basic.showLeds(`
    # # . # #
    # # . # #
    # # . # #
    # # . # #
    # # . # #
    `)
koi.koi_cloud_tts("hello")
koi.koi_cloud_tts("My Name is Boxing 32")
koi.koi_cloud_tts("but you may call me boxer")
loops.everyInterval(10000, function () {
    if (Is_Playing_Game == 1) {
    	
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            # # . # #
            # # . # #
            # # . # #
            # # . # #
            # # . # #
            `)
    }
})
basic.forever(function () {
	
})
