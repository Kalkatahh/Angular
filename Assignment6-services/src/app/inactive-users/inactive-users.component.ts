import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersService } from '../usersservice.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
 @Input() users: string[];
 /*   @Output() userSetToActive = new EventEmitter<number>();
 */

  constructor(private userService: UsersService){

  }
  onSetToActive(id: number) {
    this.userService.onSetToActive(id);
  }
}
