import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { CityModule } from './city/city.module';
import { CompareModule } from './compare/compare.module';
import { CoreModule } from './core/core.module';
import { APP_ROUTES } from './core/routes.constant';
import { HomeModule } from './home/home.module';
import { SearchModule } from './search/search.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        ReactiveFormsModule,
        RouterModule.forRoot(APP_ROUTES),
        ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production }),
        CityModule,
        CompareModule,
        CoreModule,
        HomeModule,
        SearchModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
