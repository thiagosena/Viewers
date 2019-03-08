import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { OHIF } from 'meteor/ohif:core';
import 'meteor/ohif:viewerbase';
import { viewportUtils } from '../../../lib/viewportUtils';

Template.colormapChooser.onRendered(() => {
    const instance = Template.instance();

});

Template.colormapChooser.events({

    'click .colormapChooser'(event, instance) {
        console.log('clicou!!');
        const $currentCell = instance.$(event.currentTarget);
        

        const $dropdown = instance.$('.colormapChooser');
        viewportUtils.toggleDialog($dropdown);
    }
});
