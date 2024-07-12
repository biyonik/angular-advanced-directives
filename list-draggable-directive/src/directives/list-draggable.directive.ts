import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, inject, Inject, Renderer2 } from '@angular/core';

const constants = {
  class: {
    DRAG_PLACEHOLDER: 'drag-placeholder',
    LIST_DRAG: 'list-drag',
    DRAGGING: 'dragging',
    HOST_DRAG: 'host-drag'
  }
}

@Directive({
  selector: '[listDraggable]',
  standalone: true,
})
export default class ListDraggableDirective {
  #mouseDown: boolean = false;
  #dragItem?: HTMLElement;
  #dragPlaceholder?: HTMLElement;
  #initialX: number = 0;
  #initialY: number = 0;

  #host: ElementRef<HTMLElement> = inject(ElementRef);
  #renderer: Renderer2 = inject(Renderer2);


  constructor(
    @Inject(DOCUMENT) private readonly document: Document
  ) { }

}
