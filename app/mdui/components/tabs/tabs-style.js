import { css } from 'lit';
export const tabsStyle = css `:host{position:relative;display:flex}:host([placement^=top]){flex-direction:column}:host([placement^=bottom]){flex-direction:column-reverse}:host([placement^=left]){flex-direction:row}:host([placement^=right]){flex-direction:row-reverse}.container{position:relative;display:flex;flex:0 0 auto;overflow-x:auto;background-color:rgb(var(--mdui-color-surface))}:host([placement^=bottom]) .container,:host([placement^=top]) .container{flex-direction:row}:host([placement^=left]) .container,:host([placement^=right]) .container{flex-direction:column}:host([placement$='-start']) .container{justify-content:flex-start}:host([placement=bottom]) .container,:host([placement=left]) .container,:host([placement=right]) .container,:host([placement=top]) .container{justify-content:center}:host([placement$='-end']) .container{justify-content:flex-end}.container::after{content:' ';position:absolute;background-color:rgb(var(--mdui-color-surface-variant))}:host([placement^=bottom]) .container::after,:host([placement^=top]) .container::after{left:0;width:100%;height:.0625rem}:host([placement^=top]) .container::after{bottom:0}:host([placement^=bottom]) .container::after{top:0}:host([placement^=left]) .container::after,:host([placement^=right]) .container::after{top:0;height:100%;width:.0625rem}:host([placement^=left]) .container::after{right:0}:host([placement^=right]) .container::after{left:0}.indicator{position:absolute;z-index:1;background-color:rgb(var(--mdui-color-primary))}.container:not(.initial) .indicator{transition-duration:var(--mdui-motion-duration-medium2);transition-timing-function:var(--mdui-motion-easing-standard-decelerate)}:host([placement^=bottom]) .indicator,:host([placement^=top]) .indicator{transition-property:transform,left,width}:host([placement^=left]) .indicator,:host([placement^=right]) .indicator{transition-property:transform,top,height}:host([placement^=top]) .indicator{bottom:0}:host([placement^=bottom]) .indicator{top:0}:host([placement^=left]) .indicator{right:0}:host([placement^=right]) .indicator{left:0}:host([placement^=bottom][variant=primary]) .indicator,:host([placement^=top][variant=primary]) .indicator{height:.1875rem}:host([placement^=bottom][variant=secondary]) .indicator,:host([placement^=top][variant=secondary]) .indicator{height:.125rem}:host([placement^=left][variant=primary]) .indicator,:host([placement^=right][variant=primary]) .indicator{width:.1875rem}:host([placement^=left][variant=secondary]) .indicator,:host([placement^=right][variant=secondary]) .indicator{width:.125rem}:host([placement^=top][variant=primary]) .indicator{border-top-left-radius:.1875rem;border-top-right-radius:.1875rem}:host([placement^=bottom][variant=primary]) .indicator{border-bottom-right-radius:.1875rem;border-bottom-left-radius:.1875rem}:host([placement^=left][variant=primary]) .indicator{border-top-left-radius:.1875rem;border-bottom-left-radius:.1875rem}:host([placement^=right][variant=primary]) .indicator{border-top-right-radius:.1875rem;border-bottom-right-radius:.1875rem}:host([full-width]:not([full-width=false i])) ::slotted(mdui-tab){flex:1}`;