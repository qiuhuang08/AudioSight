// src/assets/export-templates/mvsilicon-bpxx.ini.ts
import type { ExportTemplate } from 'src/services/data-management/export/export.types';

const template: ExportTemplate = {
  meta: {
    id: 'mvsilicon-bpXX',
    name: 'MVSILICON BPxx (.ini)',
    extension: 'ini',
    mimeType: 'text/plain',
  },
  config: {
    newline: '\n',
    splitting: {
      enabled: true,
      itemsPerFile: 10,
      fileNameSuffix: '_${index:2}',
      startIndex: 1,
    },
    padding: {
      enabled: true,
      defaults: {
        Type: 'PK',
        Freq: 1000,
        Gain: 0,
        Q: 0.707,
        Enable: 0,
      },
    },
    transforms: {
      typeMap: { PK: 0, LS: 1, HS: 2, LP: 3, HP: 4 },
      scales: {
        gain: 256,
        q: 1024,
      },
      decimals: {
        freq: -1,
        gain: -1,
        q: -1,
      },
    },
  },
  content: {
    header:
      '[EQ PARAMETERS CONFIGURATION]\nenable = 1\npregain = ${PreGainScaled}\ncalculation_type = 10',
    itemTemplate:
      'filter${IndexInFile}_enable = ${Enable}\nfilter${IndexInFile}_type = ${Type}\nfilter${IndexInFile}_f0 = ${Freq}\nfilter${IndexInFile}_Q = ${Q}\nfilter${IndexInFile}_gain = ${Gain}',
    footer: '',
  },
};

export default template;
