import { XmlComponent } from "../../../file/xml-components";
import { FootnoteReferenceRun } from "../../../file/footnotes/footnote/run/reference-run";
import { FieldInstruction } from "../../../file/table-of-contents/field-instruction";
import { Begin, End, Separate } from "./field";
import { IRunPropertiesOptions, RunProperties } from "./properties";
import { Tab } from "./tab";
export interface IRunOptions extends IRunPropertiesOptions {
    readonly children?: readonly (Begin | FieldInstruction | Separate | End | PageNumber | FootnoteReferenceRun | Tab | string)[];
    readonly break?: number;
    readonly text?: string;
}
export declare enum PageNumber {
    CURRENT = "CURRENT",
    TOTAL_PAGES = "TOTAL_PAGES",
    TOTAL_PAGES_IN_SECTION = "TOTAL_PAGES_IN_SECTION"
}
export declare class Run extends XmlComponent {
    protected readonly properties: RunProperties;
    constructor(options: IRunOptions);
}
