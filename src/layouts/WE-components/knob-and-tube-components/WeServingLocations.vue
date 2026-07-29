<template>
	<section class="we-locations">
		<div class="we-locations__inner">
			<h2 class="we-locations__title">Proudly Serving South King County &amp; Pierce County</h2>
			<p class="we-locations__subtitle">
				We are local electricians serving homeowners across South King County and Pierce
				County. If you live in any of these communities, we are ready to help.
			</p>

			<div class="we-locations__grid">
				<article v-for="place in places" :key="place" class="we-locations__pill">
					<span class="we-locations__pin" aria-hidden="true">
						<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Zm0-8.6a3.4 3.4 0 1 0 0-6.8 3.4 3.4 0 0 0 0 6.8Z"
								fill="currentColor"
							/>
						</svg>
					</span>
					<h3 class="we-locations__place">{{ place }}</h3>
				</article>
			</div>

			<div class="we-locations__map-wrap">
				<iframe
					class="we-locations__map"
					title="Washington Electrical service map"
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
					src="https://www.google.com/maps?q=Washington+Electrical,+Fife,+WA&output=embed"
				/>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'WeServingLocations',
	data() {
		return {
			places: [
				'Algona',
				'Auburn',
				'Covington',
				'Des Moines',
				'Enumclaw',
				'Federal Way',
				'Kent',
				'Pacific',
				'Pierce County'
			]
		}
	}
}
</script>

<style scoped>
.we-locations {
	padding: clamp(1.8rem, 4vw, 3.1rem) 0.75rem 1.8rem;
	background: #ffffff;
}

.we-locations__inner {
	width: min(980px, 100%);
	margin: 0 auto;
}

.we-locations__title {
	margin: 0;
	text-align: center;
	color: #0f3a5b;
	font-family: "Archivo Black", "Arial Black", sans-serif;
	font-size: clamp(2rem, 4.3vw, 3.65rem);
	line-height: 1.08;
}

.we-locations__subtitle {
	margin: 0.95rem auto 1.35rem;
	max-width: 53rem;
	text-align: center;
	color: #4f6e8a;
	font-family: "Nunito Sans", "Segoe UI", sans-serif;
	font-size: clamp(1rem, 2vw, 1.7rem);
	line-height: 1.35;
}

.we-locations__grid {
	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	gap: 0.72rem;
}

.we-locations__pill {
	min-height: 3.1rem;
	border-radius: 0.65rem;
	border: 1px solid #d8e1e9;
	background: #f8fbfe;
	display: flex;
	align-items: center;
	gap: 0.6rem;
	padding: 0.58rem 0.85rem;
}

.we-locations__pin {
	width: 1.2rem;
	height: 1.2rem;
	color: #173f5e;
	flex-shrink: 0;
}

.we-locations__pin svg {
	width: 100%;
	height: 100%;
	display: block;
}

.we-locations__place {
	margin: 0;
	color: #0f3a5b;
	font-family: "Nunito Sans", "Segoe UI", sans-serif;
	font-size: clamp(1.05rem, 2.2vw, 1.85rem);
	font-weight: 700;
	line-height: 1.2;
}

.we-locations__map-wrap {
	margin-top: 1.35rem;
	border-radius: 0.85rem;
	overflow: hidden;
	border: 1px solid #d8e1e9;
	box-shadow: 0 14px 28px rgba(15, 58, 91, 0.1);
	background: #f2f6fb;
}

.we-locations__map {
	width: 100%;
	display: block;
	min-height: 22rem;
	border: 0;
}

@media (max-width: 860px) {
	.we-locations__grid {
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}
}

@media (max-width: 620px) {
	.we-locations {
		padding-left: 0.65rem;
		padding-right: 0.65rem;
	}

	.we-locations__grid {
		grid-template-columns: 1fr;
	}

	.we-locations__map {
		min-height: 19rem;
	}
}
</style>
