import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFocusTrap]'
})
export class FocusTrapDirective implements AfterViewInit {

  private firstFocusable: HTMLElement = null;
  private lastFocusableElement: HTMLElement = null;
  constructor(private elementRef: ElementRef<any>) { }

  ngAfterViewInit(): void {
    const focusableElements = this.elementRef
      .nativeElement
      .querySelectorAll(`
        [tabindex]:not([tabindex="-1"]),
        a[href]:not([disabled]),
        button:not([disabled]),
        textarea:not([disabled]),
        input:not([disabled]),
        select:not([disabled])`
      ) as Array<HTMLElement>;
    this.firstFocusable = focusableElements[0];
    this.lastFocusableElement = focusableElements[-1];
    this.firstFocusable.focus();
  }

}
