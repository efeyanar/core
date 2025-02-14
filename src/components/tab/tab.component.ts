import { unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { html } from "lit/static-html.js";
import { PlusBase } from "../../base/plus-base";
import { tabStyle } from "./tab.style";
// @ts-ignore
import { BadgeComponent } from "../badge/badge.component";
import style from "./tab.style.css?inline";

@customElement("plus-tab")
export class TabComponent extends PlusBase {
  static styles = [...PlusBase.styles, unsafeCSS(style)];

  @property({ type: String }) size: "sm" | "md" | "lg" = "md";
  @property({ type: Boolean, reflect: true }) active = false;
  @property({ type: String }) orientation: "vertical" | "horizontal" = "horizontal";

  @property({ type: String, attribute: "prefix-icon" }) prefixIcon: string;

  @property({ type: Boolean, converter: value => value != "false" }) badge = false;
  @property({ type: String, attribute: "badge-status" }) badgeStatus: BadgeComponent["status"] = "info";
  @property({ type: String, attribute: "badge-size" }) badgeSize: BadgeComponent["size"] = "sm";
  @property({ type: Boolean, converter: value => value != "false", attribute: "badge-invert" }) badgeInvert = false;
  @property({ type: String, attribute: "badge-content" }) badgeContent: string;

  @property({ type: Boolean, converter: value => value != "false" }) truncated = false;

  constructor() {
    super();
    this.slot = "tabItem";
  }

  render() {
    const { size, active, disabled, orientation, prefixIcon, badge, badgeStatus, badgeSize, badgeInvert, badgeContent, truncated } = this;
    const { tabItem } = tabStyle({ size, active, disabled, orientation, truncated });
    return html`
      <div class=${tabItem()} @click=${() => !this.disabled && this.emit("plus-tab-click")} role="tab" aria-selected=${active} tabindex=${active ? 0 : -1}>
        ${prefixIcon ? html`<i class=${prefixIcon}></i>` : null}
        <slot></slot>
        ${badge ? html`<plus-badge status=${badgeStatus} size=${badgeSize} invert=${badgeInvert} content=${badgeContent}></plus-badge>` : null}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "plus-tab": TabComponent;
  }
}
