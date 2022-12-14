import { BaseXmlComponent, IContext } from "./base";
import { IXmlableObject } from "./xmlable-object";
export declare type AttributeMap<T> = {
    readonly [P in keyof T]: string;
};
export declare abstract class XmlAttributeComponent<T extends object> extends BaseXmlComponent {
    protected readonly root: T;
    protected readonly xmlKeys?: AttributeMap<T>;
    constructor(properties: T);
    prepForXml(_: IContext): IXmlableObject;
}
