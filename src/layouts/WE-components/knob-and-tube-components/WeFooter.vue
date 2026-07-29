<template>
	<footer class="we-footer">
		<div class="we-footer__inner">
			<div class="we-footer__top">
				<div class="we-footer__brand" aria-label="Washington Electrical">
					<svg class="we-footer__logo" viewBox="0 0 136 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
						<path d="M4 48 44 8l25 24 15-15 48 31H4Z" fill="#f3f7fb" />
						<path d="m52 22-12 18h10l-4 13 17-22h-10l6-9Z" fill="#0f2d45" />
					</svg>
					<span class="we-footer__brand-name">Washington Electrical</span>
				</div>

				<div class="we-footer__actions">
					<a href="tel:+12532345359" class="we-footer__btn we-footer__btn--primary" aria-label="Call 253 234 5359">
						<svg class="we-footer__phone-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
							<path
								d="M4.7 3.2A1.8 1.8 0 0 1 6.5 2h2.1a1.8 1.8 0 0 1 1.76 1.4l.46 2.17a1.8 1.8 0 0 1-.52 1.67L9 8.56a13.1 13.1 0 0 0 6.43 6.43l1.32-1.31a1.8 1.8 0 0 1 1.67-.52l2.17.46A1.8 1.8 0 0 1 22 15.38v2.12a1.8 1.8 0 0 1-1.2 1.7c-1.16.4-2.41.56-3.62.45a17.1 17.1 0 0 1-7.62-2.72 17.1 17.1 0 0 1-4.49-4.49A17.1 17.1 0 0 1 2.35 4.82c-.11-1.21.05-2.46.45-3.62Z"
								fill="currentColor"
							/>
						</svg>
						(253) 234-5359
					</a>

					<button type="button" class="we-footer__btn we-footer__btn--ghost">Schedule Now</button>
				</div>
			</div>

			<hr class="we-footer__divider">

			<div class="we-footer__bottom">
				<p class="we-footer__legal">Licensed, Bonded &amp; Insured. WA Lic. WASHIEL776C3</p>
				<p class="we-footer__legal">&copy; 2026 Washington Electrical. All rights reserved.</p>
			</div>
		</div>
	</footer>
</template>

<script>
export default {
	name: 'WeFooter'
}
</script>

<style scoped>
.we-footer {
	background: #0f314a;
	padding: 1rem 0.7rem 0.9rem;
}

.we-footer__inner {
	width: min(980px, 100%);
	margin: 0 auto;
}

.we-footer__top {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 0.9rem;
	flex-wrap: wrap;
}

.we-footer__brand {
	display: inline-flex;
	align-items: center;
	gap: 0.55rem;
	min-width: 0;
}

.we-footer__logo {
	width: 6.1rem;
	height: 2.5rem;
	flex-shrink: 0;
}

.we-footer__brand-name {
	color: #ffffff;
	font-family: "Archivo Black", "Arial Black", sans-serif;
	font-size: clamp(1.1rem, 2.4vw, 2rem);
	line-height: 1.1;
	white-space: nowrap;
}

.we-footer__actions {
	display: flex;
	align-items: center;
	gap: 0.62rem;
	flex-wrap: wrap;
}

.we-footer__btn {
	min-height: 2.75rem;
	border-radius: 999px;
	border: 0;
	padding: 0.55rem 1.1rem;
	font-family: "Nunito Sans", "Segoe UI", sans-serif;
	font-size: clamp(1rem, 1.9vw, 1.35rem);
	font-weight: 800;
	text-decoration: none;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: 0.42rem;
	cursor: pointer;
}

.we-footer__btn--primary {
	color: #ffffff;
	background: linear-gradient(90deg, #f01b05 0%, #e40f00 100%);
}

.we-footer__btn--ghost {
	color: #ffffff;
	background: transparent;
	border: 1.5px solid rgba(255, 255, 255, 0.55);
}

.we-footer__phone-icon {
	width: 1rem;
	height: 1rem;
}

.we-footer__divider {
	margin: 0.9rem 0 0.8rem;
	border: 0;
	border-top: 1px solid rgba(202, 220, 236, 0.2);
}

.we-footer__bottom {
	display: flex;
	justify-content: space-between;
	gap: 0.8rem;
	flex-wrap: wrap;
}

.we-footer__legal {
	margin: 0;
	color: #d6e4f0;
	font-family: "Nunito Sans", "Segoe UI", sans-serif;
	font-size: clamp(0.88rem, 1.7vw, 1.2rem);
	line-height: 1.3;
}

@media (max-width: 760px) {
	.we-footer {
		padding-left: 0.6rem;
		padding-right: 0.6rem;
	}

	.we-footer__top {
		justify-content: center;
	}

	.we-footer__brand {
		width: 100%;
		justify-content: center;
	}

	.we-footer__actions {
		width: 100%;
		justify-content: center;
	}

	.we-footer__bottom {
		justify-content: center;
		text-align: center;
	}
}
</style>
