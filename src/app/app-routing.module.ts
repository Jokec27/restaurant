import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AlcoholfreeDrinksComponent } from './alcoholfree-drinks/alcoholfree-drinks.component';
import { AlcoholicDrinksComponent } from './alcoholic-drinks/alcoholic-drinks.component';
import { AppComponent } from './app.component';
import { FishFoodsComponent } from './fish-foods/fish-foods.component';
import { FriedFoodsComponent } from './fried-foods/fried-foods.component';
import { GyrosComponent } from './gyros/gyros.component';
import { HomeComponent } from './home/home.component';
import { MasterpiecesOfHungarianComponent } from './masterpieces-of-hungarian/masterpieces-of-hungarian.component';
import { MeatlessMealsComponent } from './meatless-meals/meatless-meals.component';
import { MenuComponent } from './menu/menu.component';
import { MultipersonMealsComponent } from './multiperson-meals/multiperson-meals.component';
import { PoultryDishesComponent } from './poultry-dishes/poultry-dishes.component';
import { RelationComponent } from './relation/relation.component';
import { SaladsComponent } from './salads/salads.component';
import { SoupsComponent } from './soups/soups.component';
import { WeekMenuComponent } from './week-menu/week-menu.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'levesek', component: SoupsComponent},
  {path: 'szarnyas-etelek', component: PoultryDishesComponent},
  {path: 'haletelek', component: FishFoodsComponent},
  {path: 'magyar-konyha-remekei', component: MasterpiecesOfHungarianComponent},
  {path: 'frissensultek', component: FriedFoodsComponent},
  {path: 'tobbszemelyes-etelek', component: MultipersonMealsComponent},
  {path: 'salatak', component: SaladsComponent},
  {path: 'husmentes-etelek', component: MeatlessMealsComponent},
  {path: 'gyrosetelek', component: GyrosComponent},
  {path: 'alkoholmentes-italok', component: AlcoholfreeDrinksComponent},
  {path: 'alkoholos-italok', component: AlcoholicDrinksComponent},
  {path: 'heti-menu', component: WeekMenuComponent},
  {path: 'etlap', component: MenuComponent},
  {path: 'rolunk', component: AboutUsComponent},
  {path: 'kapcsolat', component: RelationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
