import { Component } from '@angular/core';

import { SapPage } from '../sap/sap';
import { MetricsPage } from '../metrics/metrics';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SapPage;
  tab3Root = MetricsPage;

  constructor() {

  }
}
