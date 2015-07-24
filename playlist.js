// var Song = require('./song');

// var Playlist = function(){
// };

// Playlist.prototype.isEmpty = function () {
// };


// Playlist.prototype.forNumber = function () {

// };

// module.exports = Playlist;

// make songs for playlist
var Song = function(title,artist,length){
  this.title = title;
  this.artist = artist;
  this.length = lenght;
};
// songs have titles artist and length

// playlist needs a name
var Playlist = function(name){
  this.name = name;
  this.songs = [];
  this.current.song = null;
};

Playlist.prototype.addSong = function(song){
  this.songs.push(song);

};

Playlist.prototype.getArtists = function(){
  var artists = [];
  for(i = 0; i < this.songs.length; i++){
    artists.push((this.song[i]).artist);
  }

};


// remove songs
// play/next/stop
// shuffle songs


