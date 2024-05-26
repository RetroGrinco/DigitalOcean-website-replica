import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildparentComponent } from './childparent/childparent.component';
import { ParentchildComponent } from './parentchild/parentchild.component';
import { SomeActionDirective } from './direttive/action.directive';

@NgModule({
  declarations: [
    AppComponent,
    ChildparentComponent,
    ParentchildComponent,
    SomeActionDirective
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
