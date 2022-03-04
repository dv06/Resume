import { LitElement, html, css } from 'lit';

import './layout/dv-two-pane.js';
import { penguin } from './svg/pengiun.js';
import './personal/dv-picture-info.js';
import './skills/dv-skill-list.js';
import './skills/dv-skill-list-item-rank.js';

export class DvResume extends LitElement {
	static get properties() {
		return {};
	}

	static get styles() {
		return css`
			:host {
				min-height: 100vh;
				position: relative;
				display: block;
			}
		`;
	}

	render() {
		return html`
			<dv-two-pane>
				<div slot="side">
					<dv-picture-info
						name="Devanshi Mishra"
						title="Software Developer"
					>
						${penguin}
					</dv-picture-info>
					<dv-skill-list skill="Langauges">
						<dv-skill-list-item-rank
							skill="C#"
							rank="5"
						></dv-skill-list-item-rank>
						<dv-skill-list-item-rank
							skill="Java"
							rank="4"
						></dv-skill-list-item-rank>
						<dv-skill-list-item-rank
							skill="Python"
							rank="2"
						></dv-skill-list-item-rank>
						<dv-skill-list-item-rank
							skill="Magic"
							rank="5"
						></dv-skill-list-item-rank>
						<dv-skill-list-item-rank
							skill="NodeJs"
							rank="1"
						></dv-skill-list-item-rank>
					</dv-skill-list>
				</div>
				<div>Main</div>
			</dv-two-pane>
		`;
	}
}

customElements.define('dv-resume', DvResume);
