export interface TableListItem {
  id: number;
  title: string;
  dynasty: string;
  author: string;
  content: string;
}

export interface TableListPagination {
  total: number;
  pageSize: number;
  current: number;
}

export interface TableListData {
  list: TableListItem[];
  pagination: Partial<TableListPagination>;
}

export interface TableListParams {
  title?: string;
  dynasty?: string;
  author?: string;
  content?: string;
  pageSize?: number;
  pageNum?: number;
  current?: number;
  sorter?: string;
}

export interface TableListItemParams extends Partial<TableListItem> {

}