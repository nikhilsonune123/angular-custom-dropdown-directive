import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostBinding('class.active') isActive = false;

  @HostListener('click') onDropdownClick() {
    this.isActive = !this.isActive;
  }

  constructor() {}
}
