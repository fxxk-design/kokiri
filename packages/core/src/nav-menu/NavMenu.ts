import {
  MenuDirection,
  SubMenuTrigger,
  INavMenuComponent,
  NavMenuHeadlessComponent,
} from 'petals-ui/dist/nav-menu';

import { Component, Prop, Emit } from 'vue-property-decorator';

import { BaseStructuralComponent } from '../basic';

@Component
class NavMenuStructuralComponent
  extends BaseStructuralComponent<NavMenuHeadlessComponent>
  implements INavMenuComponent {
  @Prop({ type: String, default: 'vertical' })
  public readonly direction!: MenuDirection;

  @Prop({ type: String, default: 'hover' })
  public readonly subMenuTrigger!: SubMenuTrigger;

  @Prop({ type: Boolean, default: false })
  public readonly collapsed!: boolean;

  @Emit('select')
  protected onMenuItemSelect(): void {} // eslint-disable-line @typescript-eslint/no-empty-function

  @Emit('open')
  protected onMenuItemOpen(): void {} // eslint-disable-line @typescript-eslint/no-empty-function

  @Emit('close')
  protected onMenuItemClose(): void {} // eslint-disable-line @typescript-eslint/no-empty-function

  public created(): void {
    this.setHeadlessComponent(new NavMenuHeadlessComponent(this));
  }
}

export { NavMenuStructuralComponent };
