import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SoupsComponent } from './soups/soups.component';
import { PoultryDishesComponent } from './poultry-dishes/poultry-dishes.component';
import { FishFoodsComponent } from './fish-foods/fish-foods.component';
import { MasterpiecesOfHungarianComponent } from './masterpieces-of-hungarian/masterpieces-of-hungarian.component';
import { FriedFoodsComponent } from './fried-foods/fried-foods.component';
import { MultipersonMealsComponent } from './multiperson-meals/multiperson-meals.component';
import { SaladsComponent } from './salads/salads.component';
import { MeatlessMealsComponent } from './meatless-meals/meatless-meals.component';
import { GyrosComponent } from './gyros/gyros.component';
import { AlcoholfreeDrinksComponent } from './alcoholfree-drinks/alcoholfree-drinks.component';
import { AlcoholicDrinksComponent } from './alcoholic-drinks/alcoholic-drinks.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SoupsComponent,
    PoultryDishesComponent,
    FishFoodsComponent,
    MasterpiecesOfHungarianComponent,
    FriedFoodsComponent,
    MultipersonMealsComponent,
    SaladsComponent,
    MeatlessMealsComponent,
    GyrosComponent,
    AlcoholfreeDrinksComponent,
    AlcoholicDrinksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
