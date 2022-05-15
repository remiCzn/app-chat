import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: [],
})
export class IconComponent {
  @Input() name = 'done';

  getColor() {
    return 'text-red-500';
  }
}
