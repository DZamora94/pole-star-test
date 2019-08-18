export class GenericFilter<D, F> {
  constructor() {}

  filterList(list: D[], filterData: F): D[] {
    return filterData ? list.filter(element => this.filterElement(element, filterData)) : list;
  }

  public filterElement(element: D, filterData: F): boolean {
    const filterKeys = Object.keys(filterData);

    return this.filterElementWithKeys(element, filterData, filterKeys);
  }

  protected filterElementWithKeys(element: D, filterData: F, filterKeys: string[]): boolean {
    for (let i = 0; i < filterKeys.length; i++) {
      const key = filterKeys[i];
      const filterValue = filterData[key];

      if (filterValue === null || filterValue === undefined) {
        continue;
      }

      if (!this.filterByProperty(element[key], filterValue)) {
        return false;
      }
    }

    return true;
  }

  private filterByProperty(value: string, filterValue: string): boolean {
    return (value.toLowerCase()).includes(filterValue.toLowerCase());
  }
}
