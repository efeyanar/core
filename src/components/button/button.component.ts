import { ifDefined } from "lit/directives/if-defined.js";
import { html, unsafeStatic } from "lit/static-html.js";

import { customElement, property, state } from "lit/decorators.js";
import { PlusBase } from "../../base/plus-base";
import { buttonStyle } from "./button.style";
import { unsafeCSS } from "lit";

// @ts-ignore
import style from "./button.style.css?inline";

@customElement("plus-button")
export class ButtonComponent extends PlusBase {
  //   @property({ type: String }) color!: string;

  static styles = [...PlusBase.styles, unsafeCSS(style)];


  @property({ type: String }) size: "sm" | "md" | "lg" = "md";
  @property({ type: String }) kind: "filled" | "outlined" | "dashed" | "text" = "filled";
  @property({ type: String }) status: "default" | "primary" = "default";

  @property() type: "button" | "submit" | "reset" = "button";

  @property() href = "";
  @property() target: "_blank" | "_parent" | "_self" | "_top";
  @property() download?: string;
  @property() rel = "noreferrer noopener";
  @property({ reflect: true, attribute: "group-order" }) groupOrder: "first" | "middle" | "last";

  @state() private hasFocus = false;

  private isLink() {
    return this.href ? true : false;
  }

  private handleBlur() {
    this.hasFocus = false;
    this.emit("plus-blur");
  }

  private handleFocus() {
    this.hasFocus = true;
    this.emit("plus-focus");
  }

  private handleClick() {
    this.emit("plus-click");
  }

  render() {
    const { size, type, disabled, kind, status, title, name, value, href, target, download, rel, groupOrder } = this;

    const { base } = buttonStyle({ size, disabled, kind, status, groupOrder });

    const isLink = this.isLink();
    const tag = unsafeStatic(isLink ? `a` : `button`);

    /* eslint-disable lit/no-invalid-html */
    /* eslint-disable lit/binding-positions */
    return html`
      <${tag}
        part="base"
        class="${base()}"
        ?disabled=${disabled}
        type=${ifDefined(isLink ? undefined : type)}
        title=${title}
        name=${ifDefined(name)}
        value=${ifDefined(value)}
        href=${ifDefined(isLink ? href : undefined)}
        target=${ifDefined(isLink ? target : undefined)}
        download=${ifDefined(isLink ? download : undefined)}
        rel=${ifDefined(isLink ? rel : undefined)}
        role=${ifDefined(isLink ? undefined : "button")}
        aria-disabled=${disabled ? "true" : "false"}
        tabindex=${disabled ? "-1" : "0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <slot></slot>
    </${tag}>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "plus-button": ButtonComponent;
  }
}
