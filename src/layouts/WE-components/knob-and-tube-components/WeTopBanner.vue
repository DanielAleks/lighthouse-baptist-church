<template>
	<section class="we-top-banner">
		<div class="we-top-banner__inner">
			<div class="we-top-banner__rating-pill" aria-label="Google rating">
				<span class="we-top-banner__stars">★★★★★</span>
				<span class="we-top-banner__rating-text">5.0</span>
				<span class="we-top-banner__reviews">77+ reviews</span>
				<span class="we-top-banner__brand">on Google</span>
			</div>

			<h1 class="we-top-banner__title">
				Make Your Home Safe
				<br>
				With Expert Knob and
				<br>
				Tube Wiring Replacement
			</h1>

			<p class="we-top-banner__copy">
				Trusted knob and tube wiring replacement that makes your older home safe,
				insurable, and ready for modern power, installed by a licensed electrician you can
				count on.
			</p>

			<div class="we-top-banner__actions">
				<a href="tel:+12532345359" class="we-top-banner__btn we-top-banner__btn--primary" aria-label="Call 253 234 5359">
					<svg class="we-top-banner__phone-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
						<path
							d="M4.7 3.2A1.8 1.8 0 0 1 6.5 2h2.1a1.8 1.8 0 0 1 1.76 1.4l.46 2.17a1.8 1.8 0 0 1-.52 1.67L9 8.56a13.1 13.1 0 0 0 6.43 6.43l1.32-1.31a1.8 1.8 0 0 1 1.67-.52l2.17.46A1.8 1.8 0 0 1 22 15.38v2.12a1.8 1.8 0 0 1-1.2 1.7c-1.16.4-2.41.56-3.62.45a17.1 17.1 0 0 1-7.62-2.72 17.1 17.1 0 0 1-4.49-4.49A17.1 17.1 0 0 1 2.35 4.82c-.11-1.21.05-2.46.45-3.62Z"
							fill="currentColor"
						/>
					</svg>
					Call (253) 234-5359
				</a>

				<button type="button" class="we-top-banner__btn we-top-banner__btn--ghost">
					Schedule Now
				</button>
			</div>

			<div class="we-top-banner__image-wrap">
				<img
					class="we-top-banner__image"
					:src="heroImage"
					alt="Electrician replacing knob and tube wiring in a home"
				>

				<div class="we-top-banner__bottom-badge" aria-label="Top rated">
					<span class="we-top-banner__gmark">G</span>
					<div class="we-top-banner__badge-content">
						<span class="we-top-banner__badge-stars">★★★★★</span>
						<span class="we-top-banner__badge-text">5.0 Top Rated</span>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import heroImage from 'src/assets/images/washington-electrical/we-top-banner.png'

export default {
	name: 'WeTopBanner',
	data() {
		return {
			heroImage
		}
	}
}
</script>

<style scoped>
.we-top-banner {
	background: #133d5a;
	padding: 1.2rem 0.75rem 1.1rem;
}

.we-top-banner__inner {
	width: min(720px, 100%);
	margin: 0 auto;
}

.we-top-banner__rating-pill {
	display: inline-flex;
	align-items: center;
	gap: 0.45rem;
	padding: 0.42rem 0.75rem;
	border-radius: 999px;
	background: #2c5572;
	color: #ffffff;
	font-family: "Nunito Sans", "Segoe UI", sans-serif;
	font-weight: 700;
	font-size: 0.78rem;
}

.we-top-banner__stars {
	color: #ffd54f;
	letter-spacing: 0.02em;
	font-size: 0.8rem;
}

.we-top-banner__reviews {
	opacity: 0.9;
}

.we-top-banner__title {
	margin: 1.2rem 0 0;
	color: #ffffff;
	font-family: "Archivo Black", "Arial Black", sans-serif;
	font-size: clamp(2.4rem, 6.4vw, 4.35rem);
	line-height: 1.02;
	letter-spacing: 0.005em;
}

.we-top-banner__copy {
	margin: 1.25rem 0 0;
	max-width: 39rem;
	color: #dce8f3;
	font-family: "Nunito Sans", "Segoe UI", sans-serif;
	font-size: clamp(1.1rem, 2.8vw, 2rem);
	line-height: 1.33;
}

.we-top-banner__actions {
	display: flex;
	flex-wrap: wrap;
	gap: 0.9rem;
	margin-top: 1.45rem;
}

.we-top-banner__btn {
	border-radius: 999px;
	height: 3.1rem;
	padding: 0 1.5rem;
	font-family: "Nunito Sans", "Segoe UI", sans-serif;
	font-size: 1.8rem;
	font-weight: 800;
	text-decoration: none;
	border: 0;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: 0.55rem;
	cursor: pointer;
}

.we-top-banner__btn--primary {
	color: #ffffff;
	background: linear-gradient(90deg, #f01b05 0%, #e90f00 100%);
	box-shadow: 0 10px 24px rgba(233, 15, 0, 0.35);
}

.we-top-banner__btn--ghost {
	color: #ffffff;
	background: transparent;
	border: 2px solid rgba(255, 255, 255, 0.5);
}

.we-top-banner__phone-icon {
	width: 1.15rem;
	height: 1.15rem;
}

.we-top-banner__image-wrap {
	margin-top: 1.35rem;
	position: relative;
	border-radius: 1.2rem;
	overflow: hidden;
}

.we-top-banner__image {
	display: block;
	width: 100%;
	height: auto;
}

.we-top-banner__bottom-badge {
	position: absolute;
	left: 1rem;
	bottom: 0.85rem;
	display: inline-flex;
	align-items: center;
	gap: 0.55rem;
	background: #ffffff;
	border-radius: 0.75rem;
	padding: 0.42rem 0.6rem;
	box-shadow: 0 10px 20px rgba(8, 30, 47, 0.25);
}

.we-top-banner__gmark {
	width: 1.6rem;
	height: 1.6rem;
	border-radius: 50%;
	display: inline-grid;
	place-items: center;
	font-size: 1.12rem;
	font-weight: 800;
	color: #4285f4;
	background: #f4f9ff;
	font-family: "Nunito Sans", "Segoe UI", sans-serif;
}

.we-top-banner__badge-content {
	display: flex;
	flex-direction: column;
	line-height: 1;
}

.we-top-banner__badge-stars {
	color: #ffc532;
	font-size: 0.85rem;
	letter-spacing: 0.02em;
}

.we-top-banner__badge-text {
	margin-top: 0.15rem;
	color: #304f68;
	font-family: "Nunito Sans", "Segoe UI", sans-serif;
	font-size: 0.86rem;
	font-weight: 800;
}

@media (max-width: 860px) {
	.we-top-banner__btn {
		font-size: 1.3rem;
		height: 2.85rem;
	}
}

@media (max-width: 640px) {
	.we-top-banner {
		padding: 0.95rem 0.65rem 1.15rem;
	}

	.we-top-banner__title {
		margin-top: 1rem;
	}

	.we-top-banner__copy {
		margin-top: 1rem;
	}

	.we-top-banner__btn {
		font-size: 1rem;
		height: 2.4rem;
		padding: 0 1rem;
	}

	.we-top-banner__bottom-badge {
		left: 0.7rem;
		bottom: 0.7rem;
		padding: 0.34rem 0.48rem;
	}

	.we-top-banner__badge-stars {
		font-size: 0.75rem;
	}

	.we-top-banner__badge-text {
		font-size: 0.72rem;
	}
}
</style>
