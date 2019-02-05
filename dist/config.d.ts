import { Option } from './data';
interface Constructor {
    select: HTMLSelectElement;
    isAjax: boolean;
    showSearch?: boolean;
    searchPlaceholder?: string;
    searchText?: string;
    searchingText?: string;
    searchHighlight?: boolean;
    searchFilter?: (opt: Option, search: string) => boolean;
    closeOnSelect?: boolean;
    showContent?: string;
    placeholderText?: string;
    allowDeselect?: boolean;
    deselectLabel?: string;
    isEnabled?: boolean;
    valuesUseText?: boolean;
    showOptionTooltips?: boolean;
    selectByGroup?: boolean;
    limit?: number;
}
export declare class Config {
    id: string;
    style: string;
    class: string[];
    isMultiple: boolean;
    isAjax: boolean;
    isSearching: boolean;
    showSearch: boolean;
    searchHighlight: boolean;
    closeOnSelect: boolean;
    showContent: string;
    searchPlaceholder: string;
    searchText: string;
    searchingText: string;
    placeholderText: string;
    allowDeselect: boolean;
    deselectLabel: string;
    isEnabled: boolean;
    valuesUseText: boolean;
    showOptionTooltips: boolean;
    selectByGroup: boolean;
    limit: number;
    readonly main: string;
    readonly singleSelected: string;
    readonly arrow: string;
    readonly multiSelected: string;
    readonly add: string;
    readonly plus: string;
    readonly values: string;
    readonly value: string;
    readonly valueText: string;
    readonly valueDelete: string;
    readonly content: string;
    readonly open: string;
    readonly openAbove: string;
    readonly openBelow: string;
    readonly search: string;
    readonly searchHighlighter: string;
    readonly addable: string;
    readonly list: string;
    readonly optgroup: string;
    readonly optgroupLabel: string;
    readonly optgroupLabelSelectable: string;
    readonly option: string;
    readonly highlighted: string;
    readonly disabled: string;
    readonly hide: string;
    constructor(info: Constructor);
    searchFilter(opt: Option, search: string): boolean;
}
export {};
