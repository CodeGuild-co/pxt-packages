/**
 * Provides access to playing music using ABC notation
 */
//% color=#E01818 weight=100
namespace Song {

    //% blockId=song_abc_music
    //% block="play|notes %musicString|at tempo %musicTempo|with standard note length 1 / %standardLength |in key %keySignature"
    export function abcMusic(musicString: string, musicTempo: number = 40, standardLength: number = 4, keySignature: string): void {
        music.setTempo(musicTempo)

        let currentLength = standardLength

        for (let item = 0; item < musicString.length; item++) {
            currentLength = standardLength
            if (musicString[item + 1] == '2') {
                currentLength /= 2
            } else if (musicString[item + 1] == '4') {
                currentLength /= 4
            } else if (musicString[item + 1] == '/') {
                currentLength *= 2
            }
            if (musicString[item] == '2' || musicString[item] == '4' || musicString[item] == '/') {
                basic.pause(0)
            } else if (musicString[item] == 'C') {
                if (keySignature == 'D') {
                    music.playTone(Note.CSharp4, music.beat(currentLength))
                } else {
                    music.playTone(Note.C4, music.beat(currentLength))
                }
            } else if (musicString[item] == 'D') {
                music.playTone(Note.D4, music.beat(currentLength))
            } else if (musicString[item] == 'E') {
                music.playTone(Note.E4, music.beat(currentLength))
            } else if (musicString[item] == 'F') {
                if (keySignature == 'D' || keySignature == 'G') {
                    music.playTone(Note.FSharp4, music.beat(currentLength))
                } else {
                    music.playTone(Note.F4, music.beat(currentLength))
                }
            } else if (musicString[item] == 'G') {
                music.playTone(Note.G4, music.beat(currentLength))
            } else if (musicString[item] == 'A') {
                music.playTone(Note.A4, music.beat(currentLength))
            } else if (musicString[item] == 'B') {
                music.playTone(Note.B4, music.beat(currentLength))
            } else if (musicString[item] == 'c') {
                if (keySignature == 'D') {
                    music.playTone(Note.CSharp5, music.beat(currentLength))
                } else {
                    music.playTone(Note.C5, music.beat(currentLength))
                }
            } else if (musicString[item] == 'd') {
                music.playTone(Note.D5, music.beat(currentLength))
            } else if (musicString[item] == 'e') {
                music.playTone(Note.E5, music.beat(currentLength))
            } else if (musicString[item] == 'f') {
                if (keySignature == 'D' || keySignature == 'G') {
                    music.playTone(Note.FSharp5, music.beat(currentLength))
                } else {
                    music.playTone(Note.F5, music.beat(currentLength))
                }
            } else if (musicString[item] == 'g') {
                music.playTone(Note.G5, music.beat(currentLength))
            } else if (musicString[item] == 'a') {
                music.playTone(Note.A5, music.beat(currentLength))
            } else if (musicString[item] == 'b') {
                music.playTone(Note.B5, music.beat(currentLength))
            }

            if (musicString[item + 1] != '/' && musicString[item] != '/') {
                basic.pause(25)
            }
        }
    }
}