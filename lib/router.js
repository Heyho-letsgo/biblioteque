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
});