import _ from 'lodash';
import FormioExportUtils from '../../../../utils';

export default (element, component) => {

  if (component) {

    let componentElement = FormioExportUtils.createElement('table', {
      class: 'table',
      id: Math.random().toString(36).substring(7)
    });

    componentElement.className += component._options.bordered ? ' table-bordered' : '';

    console.log('ftable', component.rows);

    _.forEach(component.rows, (row) => {

      let rowComponent = FormioExportUtils.createElement('tr', { });

      console.log('frow', row);

      _.forEach(row, (comp) => {

        let columnComponent = FormioExportUtils.createElement('td', { });

        _.forEach(comp.components, (c) => {

          let chtml = c.toHtml(columnComponent);

          columnComponent.appendChild(chtml);
          console.log('fcall', c, columnComponent);
        });
        rowComponent.appendChild(columnComponent);

      });
      componentElement.appendChild(rowComponent);
    });

    if (_.isElement(element)) {
      element.appendChild(componentElement);
    }
    console.log('formioexp4', element, componentElement);

    // componentElement.className += component._options.ignoreLayout ? ' no-layout' : '';
    return componentElement;

  }
  return null;
};
