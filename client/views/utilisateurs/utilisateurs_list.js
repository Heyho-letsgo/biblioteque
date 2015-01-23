/**
 * Created by andrew on 23/01/15.
 */

Template.utilisateursList.helpers({
    utilisateurs: function(){
        return Utilisateurs.find({}, {sort: { name: -1 }})
    },
    utilisateursSort: function(){
        return Utilisateurs.find({}, {sort: { name: 1 }})
    }


});