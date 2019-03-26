import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Example } from './test-di';
import { AppComponent } from './app.component';
import { TestExampleComponent } from './test-example/test-example.component';
import { UserService } from './user.service';
import { NewCmpComponent } from './new-cmp/new-cmp.component';

@NgModule({
  declarations: [
    AppComponent,
    TestExampleComponent,
    NewCmpComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
