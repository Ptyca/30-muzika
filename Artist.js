
class Artist {
    constructor(name, currency) {
        this.list = [];
        this.name = name;
        this.currency = currency;
    }
    intro() {
        console.log(`Hi, my name is ${this.name} and I am a musician!`);
    }
    songPrice(priceInCents) {
        const price = (priceInCents / 100).toFixed(2);
        console.log(`Raimonda's price per song is ${price} ${this.currency}`)
    }
    addSong(songName) {
        this.list.push({
            songName,
            repeat: 0,
            price: 0,
            profit: 0,
        })
        console.log(this.list);
    }
    playlist() {
        console.log(`${this.name}'s playlist:`);
        console.log(`====================`);
        let count = 0;
        for (let i = 0; i < this.list.length; i++) {
            const item = this.list[i];
            ++count;
            console.log(`${count}. ${item.songName} (0)`);

        }
    }
    playSong(index) {
        let song = this.list[index].songName;
        for (let i = 0; i < this.list.length; i++) {

        }
    }



module.exports = Artist;