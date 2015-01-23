if (Books.find().count() === 0) {
    Books.insert({
        title: 'Introducing Telescope',
        author: 'Sacha Greif',
        url: 'http://sachagreif.com/introducing-telescope/'
    });

    Books.insert({
        title: 'Meteor',
        author: 'Tom Coleman',
        url: 'http://meteor.com'
    });

    Books.insert({
        title: 'The Meteor Book',
        author: 'Tom Coleman',
        url: 'http://themeteorbook.com'
    });
}



if (Utilisateurs.find().count() === 0) {
    Utilisateurs.insert({name: 'Andy'});
    Utilisateurs.insert({name: 'Mory'});
    Utilisateurs.insert({name: 'John'});

}


if (Messages.find().count() === 0) {
    Messages.insert({textOfMessage: 'textOfMessage01'});
    Messages.insert({textOfMessage: 'textOfMessage02'});
    Messages.insert({textOfMessage: 'textOfMessage03'});

}