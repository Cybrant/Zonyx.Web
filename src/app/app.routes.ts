import { Routes } from '@angular/router';
import { ColorPaletteComponent } from './color-pallete/color-palette.component';
import { FontsComponent } from './fonts/fonts.component';

export const routes: Routes = [
  {
    path: '**',
    redirectTo: 'app',
    pathMatch: 'full',
  },
  {
    path: 'colors',
    component: ColorPaletteComponent,
  },
  {
    path: 'fonts',
    component: FontsComponent,
  },
];
