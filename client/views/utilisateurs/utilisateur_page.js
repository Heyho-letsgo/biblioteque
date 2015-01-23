/**
 * Created by andrew on 23/01/15.
 */
Template.utilisateurPage.helpers({
    utilisateur: function(){
        return Utilisateurs.findOne(this.params._id);
    }
});