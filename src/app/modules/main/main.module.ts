import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';

// Components
import { ToolbarComponent } from './components/toolbar/toolbar.component';


@NgModule({
  declarations: [MainComponent, ToolbarComponent],
  imports: [CommonModule, MainRoutingModule],
})
export class MainModule {}
