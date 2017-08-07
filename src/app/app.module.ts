import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { appRoutingProviders, routing } from './app-routing.module';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { AuthService } from './auth.service' 
import { AuthGuard } from './auth.guard' 

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig(), http, options);
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    routing    
  ],
  providers: [
          appRoutingProviders, 
          AuthService,
           AuthGuard,
          {
            provide: AuthHttp,
            useFactory: authHttpServiceFactory,
            deps: [Http, RequestOptions]
          }         
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
