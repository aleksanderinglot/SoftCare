import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[appDirective]'
})
export class AsideDirective {
    @HostBinding('class.open') isOpen = true;

    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
    }
}