import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { User } from '../../../models/user';

@Component({
  selector: 'app-users-table-item',
  templateUrl: './item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemComponent {
  @Input() user: User;
}
