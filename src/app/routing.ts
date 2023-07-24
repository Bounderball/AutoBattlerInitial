import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { ShopComponent } from "./shop/shop.component";
import { HomeComponent } from "./home/home.component";
import { FightComponent } from "./fight/fight.component";

export const routes: Routes = [
    { path: "shop", component: ShopComponent },
    { path: "home", component: HomeComponent },
    { path: "fight", component: FightComponent }
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);