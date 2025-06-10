import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './landing/forgot-password.component';
import { GfEmbedComponent } from './gf-embed/gf-embed.component';

export const routes: Routes = [
    {
        path: 'login', component: LandingComponent
    },
    {
        path: '', redirectTo: 'login', pathMatch: 'full'
    },
    {
        path: 'signup', component: SignupComponent
    },
    {
        path: 'login/forgot-password', component: ForgotPasswordComponent
    },
    {
        path: 'learn', component: GfEmbedComponent
    }
];
