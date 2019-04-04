import { Template } from 'meteor/templating';
import 'meteor/ohif:viewerbase';
import { viewportUtils } from '../../../lib/viewportUtils';

Template.windowLevelChooser.onRendered(() => {
    const instance = Template.instance();

});

Template.windowLevelChooser.events({

    'click .windowLevelChooser ul li'(event, instance) {
        
        const $currentCell = instance.$(event.currentTarget);
        const idSelected = $currentCell[0].closest('li').dataset.id

        // adicionar acao pegando o idSelected
        const element = document.getElementsByClassName('imageViewerViewport')[0]; 
        const wlPresets = OHIF.viewerbase.wlPresets;
        wlPresets.applyWLPreset(idSelected, element);

        const $dropdown = instance.$('.windowLevelChooser');
        viewportUtils.toggleDialog($dropdown);

    }
});
