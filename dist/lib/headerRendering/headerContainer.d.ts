// Type definitions for ag-grid v7.2.2
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ceolter/>
import { Component } from "../widgets/component";
export declare class HeaderContainer {
    private gridOptionsWrapper;
    private context;
    private $scope;
    private dragAndDropService;
    private columnController;
    private gridPanel;
    private eventService;
    private scrollVisibleService;
    private eContainer;
    private eViewport;
    private eRoot;
    private headerRowComps;
    private pinned;
    private dropTarget;
    constructor(eContainer: HTMLElement, eViewport: HTMLElement, eRoot: HTMLElement, pinned: string);
    forEachHeaderElement(callback: (renderedHeaderElement: Component) => void): void;
    private init();
    private onColumnResized();
    private onDisplayedColumnsChanged();
    private onScrollVisibilityChanged();
    private setWidthIfPinnedContainer();
    destroy(): void;
    private onGridColumnsChanged();
    refresh(): void;
    private setupDragAndDrop();
    private removeHeaderRowComps();
    private createHeaderRowComps();
}
