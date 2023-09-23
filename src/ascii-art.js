import chalk from "chalk"
const name = `
+-+ +-+ +-+ +-+ +-+ +-+ +-+ +-+
|B| |u| |i| |l| |d| |.| |J| |S|
+-+ +-+ +-+ +-+ +-+ +-+ +-+ +-+
`
console.log(chalk.white.bgBlackBright(name))
console.log(chalk.blueBright("list: To list all the available commands."))
console.log(chalk.redBright("clean: To delete all the *.min.js & *.min.js.map files."))
console.log(chalk.greenBright("minifify: To generate minified code & source-maps."))
console.log(chalk.yellowBright("minifify-and-run: To execute above minifify command & run minified *.min.js file."))
console.log(chalk.cyanBright("start: To run *.min.js file."))