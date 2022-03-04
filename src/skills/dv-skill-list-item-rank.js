import { LitElement, html, css } from 'lit';

export class DvSkillListItemRank extends LitElement {
	static get properties() {
		return {
			skill: { type: String },
			rank: { type: Number },
		};
	}

	static get styles() {
		return css`
			:host {
				display: list-item;
				list-style: none;
			}

			.dvslir-circle,
			.dvslir-circle-fill {
				height: 0.6rem;
				width: 0.6rem;
				border: 0.05rem solid darkblue;
				border-radius: 1rem;
				margin: 0 0.1rem;
			}
			.dvslir-circle-fill {
				background-color: darkblue;
			}
			.dvslir-flex {
				display: flex;
				justify-content: space-between;
				align-items: center;
			}
		`;
	}

	render() {
		const ranksCircles = [];
		// eslint-disable-next-line no-plusplus
		for (let i = 0; i < 5; i++) {
			if (i + 1 <= this.rank) {
				ranksCircles.push(html`<div class="dvslir-circle-fill"></div>`);
				// eslint-disable-next-line no-continue
				continue;
			}

			ranksCircles.push(html`<div class="dvslir-circle"></div>`);
		}
		return html`
			<div class="dvslir-flex">
				<span>${this.skill}</span>
				<span class="dvslir-flex"> ${ranksCircles} </span>
			</div>
		`;
	}
}

customElements.define('dv-skill-list-item-rank', DvSkillListItemRank);
