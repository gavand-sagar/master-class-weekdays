import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[showOnlyWhenAdmin]',
  standalone: true
})
export class MytoggleDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private vc: ViewContainerRef) {
    this.vc.createEmbeddedView(this.templateRef)
  }

}
