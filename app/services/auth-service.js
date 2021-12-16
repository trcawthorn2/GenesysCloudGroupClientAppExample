import Service from '@ember/service';
import Ember from 'ember';

function _convertUrl(url, clientId){
    return url+ `/oauth/authorize?client_id=${clientId}&response_type=token&redirect_uri=${window.location.origin}${window.location.pathname}`
}

export default Service.extend({
    restClientService: Ember.inject.service(),
    regionLocatorService: Ember.inject.service(),
    urlStateService: Ember.inject.service(),
    authToken: undefined,
    init(){
        let urlParams = new URLSearchParams(window.location.hash.substr(1));
        let token = urlParams.get('access_token');
        if (!token) {
            urlParams = new URLSearchParams(window.location.search);
            this.get('urlStateService').storeState();
            let clientId = urlParams.get('clientId');
            let regionUrl = this.get('regionLocatorService').getRegionAuthUrl(urlParams.get('region'));
            var url = _convertUrl(regionUrl,clientId);
            console.log('auth url: ', url);
            window.location = url;
            
        } else {
            console.log('TOKEN FOUND');
            this.authToken = token;
        }
    }
});
