export interface IGridOption{
    dataSource: Array<any>;
    columns:Array<IGridColumn>;
}
export interface IGridColumn{
    headerText:string;
    field:string;
}