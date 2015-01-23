/**
 * Created by andrew on 23/01/15.
 */

Meteor.publish('books', function() {
    return Books.find();
});

Meteor.publish('utilisateurs', function() {
    return Utilisateurs.find();
});

Meteor.publish('messages', function() {
    return Messages.find();
});