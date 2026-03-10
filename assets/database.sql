
/* usuarios */

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    password VARCHAR(255)
);


/* musicas */

CREATE TABLE musics (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    artist VARCHAR(100),
    file VARCHAR(255),
    image VARCHAR(255)
);


/* playlists */

CREATE TABLE playlists (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    user_id INT,

    FOREIGN KEY (user_id) REFERENCES users(id)
);


/* conexão playlist + musicas */

CREATE TABLE playlist_musics (
    id INT AUTO_INCREMENT PRIMARY KEY,
    playlist_id INT,
    music_id INT,

    FOREIGN KEY (playlist_id) REFERENCES playlists(id),
    FOREIGN KEY (music_id) REFERENCES musics(id)
);