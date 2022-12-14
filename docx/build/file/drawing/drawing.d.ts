import { IMediaData } from "../../file/media";
import { XmlComponent } from "../../file/xml-components";
import { DocPropertiesOptions } from "./doc-properties/doc-properties";
import { IFloating } from "./floating";
export interface IDistance {
    readonly distT?: number;
    readonly distB?: number;
    readonly distL?: number;
    readonly distR?: number;
}
export interface IDrawingOptions {
    readonly floating?: IFloating;
    readonly docProperties?: DocPropertiesOptions;
}
export declare class Drawing extends XmlComponent {
    private readonly inline;
    constructor(imageData: IMediaData, drawingOptions?: IDrawingOptions);
}
