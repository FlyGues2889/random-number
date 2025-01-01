import { css } from 'lit';
export const segmentedButtonStyle = css `:host{position:relative;display:inline-flex;flex-grow:1;flex-shrink:0;float:left;height:100%;overflow:hidden;cursor:pointer;-webkit-tap-highlight-color:transparent;border:.0625rem solid rgb(var(--mdui-color-outline))}.button{width:100%;padding:0 .75rem}:host([invalid]){color:rgb(var(--mdui-color-error));border-color:rgb(var(--mdui-color-error))}:host([invalid]) .button{background-color:rgb(var(--mdui-color-error-container))}:host([selected]){color:rgb(var(--mdui-color-on-secondary-container));background-color:rgb(var(--mdui-color-secondary-container));--mdui-comp-ripple-state-layer-color:var(
      --mdui-color-on-secondary-container
    )}:host([disabled]:not([disabled=false i])),:host([group-disabled]){cursor:default;pointer-events:none;color:rgba(var(--mdui-color-on-surface),38%);border-color:rgba(var(--mdui-color-on-surface),12%)}:host([loading]:not([loading=false i])){cursor:default;pointer-events:none}:host(:not(.mdui-segmented-button-first)){margin-left:-.0625rem}:host(.mdui-segmented-button-first){border-radius:var(--shape-corner) 0 0 var(--shape-corner)}:host(.mdui-segmented-button-last){border-radius:0 var(--shape-corner) var(--shape-corner) 0}.end-icon,.icon,.selected-icon{display:inline-flex;font-size:1.28571429em}.end-icon .i,.icon .i,.selected-icon .i,::slotted([slot=end-icon]),::slotted([slot=icon]),::slotted([slot=selected-icon]){font-size:inherit}mdui-circular-progress{width:1.125rem;height:1.125rem}:host([disabled]:not([disabled=false i])) mdui-circular-progress{opacity:.38}.label{display:inline-flex}.has-icon .label{padding-left:.5rem}.has-end-icon .label{padding-right:.5rem}`;