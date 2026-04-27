import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.css'],
})
export class Footer {
  // Font Awesome Icons
  public readonly faGithub = faGithub;
  public readonly faLinkedin = faLinkedin;
  public readonly currentYear = new Date().getFullYear();
}
