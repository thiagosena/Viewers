import { Template } from 'meteor/templating';
import { cornerstone, cornerstoneTools } from 'meteor/ohif:cornerstone';
import 'meteor/ohif:viewerbase';
import { viewportUtils } from '../../../lib/viewportUtils';

Template.colormapChooser.onRendered(() => {
    const instance = Template.instance();

});

Template.colormapChooser.events({

    'click .colormapChooser ul li'(event, instance) {
        
        const $currentCell = instance.$(event.currentTarget);
        const idSelected = $currentCell[0].closest('li').dataset.id

       viewportUtils.colormap(idSelected);

        const $dropdown = instance.$('.colormapChooser');
        viewportUtils.toggleDialog($dropdown);

    }
});
