// src/assets/export-templates/audiosight-standard.txt.ts
import type { ExportTemplate } from 'src/services/data-management/export/export.types';

const template: ExportTemplate = {
  meta: {
    id: 'audiosight-standard-txt',
    name: 'AudioSight (.txt)',
    extension: 'txt',
    mimeType: 'text/plain',
  },
  config: {
    newline: '\r\n',
    transforms: {
      decimals: {
        freq: 2,
        gain: 3,
        q: 3,
      },
    },
  },
  content: {
    header:
      '* Exporter: AudioSight\n' +
      '* Profile Name: ${ProfileName}\n' +
      '* Exported At: ${DateTimeISO}\n' +
      '* Sample Rate: ${SampleRate} Hz\n' +
      '* Pre-Gain: ${PreGain} dB\n' +
      '* Total Filters: ${TotalFilters}\n' +
      '* Notes: ${Notes}\n' +
      '* \n' +
      '* Number\tEnabled\tType\tFrequency(Hz)\tGain(dB)\tQ',

    itemTemplate: '${Index}\t\t${EnableText}\t\t${Type}\t\t${Freq}\t\t${Gain}\t\t${Q}',

    footer: '',
  },
};

export default template;
