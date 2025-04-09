import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { PersonalSummaryComponent } from "../../components/personal-summary/personal-summary.component";
import { ContactsComponent } from "../../components/contacts/contacts.component";

@Component({
  selector: 'app-portfolio-page',
  imports: [NavbarComponent, PersonalSummaryComponent, ContactsComponent],
  templateUrl: './portfolio-page.component.html',
  styleUrl: './portfolio-page.component.scss'
})
export class PortfolioPageComponent {

}
