import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SearchComponent } from './components/search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterComponent } from './components/filter/filter.component';
import { FooterComponent } from './components/footer/footer.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';

@NgModule({
    declarations: [
        AppComponent,
        ListComponent,
        NavigationComponent,
        ProfileComponent,
        SearchComponent,
        FilterComponent,
        FooterComponent,
        DropdownComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AngularFontAwesomeModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
