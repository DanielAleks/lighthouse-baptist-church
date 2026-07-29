<template>
	<section class="we-faq">
		<div class="we-faq__inner">
			<h2 class="we-faq__title">Knob and Tube Wiring Questions, Answered</h2>
			<p class="we-faq__subtitle">
				Common questions homeowners ask before they replace knob and tube wiring.
			</p>

			<div class="we-faq__list">
				<article v-for="(item, index) in faqs" :key="item.question" class="we-faq__item">
					<button
						type="button"
						class="we-faq__question-row"
						:aria-expanded="openIndex === index"
						@click="toggle(index)"
					>
						<span class="we-faq__question">{{ item.question }}</span>
						<span class="we-faq__icon" :class="{ 'we-faq__icon--open': openIndex === index }" aria-hidden="true">+</span>
					</button>

					<div v-if="openIndex === index" class="we-faq__answer-wrap">
						<p class="we-faq__answer">{{ item.answer }}</p>
					</div>
				</article>
			</div>

			<div class="we-faq__cta-wrap">
				<button type="button" class="we-faq__cta">Get My Free Estimate</button>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'WeQuestions',
	data() {
		return {
			openIndex: null,
			faqs: [
				{
					question: 'How do I know if my home still has knob and tube wiring?',
					answer: 'Homes built before the 1950s often still have it. A licensed electrician can confirm this during an onsite inspection by checking attics, crawl spaces, and panel connections.'
				},
				{
					question: 'Do you offer knob and tube wiring replacement near me?',
					answer: 'Yes. We serve homeowners throughout South King County and Pierce County, including nearby communities where older homes are common.'
				},
				{
					question: 'How much does electrical knob and tube replacement cost?',
					answer: 'Pricing depends on home size, accessibility, and how much wiring needs replacement. We provide a clear, upfront estimate before work begins.'
				},
				{
					question: 'Will replacing my old wiring help with home insurance?',
					answer: 'In many cases, yes. Many insurers prefer or require modern code-compliant wiring, and replacement can help improve your home insurability.'
				}
			]
		}
	},
	methods: {
		toggle(index) {
			this.openIndex = this.openIndex === index ? null : index
		}
	}
}
</script>

<style scoped>
.we-faq {
	padding: clamp(1.75rem, 4vw, 3rem) 0.75rem 1.9rem;
	background: linear-gradient(180deg, #f2f5f9 0%, #edf1f6 100%);
}

.we-faq__inner {
	width: min(980px, 100%);
	margin: 0 auto;
}

.we-faq__title {
	margin: 0;
	text-align: center;
	color: #0f3a5b;
	font-family: "Archivo Black", "Arial Black", sans-serif;
	font-size: clamp(2rem, 4.4vw, 3.75rem);
	line-height: 1.07;
}

.we-faq__subtitle {
	margin: 0.95rem auto 1.4rem;
	max-width: 52rem;
	text-align: center;
	color: #4f6e8a;
	font-family: "Nunito Sans", "Segoe UI", sans-serif;
	font-size: clamp(1rem, 2vw, 1.7rem);
	line-height: 1.35;
}

.we-faq__list {
	display: grid;
	gap: 0.9rem;
}

.we-faq__item {
	background: #ffffff;
	border: 1px solid #d8e1e9;
	border-radius: 0.9rem;
	box-shadow: 0 8px 18px rgba(15, 58, 91, 0.1);
	overflow: hidden;
}

.we-faq__question-row {
	width: 100%;
	min-height: 4.2rem;
	padding: 0.95rem 0.95rem 0.95rem 1rem;
	border: 0;
	background: transparent;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 0.7rem;
	cursor: pointer;
	text-align: left;
}

.we-faq__question {
	color: #0f3a5b;
	font-family: "Archivo Black", "Arial Black", sans-serif;
	font-size: clamp(1.15rem, 2.4vw, 2rem);
	line-height: 1.18;
}

.we-faq__icon {
	width: 2rem;
	height: 2rem;
	border-radius: 50%;
	background: #eef3f8;
	color: #173f5e;
	font-family: "Nunito Sans", "Segoe UI", sans-serif;
	font-size: 1.6rem;
	font-weight: 700;
	line-height: 1;
	display: inline-grid;
	place-items: center;
	transition: transform 0.2s ease;
	flex-shrink: 0;
}

.we-faq__icon--open {
	transform: rotate(45deg);
}

.we-faq__answer-wrap {
	padding: 0 1rem 1rem;
}

.we-faq__answer {
	margin: 0;
	color: #345978;
	font-family: "Nunito Sans", "Segoe UI", sans-serif;
	font-size: clamp(1rem, 1.85vw, 1.45rem);
	line-height: 1.38;
}

.we-faq__cta-wrap {
	display: flex;
	justify-content: center;
	margin-top: 1.65rem;
}

.we-faq__cta {
	border: 0;
	border-radius: 999px;
	min-height: 3.2rem;
	padding: 0.7rem 1.5rem;
	background: linear-gradient(90deg, #f01b05 0%, #e40f00 100%);
	color: #ffffff;
	font-family: "Nunito Sans", "Segoe UI", sans-serif;
	font-size: clamp(1.2rem, 2.4vw, 2rem);
	font-weight: 800;
	cursor: pointer;
	box-shadow: 0 10px 22px rgba(240, 27, 5, 0.38);
	transition: transform 0.2s ease, filter 0.2s ease;
}

.we-faq__cta:hover {
	filter: brightness(0.98);
	transform: translateY(-1px);
}

@media (max-width: 620px) {
	.we-faq {
		padding-left: 0.65rem;
		padding-right: 0.65rem;
	}

	.we-faq__question-row {
		min-height: 3.7rem;
		padding: 0.8rem 0.85rem 0.8rem 0.85rem;
	}

	.we-faq__icon {
		width: 1.8rem;
		height: 1.8rem;
		font-size: 1.35rem;
	}
}
</style>
