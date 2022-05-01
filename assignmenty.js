class FavoriteBooks {
    constructor(name, author, comment){
        this.name = name;
        this.author = author;
        this.comment = comment;
    }

}

class Genre {
    constructor(name){
        this.name = name;
        this.favoriteBooks = [];
    }

    addFavoriteBooks(FavoriteBooks){
        if (FavoriteBooks instanceof FavoriteBooks){
            this.favoriteBooks.push(FavoriteBooks)
        } else {
            throw new Error(`You can only add an instance of FavoriteBooks.  Argument is not a FavoriteBooks: ${FavoriteBooks}`);
        }
    }
    
}

class Menu {
    constructor() {
        this.genres = [];
        this.selectedGenre = null;
    }
    
    start(){
        let selection = this.showMainMenuOptions();
        while(selection != 0){
            switch (selection){
                case '1': 
                this.createGenre();
                break;
                case '2': 
                this.viewGenre();
                break;
                case '3': 
                this.deleteGenre();
                break;
                case '4': 
                this.displayGenres();
                break;
                default:
                     selection = 0;
            }
            selection = this.showMainMenuOptions();
        }

        alert('Until we meet again!');
    }
    showMainMenuOptions() {
        return prompt(`
        0) Exit
        1) Create a new genre 
        2) Edit a genre
        3) Delete a genre
        4) Display all genres`);
    }
    
    showGenreMenuOptions(genreInfo){
        return prompt(`
        0) Back
        1) Add a favorite book
        2) Delete a favorite book
        -------------------
        ${genreInfo}
        `);
    }

    
    displayGenres(){
        let genreString = '';
        for (let i= 0; i < this.genres.length; i++){
            genreString += i + ') ' + this.genres[i].name + '\n';
        }
        alert(genreString);
    }
    
    createGenre(){
        let name = prompt('Be pleased to provide me a new genre name sir or madam');
        this.genres.push(new Genre (name));
    }

    viewGenre(){
        let index = prompt('Which index item would you like to access?');
        if (index > -1 && index < this.genres.length){
            this.selectedGenre = this.genres[index];
            let description = 'Genre Name: ' +  this.selectedGenre.name + '\n';

            for (let i=0; i < this.selectedGenre.favoriteBooks.length; i++){
                description += i + 
                `)  
     -Title:   ${this.selectedGenre.favoriteBooks[i].name}   
     -Author:   ${this.selectedGenre.favoriteBooks[i].author}
     -Comment:   ${this.selectedGenre.favoriteBooks[i].comment} \n`;
     
            }
            

            
            let selection = this.showGenreMenuOptions(description)
            switch(selection){
                case '1': 
                    this.createFavoriteBooks();
                break;
                case '2':
                    this.deleteFavoriteBooks();
                break;
            }
        }
    }

    deleteGenre() {
        let index = prompt('Enter the index of the genre you wish to delete:');
        if (index > -1 && index < this.genres.length){
            this.genres.splice(index, 1);
        }
    }

    createFavoriteBooks(){
        let name = prompt('Enter name for new favorite book:');
        let author = prompt('Enter author for new favorite book:');
        let comment = prompt('Enter comment upon book')
        this.selectedGenre.favoriteBooks.push(new FavoriteBooks(name, author, comment));
    }

    deleteFavoriteBooks(){
        let index = prompt('Enter the index of the FavoriteBooks you wish to delete:');
        if (index > -1 && index < this.selectedGenre.favoriteBooks.length) {
            this.selectedGenre.favoriteBooks.splice(index, 1);
        }
    }
}


let menu = new Menu();
menu.start();