import fs from 'fs';
import path from 'path';

const typesContent = `
export interface Theme {
  color?: {
    [key: string]: {
      [key: string]: { $value: string }
    }
  };
  button?: {
    [key: string]: {
      [key: string]: { $value: string }
    }
  };
  [key: string]: any;
}

export declare const tagaddodTheme: Theme;
export declare const greenpanTheme: Theme;

declare const themes: {
  tagaddod: Theme;
  greenpan: Theme;
};

export default themes;
`;

fs.writeFileSync(
  path.join(__dirname, '../dist/index.d.ts'),
  typesContent
);

console.log('✔ Types generated successfully');
