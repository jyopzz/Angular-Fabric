import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonsComponent } from './pages/buttons/buttons.component';
import { HomeComponent } from './pages/home/home.component';
import { IconsComponent } from './pages/icons/icons.component';
import { CardsComponent } from './pages/cards/cards.component';
import { AllIconComponent } from './pages/all-icon/all-icon.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'icons', component: IconsComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'all-icons', component: AllIconComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
