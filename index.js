var rainbow = {
    "reset": "\x1b[0m",
    "red": "\x1b[31m",
    "green": "\x1b[32m",
    "yellow": "\x1b[33m",
    "blue": "\x1b[34m",
    "magenta": "\x1b[35m",
    "cyan": "\x1b[36m",
    log(string, fixedPattern = true){
        var concatStr = "";
        var colorNames = ["red", "green", "yellow", "blue", "magenta", "cyan"];
        for (let i = 0; i < string.length; i++) {
            if (fixedPattern) {
                var color = rainbow[colorNames[i % colorNames.length]];
            } else {
                var rnd = Math.floor(Math.random() * colorNames.length);
                var color = rainbow[colorNames[rnd]];
            }

            concatStr += color + string[i];
        }
        console.log(concatStr + rainbow.reset);
    }
}
module.exports = rainbow;