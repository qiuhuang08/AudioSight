// src/assets/export-templates/sigmastudio-biquad.txt.ts
import type { ExportTemplate } from 'src/services/data-management/export/export.types';

const template: ExportTemplate = {
  meta: {
    id: 'sigmastudio-biquad-txt',
    name: 'SigmaStudio Biquad (.txt)',
    extension: 'txt',
    mimeType: 'text/plain',
    requiresSampleRate: true,
  },
  config: {
    newline: '\n',
    splitting: {
      enabled: true,
      itemsPerFile: 28, // 每个文件包含 28 个滤波器
      fileNameSuffix: '', // SigmaStudio 通常是单个文件，所以后缀为空
      startIndex: 1,
    },
    padding: {
      enabled: true,
      // 填充一个 "Bypass" (直通) 滤波器
      defaults: {
        Type: 'PK',
        Freq: 1000,
        Gain: 0,
        Q: 1.0,
        Enable: 1, // 填充项也需要计算出 (1, 0, 0, 0, 0) 的系数
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
    itemTemplate: `\${b0}
\${b1}
\${b2}
\${a1}
\${a2}`,
    // 每个5行块之间用一个换行符隔开
    separator: '\n',
    footer: '', // SigmaStudio 格式末尾通常没有逗号
  },
};

export default template;
