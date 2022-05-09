
class Movie {
        constructor(title, rating) {

                this.title = title;

                this.rating = rating;

                this.validate = function () {

                        let validnum = parseInt(this.rating);

                        if (title && (validnum >= 1 && validnum <= 5)) {
                                return true;
                        }
                        else { 
                                return false;
                        }
                };
              
                this.GetAll = function () {
                        return this.title + " with rating: " + this.rating;
                };
        }
}