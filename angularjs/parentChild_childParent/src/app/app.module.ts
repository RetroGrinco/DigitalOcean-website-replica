import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildparentComponent } from './childparent/childparent.component';
import { ParentchildComponent } from './parentchild/parentchild.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildparentComponent,
    ParentchildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
