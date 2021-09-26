import {
  ColumnProps,
  IDataTableComponent,
  DataTableHeadlessComponent,
} from 'petals-ui/dist/data-table';
import { Component, Prop } from 'vue-property-decorator';

import { BaseStructuralComponent } from '../basic';

@Component
class DataTableStructuralComponent
  extends BaseStructuralComponent<DataTableHeadlessComponent>
  implements IDataTableComponent {
  @Prop({ type: Array, default: () => [] })
  public readonly dataSource!: Record<string, any>[];

  @Prop({ type: Array, default: () => [] })
  public readonly columns!: ColumnProps[];

  @Prop({ type: Boolean, default: false })
  public readonly loading!: boolean;

  @Prop({ type: Boolean, default: false })
  public readonly hidePagination!: boolean;

  @Prop({ type: Number, default: 1 })
  public readonly currentPage!: number;

  @Prop({ type: Number, default: 10 })
  public readonly pageSize!: number;

  @Prop({ type: Number, default: 0 })
  public readonly total!: number;

  @Prop({ type: Array, default: () => [10, 20, 50, 100] })
  public readonly pageSizes!: number[];
}

export { DataTableStructuralComponent };
