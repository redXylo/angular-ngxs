import {BrowserModule} from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import {ApiService} from './api.service';
import { HttpClientModule } from '@angular/common/http'
import {NgxsModule} from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import {PostState} from './post.state';
import { AppRoutingModule } from './app-routing.module';

import {AppComponent} from './app.component';
import {DashboardComponent} from './feature/dashboard/dashboard.component';
import {Post} from './post';

import {MDBBootstrapModule, MDBBootstrapModulesPro} from 'ng-uikit-pro-standard';
import {ProfileState} from './shared/models/Profile/profile.state';
import {AccountState} from './shared/models/Account/account.state';

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        NgxsModule.forRoot([
            PostState,
            ProfileState,
            AccountState
        ]),
        NgxsReduxDevtoolsPluginModule.forRoot(),
        MDBBootstrapModule.forRoot(),
    ],
    schemas: [ NO_ERRORS_SCHEMA ],
    providers: [ApiService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
