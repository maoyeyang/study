const Event = require('events')
const request = require('./lib/request')
const Player = require('player')
const ev = new Event()

;
['search', 'choose'].forEach(evName => {
  const fn = require(`./lib/${evName}`)
  ev.on(evName, async function (...args) {
    const res = await fn(...args)
    ev.emit('handle', evName, res, ...args)
    // console.log(res);
  })
});
ev.on('afterSearch', (res, keyWord) => {
  if (!res.result || !res.result.songs) {
    console.log(`没有搜到${keyWord}的信息`);
    return false
  }
  const songs = res.result.songs
  ev.emit('choose', songs)
})
ev.on('afterChoose', async (selected, songs) => {
  const selectSong = songs.find((song, i) => {
    return selected.song == `${i}.${song.name}`
  })
  if (selectSong) {
    const {
      id
    } = selectSong
    let url = 'http://neteasecloudmusicapi.zhaoboy.com/song/url?id=' + id
    const songDetail = await request(url)
    const {
      url: songUrl
    } = songDetail.data[0]
    const player = new Player(songUrl)
    player.play()
  }
})
ev.on('handle', (key, res, ...args) => {
  switch (key) {
    case 'search':
      return ev.emit('afterSearch', res, args[0])
    case 'choose':
      return ev.emit('afterChoose', res, args[0])
  }
})

function main() {
  const argv = process.argv.slice(2)
  let keyword = argv[0]
  ev.emit('search', keyword)
}
main()