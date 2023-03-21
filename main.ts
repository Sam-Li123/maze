scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairWest, function (sprite, location) {
    info.changeScoreBy(100)
    game.gameOver(true)
})
info.onCountdownEnd(function () {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    info.setScore(50)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    info.setScore(100)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    info.setScore(25)
})
game.showLongText("After the hero gets to the castle, he goes up the stairs and gets in a maze.", DialogLayout.Bottom)
game.showLongText("He looks at the map for the right path. Will he be able to get to the next floor?", DialogLayout.Bottom)
game.showLongText("Hint: Do not cheat by going through walls", DialogLayout.Bottom)
info.setScore(0)
let mySprite = sprites.create(assets.image`Hero`, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setTilemap(tilemap`level_1`)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairLadder)
scene.cameraFollowSprite(mySprite)
info.startCountdown(15)
