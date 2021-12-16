import Service from '@ember/service';
import Ember from 'ember';

export default Service.extend({
    client:undefined,
    urlStateService: Ember.inject.service(),
    regionLocatorService: Ember.inject.service(),
    init: function(){
        this.setupSDK();
    },
    setupSDK: function(){
        let state = this.get('urlStateService').cachedState();
        let urlParams = new URLSearchParams(state);
        let region = this.get('regionLocatorService').getRegion(urlParams.get('region'));
        let client = new window.purecloud.apps.ClientApp({
            pcEnvironment: `${region.domain}.${region.extension}`
        });
        this.set('client', client);
    },
    navigateToGroup: function(groupId){
        this.get('client').directory.showGroup(groupId);
    }
});
