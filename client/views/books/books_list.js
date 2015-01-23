/**
 * Created by andrew on 23/01/15.
 */

Template.booksList.helpers({
    books: function(){
        return Books.find();
    }
});