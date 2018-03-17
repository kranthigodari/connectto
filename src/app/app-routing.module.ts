import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { MessageComponent } from './message/message.component';
import { NotificationComponent } from './notification/notification.component';
import { RequestComponent } from './request/request.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { NewsfeedComponent } from './home/newsfeed/newsfeed.component';
import { RouterModule } from '@angular/router';
import { ContactsComponent } from './home/contacts/contacts.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './auth/auth-guard.service';
import { SettingsComponent } from './settings/settings.component';
import { DeactivateComponent } from './settings/deactivate/deactivate.component';
import { SettingsDashboardComponent } from './settings/settings-dashboard/settings-dashboard.component';
import { MyaccountComponent } from './settings/myaccount/myaccount.component';
import { EditAccountComponent } from './settings/edit-account/edit-account.component';
import { ViewUserComponent } from './user/view-user/view-user.component';
import { TimelineComponent } from './user/timeline/timeline.component';
import { AboutComponent } from './user/about/about.component';
import { PhotosComponent } from './user/photos/photos.component';
import { FriendsComponent } from './user/friends/friends.component';

const appRoutes: Routes = [
    {path: '', redirectTo: '/', pathMatch: 'full'},
    {path: '', component: HomeComponent, canActivate: [AuthGuard], children: [
    
    ]},
    {path: 'messages', component: MessageComponent},
    {path: 'notifications', component: NotificationComponent},
    {path: 'requests', component: RequestComponent},
    {path: 'signup', component: SignUpComponent},
    {path: 'login', component: LoginComponent},
    {path: 'settings', component: SettingsComponent, children : [
        {path: 'deactivate', component: DeactivateComponent},
        {path: 'account-view', component: MyaccountComponent},
        {path: 'edit-profile', component: EditAccountComponent}
    ]},
    {path: 'viewProfile', component: ViewUserComponent, children: [
        {path: 'timeline', component: TimelineComponent},
        {path: 'about', component: AboutComponent},
        {path: 'photos', component: PhotosComponent},
        {path: 'friends', component: FriendsComponent}
    ]}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}