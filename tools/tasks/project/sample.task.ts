import * as gulp from 'gulp';
import { join } from 'path';

import Config from '../../config';

/**
 * This sample task copies all TypeScript files over to the appropiate `dist/dev|prod|test` directory, depending on the
 * current application environment.
 */
export = () => {
  console.log('----------------');
  console.log('Running sample task');
  console.log('----------------');
  console.log(join(Config.APP_SRC, '**/*.ts'), Config.APP_DEST);
  console.log('----------------');
  return gulp.src(join(Config.APP_SRC, '**/*.ts'))
    .pipe(gulp.dest(Config.APP_DEST));
};
