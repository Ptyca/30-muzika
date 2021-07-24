class Artist {

    constructor(name, curr) {
        this.list = [];
        this.name = name;
        this.curr = curr;
    }

    intro() {
        console.log(`Hi, my name is ${this.name} and I am a musician!`);
    }
    songPrice(price) {
        this.list.price = price / 100;
        console.log(`${this.name}'s price per song is ${(this.list.price).toFixed(2)} ${this.curr}`);
        return price;
    }
    addSong(song) {
        this.list.push({
            song: song,
            repeat: 0,
            price: 0,
            profit: 0,
        });

        console.log(this.list);
    }
    playlist() {
        console.log(`${this.name}'s playlist:`);
        console.log('========================');
        for (let i = 0; i < this.list.length; i++) {
            const song = this.list[i];
            console.log(`${i + 1}. ${song.song} (${song.repeat}) `);
        }
        console.log('---------------------');
    }
    playSong(index) {
        //console.log(index);
        let song = this.list[index].song;
        for (let i = 0; i < this.list.length; i++) {
            const song = this.list[i];
            if (i === index) {
                song.repeat++;
                this.list[index].profit += this.list.price;
            }

            console.log(this.list[index].profit);
        }

        console.log(`Playing song: ${song}.`);
    }
    fortune() {
        let profit = 0;
        for (let i = 0; i < this.list.length; i++) {
            profit += this.list[i].profit;
        }
        console.log(`Total lifetime wealth of ${this.name} is ${profit} ${this.curr} right now!`);
    }
}




module.exports = Artist;