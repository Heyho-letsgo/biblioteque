/**
 * Created by andrew on 23/01/15.
 */
Template.utilisateurNew.events({
    utilisateur: function(){
        //return Utilisateurs.findOne(this.params._id);
    }
});


Template.utilisateurNew.events({
    'submit form': function(e) {
        e.preventDefault();

        var utilisateur = {
            name: $(e.target).find('[name=name]').val()
        }
        utilisateur._id = Utilisateurs.insert(utilisateur);
        Router.go('utilisateurPage', utilisateur);
    }
});