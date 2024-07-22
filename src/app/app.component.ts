import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { HowToGetStartedComponent } from './how-to-get-started/how-to-get-started.component';
import { MadeByComponent } from './made-by/made-by.component';
import { MembershipComponent } from './membership/membership.component';
import { FAQsComponent } from './faqs/faqs.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent, HowToGetStartedComponent, MadeByComponent, MembershipComponent, FAQsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DesignLab';
  
}
