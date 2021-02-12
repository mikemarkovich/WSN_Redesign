import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ScoresComponent } from "./components/scores/scores.component";
import { FeaturedComponent } from "./components/featured/featured.component";

@NgModule({
  declarations: [AppComponent, ScoresComponent, FeaturedComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
