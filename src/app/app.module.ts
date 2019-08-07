// MODULES
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { DragToSelectModule } from 'ngx-drag-to-select';
import { AngularDraggableModule } from 'angular2-draggable';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

// COMPONENTS
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PlaylistsComponent } from './components/playlists/playlists.component';
import { ArtistsComponent } from './components/artists/artists.component';
import { SearchComponent } from './components/search/search.component';
import { TaskbarComponent } from './shared/taskbar/taskbar.component';
import { WindowComponent } from './shared/window/window.component';

// ROUTES
import { ROUTES } from './app.routes';

// SERVICES
import { SpotifyService } from './services/spotify.service';
import { ArtistBioComponent } from './components/artists/components/artist-bio/artist-bio.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlaylistsComponent,
    ArtistsComponent,
    SearchComponent,
    TaskbarComponent,
    WindowComponent,
    ArtistBioComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES),
    DragToSelectModule.forRoot(),
    AngularDraggableModule
  ],
  providers: [
    SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
