import { LitElement, html, css } from 'lit';

export class DvTwoPane extends LitElement {
	static get properties() {
		return {};
	}

	static get styles() {
		return css`
			:host {
				display: flex;
				min-height: 100vh;
				width: 50rem;
				position: relative;
			}
			::slotted(*) {
				height: 750px;
				padding: 1rem;
			}
			.dv-two-pane-side {
				width: 15rem;
				background-color: lightblue;
			}
		`;
	}

	render() {
		return html`
			<div class="dv-two-pane-side">
				<slot name="side"></slot>
			</div>
			<slot></slot>
		`;
	}
}

customElements.define('dv-two-pane', DvTwoPane);
