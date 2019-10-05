import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EditComponent } from './contatos/edit/edit.component';
import { ListComponent } from './contatos/list/list.component';
import { ContatoComponent } from './contatos/shared/contato/contato.component';
import { ContatoDataComponent } from './contatos/shared/contato-data/contato-data.component';

@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    ListComponent,
    ContatoComponent,
    ContatoDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
