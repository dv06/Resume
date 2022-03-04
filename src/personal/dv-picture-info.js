import { LitElement, html, css } from 'lit';

export class DvPictureInfo extends LitElement {
	static get properties() {
		return {
			name: { type: String },
			title: { type: String },
		};
	}

	static get styles() {
		return css`
			:host {
				display: flex;
				flex-direction: column;
				align-items: center;
			}
			.dvpi-picture {
				border: 0.25rem solid darkblue;
				border-radius: 18rem;
				width: 12.5rem;
				height: 12.5rem;
				overflow: hidden;
				position: relative;
				display: block;
			}

			::slotted(*) {
				min-width: 100%;
				min-height: 100%;
			}

			.dvpi-name {
				font-size: 1.5rem;
				margin-bottom: 0.1rem;
			}
		`;
	}

	render() {
		return html`
			<div class="dvpi-picture">
				<slot></slot>
			</div>
			<h1 class="dvpi-name">${this.name}</h1>
			<div class="dvpi-title">${this.title}</div>
		`;
	}
}

customElements.define('dv-picture-info', DvPictureInfo);
