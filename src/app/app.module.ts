import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { HomeComponent } from './home/home.component';
import { MessageComponent } from './message/message.component';
import { RequestComponent } from './request/request.component';
import { NotificationComponent } from './notification/notification.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { NewsfeedComponent } from './home/newsfeed/newsfeed.component';
import { ContactsComponent } from './home/contacts/contacts.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { LoginComponent } from './auth/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthHeaderComponent } from './auth/auth-header/auth-header.component';
import { AuthGuard } from './auth/auth-guard.service';
import { SettingsComponent } from './settings/settings.component';
import { SettingsDashboardComponent } from './settings/settings-dashboard/settings-dashboard.component';
import { DeactivateComponent } from './settings/deactivate/deactivate.component';
import { FindFriendsService } from './services/findfriends.service';
import { MyaccountComponent } from './settings/myaccount/myaccount.component';
import { EditAccountComponent } from './settings/edit-account/edit-account.component';
import { ViewUserComponent } from './user/view-user/view-user.component';
import { TimelineComponent } from './user/timeline/timeline.component';
import { AboutComponent } from './user/about/about.component';
import { FriendsComponent } from './user/friends/friends.component';
import { PhotosComponent } from './user/photos/photos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective,
    HomeComponent,
    MessageComponent,
    RequestComponent,
    NotificationComponent,
    DashboardComponent,
    NewsfeedComponent,
    ContactsComponent,
    SignUpComponent,
    LoginComponent,
    AuthHeaderComponent,
    SettingsComponent,
    SettingsDashboardComponent,
    DeactivateComponent,
    MyaccountComponent,
    EditAccountComponent,
    ViewUserComponent,
    TimelineComponent,
    AboutComponent,
    FriendsComponent,
    PhotosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpModule,
    FormsModule,
    HttpClientModule 
  ],
  providers: [AuthService, AuthGuard, FindFriendsService, ViewUserComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
