/**
 * Created by andrew on 23/01/15.
 */


Router.configure({
    layoutTemplate: 'layout'
});

Router.map(function() {
    this.route('home', {path: '/'});
    this.route('booksList', {path: '/booksList'});
    this.route('utilisateursList', {path: '/utilisateursList'});

    this.route('utilisateurPage', {
        path: '/utilisateurs/:_id',
        data: function() { return Utilisateurs.findOne(this.params._id); }
    });

    this.route('utilisateurNew', {
        path: 'utilisateurNew'
    });


});