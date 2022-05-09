
let movies = [];


function addmovie(){
        
        let title = document.getElementById('title').value;
        
        let rating = document.getElementById('rating').value;
        
        let movie = new Movie(title, rating);
       
        if(movie.validate()){
               
                movies.push(movie);
        }
        else{
               alert("data was not good")
        }
        
        document.getElementById('title').value="";
        document.getElementById('rating').value="";
}


function displaymovies(){
        let movielist = "Movies with rating: <ul>";
        
        for(let i=0;i<movies.length;i++){
                movielist += "<li>"+movies[i].GetAll()+"</li>";
        }
        
        movielist += "</ul>";
        
        document.getElementById('display').innerHTML = movielist;
}