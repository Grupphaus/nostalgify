import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ArtistsComponent } from './components/artists/artists.component';
import { ArtistBioComponent } from './components/artists/components/artist-bio/artist-bio.component';
import { SearchComponent } from './components/search/search.component';
import { PlaylistsComponent } from './components/playlists/playlists.component';

export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'playlists', component: PlaylistsComponent },
    { path: 'artists', component: ArtistsComponent },
    { path: 'artist-bio/:artist', component: ArtistBioComponent },
    { path: 'search', component: SearchComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

