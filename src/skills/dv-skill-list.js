import { LitElement, html, css } from 'lit';

export class DvSkillList extends LitElement {
	static get properties() {
		return {
			skill: { type: String },
		};
	}

	static get styles() {
		return css`
			:host {
				padding: 1rem;
			}
			.dvsl-title {
				border-bottom: 0.1rem solid darkblue;
			}
			h3 {
				margin: 0;
			}

			ul {
				padding-left: 0.75rem;
			}
		`;
	}

	render() {
		return html`
			<div class="dvsl-title">
				<h3>${this.skill}</h3>
			</div>
			<ul>
				<slot></slot>
			</ul>
		`;
	}
}

customElements.define('dv-skill-list', DvSkillList);
