const inquirer = require('inquirer')

module.exports = (songs) => inquirer.prompt([{
  type: 'list',
  name: 'song',
  messgae: `共有${songs.length}首歌,按下回车键播放`,
  choices: songs.map((song, index) => `${index+1}.${song.name}`)
}])