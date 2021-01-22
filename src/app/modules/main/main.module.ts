import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';

// Components
import { ToolbarComponent } from './components/toolbar/toolbar.component';

// Pages
import { MainPageComponent } from './pages/main-page/main-page.component';


@NgModule({
  declarations: [MainComponent, ToolbarComponent, MainPageComponent],
  imports: [CommonModule, MainRoutingModule],
})
export class MainModule {}
