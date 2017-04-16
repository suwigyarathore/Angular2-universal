import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
export var appRoutes = [
    { path: 'home', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];
//# sourceMappingURL=/Users/suwigyarathore/Documents/universal/myUnivApp/src/app/app.routing.js.map