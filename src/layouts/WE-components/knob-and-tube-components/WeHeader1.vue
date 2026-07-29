<template>
    <header class="we-header">
        <div class="we-header__brand">
            <div class="we-header__logo" aria-hidden="true">WE</div>
            <span class="we-header__title">Washington Electrical</span>
        </div>

        <button type="button" class="we-header__call" aria-label="Call now">
            <svg
                class="we-header__call-icon"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
            >
                <path
                    d="M4.7 3.2A1.8 1.8 0 0 1 6.5 2h2.1a1.8 1.8 0 0 1 1.76 1.4l.46 2.17a1.8 1.8 0 0 1-.52 1.67L9 8.56a13.1 13.1 0 0 0 6.43 6.43l1.32-1.31a1.8 1.8 0 0 1 1.67-.52l2.17.46A1.8 1.8 0 0 1 22 15.38v2.12a1.8 1.8 0 0 1-1.2 1.7c-1.16.4-2.41.56-3.62.45a17.1 17.1 0 0 1-7.62-2.72 17.1 17.1 0 0 1-4.49-4.49A17.1 17.1 0 0 1 2.35 4.82c-.11-1.21.05-2.46.45-3.62Z"
                    fill="currentColor"
                />
            </svg>
            <span>Call Now</span>
        </button>
    </header>

</template>

<style scoped>
.we-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 0.875rem 1rem;
    background: #ffffff;
    border-bottom: 1px solid #e5e7eb;
}

.we-header__brand {
    display: flex;
    align-items: center;
    gap: 0.625rem;
    min-width: 0;
}

.we-header__logo {
    display: grid;
    place-items: center;
    width: 2.25rem;
    height: 2.25rem;
    border-radius: 9999px;
    background: #0f172a;
    color: #ffffff;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.04em;
    flex-shrink: 0;
}

.we-header__title {
    color: #0f172a;
    font-size: 1rem;
    font-weight: 700;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.we-header__call {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    padding: 0.5rem 0.9rem;
    border: 0;
    border-radius: 9999px;
    background: #16a34a;
    color: #ffffff;
    font-size: 0.9rem;
    font-weight: 700;
    line-height: 1;
    cursor: pointer;
    white-space: nowrap;
}

.we-header__call-icon {
    width: 1rem;
    height: 1rem;
}

@media (max-width: 480px) {
    .we-header {
        padding: 0.75rem;
    }

    .we-header__title {
        font-size: 0.92rem;
    }

    .we-header__call {
        padding: 0.45rem 0.8rem;
        font-size: 0.82rem;
    }
}
</style>