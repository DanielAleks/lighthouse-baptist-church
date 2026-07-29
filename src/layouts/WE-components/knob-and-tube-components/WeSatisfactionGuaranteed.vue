<template>
	<section class="we-sg">
		<div class="we-sg__inner">
			<h2 class="we-sg__title">Satisfaction Guaranteed</h2>

			<div class="we-sg__summary" aria-label="Google rating summary">
				<strong class="we-sg__summary-label">Excellent</strong>
				<span class="we-sg__stars" aria-hidden="true">★★★★★</span>
				<span class="we-sg__rating">5.0</span>
				<span class="we-sg__reviews">77+ reviews</span>
			</div>

			<div class="we-sg__carousel-wrap">
				<button
					type="button"
					class="we-sg__arrow we-sg__arrow--left"
					aria-label="Previous reviews"
					:disabled="atStart"
					@click="goPrev"
				>
					&#8249;
				</button>

				<div class="we-sg__viewport">
					<div class="we-sg__track" :style="trackStyle">
						<article v-for="review in reviews" :key="review.name" class="we-sg__card">
							<div class="we-sg__card-top">
								<span class="we-sg__card-stars" aria-hidden="true">★★★★★</span>
								<span class="we-sg__gmark" aria-hidden="true">G</span>
							</div>

							<p class="we-sg__copy">{{ review.copy }}</p>
							<button type="button" class="we-sg__read-more">Read more</button>

							<div class="we-sg__author">{{ review.name }}</div>
							<div class="we-sg__date">{{ review.date }}</div>
						</article>
					</div>
				</div>

				<button
					type="button"
					class="we-sg__arrow we-sg__arrow--right"
					aria-label="Next reviews"
					:disabled="atEnd"
					@click="goNext"
				>
					&#8250;
				</button>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'WeSatisfactionGuaranteed',
	data() {
		return {
			currentIndex: 0,
			cardsPerView: 3,
			reviews: [
				{
					name: 'John C.',
					date: 'June 2026',
					copy: 'The guys from Washington Electrical came over and did a great job. They cleaned up after their job, told us to let them know if we had any questions, and made the process easy from start to finish.'
				},
				{
					name: 'Dora W.',
					date: 'June 2026',
					copy: "This company is a gem from the start. They didn't charge me for a 2-hour estimate and was honest in giving me advice as to what I needed right now versus later."
				},
				{
					name: 'Damon G.',
					date: 'April 2026',
					copy: 'I am very happy with the work that was done by the crew at Washington Electrical. Russ had a quote for me the day after his onsite visit and scheduling was straightforward.'
				},
				{
					name: 'Monica T.',
					date: 'March 2026',
					copy: 'Professional, timely, and clear communication. Their team brought our panel and wiring up to code and explained each step before beginning work.'
				}
			]
		}
	},
	computed: {
		maxIndex() {
			return Math.max(0, this.reviews.length - this.cardsPerView)
		},
		atStart() {
			return this.currentIndex === 0
		},
		atEnd() {
			return this.currentIndex >= this.maxIndex
		},
		trackStyle() {
			return {
				transform: `translateX(-${this.currentIndex * (100 / this.cardsPerView)}%)`
			}
		}
	},
	mounted() {
		this.updateCardsPerView()
		window.addEventListener('resize', this.updateCardsPerView)
	},
	beforeUnmount() {
		window.removeEventListener('resize', this.updateCardsPerView)
	},
	methods: {
		updateCardsPerView() {
			if (window.innerWidth <= 760) {
				this.cardsPerView = 1
			} else if (window.innerWidth <= 1080) {
				this.cardsPerView = 2
			} else {
				this.cardsPerView = 3
			}

			if (this.currentIndex > this.maxIndex) {
				this.currentIndex = this.maxIndex
			}
		},
		goPrev() {
			this.currentIndex = Math.max(0, this.currentIndex - 1)
		},
		goNext() {
			this.currentIndex = Math.min(this.maxIndex, this.currentIndex + 1)
		}
	}
}
</script>

<style scoped>
.we-sg {
	padding: clamp(1.6rem, 4vw, 3rem) 0.75rem 1.75rem;
	background: linear-gradient(180deg, #f2f5f9 0%, #ecf1f6 100%);
}

.we-sg__inner {
	width: min(1120px, 100%);
	margin: 0 auto;
}

.we-sg__title {
	margin: 0;
	text-align: center;
	color: #0f3a5b;
	font-family: "Archivo Black", "Arial Black", sans-serif;
	font-size: clamp(2rem, 4vw, 3.6rem);
	line-height: 1.05;
}

.we-sg__summary {
	margin-top: 0.95rem;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.65rem;
	flex-wrap: wrap;
	color: #153f60;
	font-family: "Nunito Sans", "Segoe UI", sans-serif;
	font-size: clamp(1.1rem, 2.1vw, 1.8rem);
}

.we-sg__summary-label {
	font-weight: 800;
}

.we-sg__stars {
	color: #ffc532;
	letter-spacing: 0.04em;
}

.we-sg__rating {
	font-weight: 800;
}

.we-sg__reviews {
	color: #5f7e99;
}

.we-sg__carousel-wrap {
	margin-top: 1.35rem;
	position: relative;
}

.we-sg__viewport {
	overflow: hidden;
	padding: 0.1rem;
}

.we-sg__track {
	display: flex;
	gap: 1rem;
	transition: transform 0.3s ease;
}

.we-sg__card {
	flex: 0 0 calc((100% - (1rem * 2)) / 3);
	background: #ffffff;
	border: 1px solid #d7e0e8;
	border-radius: 0.95rem;
	box-shadow: 0 8px 20px rgba(15, 58, 91, 0.09);
	padding: 1rem 1rem 1.05rem;
}

.we-sg__card-top {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.we-sg__card-stars {
	color: #ffc532;
	letter-spacing: 0.05em;
	font-size: 1.15rem;
}

.we-sg__gmark {
	color: #4285f4;
	font-family: "Nunito Sans", "Segoe UI", sans-serif;
	font-size: 2rem;
	font-weight: 900;
	line-height: 1;
}

.we-sg__copy {
	margin: 0.6rem 0 0;
	color: #173f5e;
	font-family: "Nunito Sans", "Segoe UI", sans-serif;
	font-size: 1.62rem;
	line-height: 1.34;
	display: -webkit-box;
	line-clamp: 6;
	-webkit-line-clamp: 6;
	-webkit-box-orient: vertical;
	overflow: hidden;
}

.we-sg__read-more {
	margin-top: 0.5rem;
	border: 0;
	background: transparent;
	padding: 0;
	color: #ef2a11;
	font-family: "Nunito Sans", "Segoe UI", sans-serif;
	font-size: 1.55rem;
	font-weight: 800;
	cursor: pointer;
}

.we-sg__author {
	margin-top: 0.6rem;
	color: #0f3a5b;
	font-family: "Nunito Sans", "Segoe UI", sans-serif;
	font-size: 1.9rem;
	font-weight: 800;
}

.we-sg__date {
	color: #8ca1b5;
	font-family: "Nunito Sans", "Segoe UI", sans-serif;
	font-size: 1.3rem;
}

.we-sg__arrow {
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	width: 2.45rem;
	height: 2.45rem;
	border-radius: 999px;
	border: 0;
	background: #133d5a;
	color: #ffffff;
	font-size: 1.5rem;
	line-height: 1;
	display: inline-grid;
	place-items: center;
	cursor: pointer;
	z-index: 2;
}

.we-sg__arrow:disabled {
	opacity: 0.45;
	cursor: not-allowed;
}

.we-sg__arrow--left {
	left: -0.95rem;
}

.we-sg__arrow--right {
	right: -0.95rem;
}

@media (max-width: 1080px) {
	.we-sg__card {
		flex: 0 0 calc((100% - 1rem) / 2);
	}
}

@media (max-width: 760px) {
	.we-sg {
		padding-left: 0.65rem;
		padding-right: 0.65rem;
	}

	.we-sg__card {
		flex: 0 0 100%;
	}

	.we-sg__copy {
		font-size: 1.08rem;
	}

	.we-sg__read-more {
		font-size: 1.05rem;
	}

	.we-sg__author {
		font-size: 1.15rem;
	}

	.we-sg__date {
		font-size: 0.92rem;
	}

	.we-sg__arrow {
		width: 2.2rem;
		height: 2.2rem;
		font-size: 1.25rem;
	}

	.we-sg__arrow--left {
		left: -0.55rem;
	}

	.we-sg__arrow--right {
		right: -0.55rem;
	}
}
</style>
