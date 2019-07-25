// MODULES
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { DragToSelectModule } from 'ngx-drag-to-select';

// COMPONENTS
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { TaskbarComponent } from './shared/taskbar/taskbar.component';
import { WindowComponent } from './shared/window/window.component';

// ROUTES
import { ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistComponent,
    TaskbarComponent,
    WindowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES),
    DragToSelectModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
