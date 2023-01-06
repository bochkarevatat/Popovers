import popovers from './popovers.js';

export default class Widget {
  constructor(parentEl) {
    this.parentEl = parentEl;
    this.addPopover = this.addPopover.bind(this);
  }

  static get markup() {
    return `
    <div class="error-form"></div>
    <form class = "form">
 <button type="button" class="btn btn-secondary" >
            Click to toggle popover
          </button> 
        </form>
        
    `;
  }

  static get btnSelector() {
    return '.btn';
  }

  static get errorSelector() {
    return '.error-form';
  }

  static get selector() {
    return '.form';
  }

  static get errorAdd() {
    return '.error';
  }

  bindToDOM() {
    this.parentEl.innerHTML = Widget.markup;
    this.element = this.parentEl.querySelector(Widget.selector);
    this.btnSelector = this.element.querySelector(Widget.btnSelector);
    this.errorSelector = this.parentEl.querySelector(Widget.errorSelector);
    this.btnSelector.addEventListener('click', this.addPopover);
  }

  addPopover(event) {
    event.preventDefault();
    this.errorAdd = this.errorSelector.querySelector(Widget.errorAdd);
    if (!this.errorAdd) {
      popovers(event);
    } else {
      this.errorAdd.remove();
    }
  }
}
