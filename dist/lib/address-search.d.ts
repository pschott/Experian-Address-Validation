import Request from './request';
import { AddressSearchOptions, AddressValidationMode } from './search-options';
export default class AddressValidation {
    options: AddressSearchOptions;
    searchType: AddressValidationMode;
    events: any;
    request: Request;
    private baseUrl;
    private searchEndpoint;
    private lookupEndpoint;
    private validateEndpoint;
    private promptsetEndpoint;
    private stepInEndpoint;
    private refineEndpoint;
    private enrichmentEndpoint;
    private what3WordCountries;
    private what3WordsKeyword;
    private picklist;
    private inputs;
    private lastSearchTerm;
    private currentSearchTerm;
    private shouldTriggerWhat3WordsEnrichment;
    private currentCountryCode;
    private currentDataSet;
    private hasSearchInputBeenReset;
    private countryCodeMapping;
    private lookupFn;
    private keyUpFn;
    private checkTabFn;
    private isWhat3Words;
    constructor(options: AddressSearchOptions);
    setToken(token: string): void;
    setSearchType(searchType: AddressValidationMode): void;
    getEnrichmentData(globalAddressKey: string): void;
    private setup;
    private handleW3WEnrichmentResult;
    private handleEnrichmentResult;
    private getParameter;
    private get token();
    private mergeDefaultOptions;
    private getPromptset;
    private lookupDatasetCode;
    private handlePromptsetResult;
    setInputs(inputs?: HTMLInputElement[]): void;
    private registerInputs;
    private setCountryList;
    private handleCountryListChange;
    private generateSearchDataForApiCall;
    private generateLookupDataForApiCall;
    private getWhat3WordsLookupValue;
    private handleKeyboardEvent;
    private search;
    private getKey;
    private canSearch;
    private poweredByLogo;
    private createPicklist;
    private format;
    private refine;
    private lookup;
    private result;
    private checkTab;
    private searchSpinner;
    private toggleSearchInputs;
    private globalReset;
}
