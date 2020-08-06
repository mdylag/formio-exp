import Html2Pdf from 'js-html2pdf';
// import html2pdf from 'html2pdf.js';
import FormioExportUtils from '../../utils';

export default (config = {}) => {
  return new Promise((resolve, reject) => {
    try {
      config = FormioExportUtils.verifyProperties(config, {
        source: {
          type: Element,
          required: true
        },
        download: {
          type: Boolean,
          default: false
        }
      });
      console.log('toPdf', config);

      // let worker = html2pdf().set(config);

      /* worker.from(config.source).toPdf().save().then((pdf) => {
        console.log('pdf', pdf);
        resolve(pdf);
      }); */

      Html2Pdf.getPdf(config).then((pdf) => resolve(pdf));
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
};
