import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userInitials',
})
export class UserInitialsPipe implements PipeTransform {
  transform(user: { name: string; surname: string }): string {
    if (!user.name && !user.surname) {
      return 'Unknown';
    }
    return (user.name?.[0] + user.surname?.[0]).toUpperCase();
  }
}
