// src/assets/export-templates/minidsp-biquad.txt.ts
import type { ExportTemplate } from 'src/services/data-management/export/export.types';

const template: ExportTemplate = {
  meta: {
    id: 'minidsp-biquad-txt',
    name: 'MiniDSP Biquad (.txt)',
    extension: 'txt',
    mimeType: 'text/plain',
    requiresSampleRate: true,
  },
  config: {
    newline: '\r\n',
    splitting: {
      enabled: true,
      itemsPerFile: 28,
      fileNameSuffix: '',
      startIndex: 1,
    },
    padding: {
      enabled: true,
      defaults: {
        Type: 'PK',
        Freq: 1000,
        Gain: 0,
        Q: 1.0,
        Enable: 1,
      },
    },
    transforms: {
      decimals: {
        b0: 16,
        b1: 16,
        b2: 16,
        a1: 16,
        a2: 16,
      },
    },
  },
  content: {
    header: '',
    itemTemplate: `biquad\${IndexInFile},
b0=\${b0},
b1=\${b1},
b2=\${b2},
a1=\${-a1},
a2=\${-a2}`,
    separator: ',\r\n',
    footer: ',',
  },
};

export default template;
