import './polyfills.ts';
import './__2.1.1.workaround.ts';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { platformUniversalDynamic } from 'angular2-universal';
import { AppModule } from './app/app.browser.module';
/**
 * enable prod mode for production environments
 */
if (environment.production) {
    enableProdMode();
}
var platformRef = platformUniversalDynamic();
platformRef.bootstrapModule(AppModule);
//# sourceMappingURL=/Users/suwigyarathore/Documents/universal/myUnivApp/src/client.js.map