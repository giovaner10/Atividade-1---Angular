import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputTextComponent } from './input-text/input-text.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { InputSexoComponent } from './input-sexo/input-sexo.component';
import { BotaoSubmitComponent } from './botao-submit/botao-submit.component';

@NgModule({
  declarations: [
    AppComponent,
    InputTextComponent,
    InputNumberComponent,
    InputSexoComponent,
    BotaoSubmitComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
