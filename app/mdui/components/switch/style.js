import { css } from 'lit';
export const style = css `:host{--shape-corner:var(--mdui-shape-corner-full);--shape-corner-thumb:var(--mdui-shape-corner-full);position:relative;display:inline-block;cursor:pointer;-webkit-tap-highlight-color:transparent;height:2.5rem}:host([disabled]:not([disabled=false i])){cursor:default;pointer-events:none}label{display:inline-flex;align-items:center;width:100%;height:100%;white-space:nowrap;cursor:inherit;-webkit-user-select:none;user-select:none;touch-action:manipulation;zoom:1;-webkit-user-drag:none}.track{position:relative;display:flex;align-items:center;border-radius:var(--shape-corner);transition-property:background-color,border-width;transition-duration:var(--mdui-motion-duration-short4);transition-timing-function:var(--mdui-motion-easing-standard);height:2rem;width:3.25rem;border:.125rem solid rgb(var(--mdui-color-outline));background-color:rgb(var(--mdui-color-surface-container-highest))}:host([checked]:not([checked=false i])) .track{background-color:rgb(var(--mdui-color-primary));border-width:0}.invalid .track{background-color:rgb(var(--mdui-color-error-container));border-color:rgb(var(--mdui-color-error))}:host([disabled]:not([disabled=false i])) .track{background-color:rgba(var(--mdui-color-surface-container-highest),.12);border-color:rgba(var(--mdui-color-on-surface),.12)}:host([disabled][checked]:not([disabled=false i],[checked=false i])) .track{background-color:rgba(var(--mdui-color-on-surface),.12)}input{position:absolute;padding:0;opacity:0;pointer-events:none;width:1.25rem;height:1.25rem;margin:0 0 0 .625rem}mdui-ripple{border-radius:50%;transition-property:left,top;transition-duration:var(--mdui-motion-duration-short4);transition-timing-function:var(--mdui-motion-easing-standard);width:2.5rem;height:2.5rem}.thumb{position:absolute;display:flex;align-items:center;justify-content:center;border-radius:var(--shape-corner-thumb);transition-property:width,height,left,background-color;transition-duration:var(--mdui-motion-duration-short4);transition-timing-function:var(--mdui-motion-easing-standard);height:1rem;width:1rem;left:.375rem;background-color:rgb(var(--mdui-color-outline));--mdui-comp-ripple-state-layer-color:var(--mdui-color-on-surface)}.thumb mdui-ripple{left:-.75rem;top:-.75rem}.has-unchecked-icon .thumb{height:1.5rem;width:1.5rem;left:.125rem}.has-unchecked-icon .thumb mdui-ripple{left:-.5rem;top:-.5rem}:host([focus-visible]) .thumb,:host([hover]) .thumb,:host([pressed]) .thumb{background-color:rgb(var(--mdui-color-on-surface-variant))}:host([checked]:not([checked=false i])) .thumb{height:1.5rem;width:1.5rem;left:1.5rem;background-color:rgb(var(--mdui-color-on-primary));--mdui-comp-ripple-state-layer-color:var(--mdui-color-primary)}:host([checked]:not([checked=false i])) .thumb mdui-ripple{left:-.5rem;top:-.5rem}:host([pressed]) .thumb{height:1.75rem;width:1.75rem;left:0}:host([pressed]) .thumb mdui-ripple{left:-.375rem;top:-.375rem}:host([pressed][checked]:not([checked=false i])) .thumb{left:1.375rem}:host([focus-visible][checked]:not([checked=false i])) .thumb,:host([hover][checked]:not([checked=false i])) .thumb,:host([pressed][checked]:not([checked=false i])) .thumb{background-color:rgb(var(--mdui-color-primary-container))}.invalid .thumb{background-color:rgb(var(--mdui-color-error));--mdui-comp-ripple-state-layer-color:var(--mdui-color-error)}:host([focus-visible]) .invalid .thumb,:host([hover]) .invalid .thumb,:host([pressed]) .invalid .thumb{background-color:rgb(var(--mdui-color-error))}:host([disabled]:not([disabled=false i])) .thumb{background-color:rgba(var(--mdui-color-on-surface),.38)}:host([disabled][checked]:not([disabled=false i],[checked=false i])) .thumb{background-color:rgb(var(--mdui-color-surface))}.checked-icon,.unchecked-icon{display:flex;position:absolute;transition-property:opacity,transform;font-size:1rem}.unchecked-icon{opacity:1;transform:scale(1);transition-delay:var(--mdui-motion-duration-short1);transition-duration:var(--mdui-motion-duration-short3);transition-timing-function:var(--mdui-motion-easing-linear);color:rgb(var(--mdui-color-surface-container-highest))}:host([checked]:not([checked=false i])) .unchecked-icon{opacity:0;transform:scale(.92);transition-delay:0s;transition-duration:var(--mdui-motion-duration-short1)}:host([disabled]:not([disabled=false i])) .unchecked-icon{color:rgba(var(--mdui-color-surface-container-highest),.38)}.checked-icon{opacity:0;transform:scale(.92);transition-delay:0s;transition-duration:var(--mdui-motion-duration-short1);transition-timing-function:var(--mdui-motion-easing-linear);color:rgb(var(--mdui-color-on-primary-container))}:host([checked]:not([checked=false i])) .checked-icon{opacity:1;transform:scale(1);transition-delay:var(--mdui-motion-duration-short1);transition-duration:var(--mdui-motion-duration-short3)}.invalid .checked-icon{color:rgb(var(--mdui-color-error-container))}:host([disabled]:not([disabled=false i])) .checked-icon{color:rgba(var(--mdui-color-on-surface),.38)}.checked-icon .i,.unchecked-icon .i,::slotted([slot=checked-icon]),::slotted([slot=unchecked-icon]){font-size:inherit;color:inherit}`;