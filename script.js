/* ===== FAQ PURE HTML & CSS (CHECKBOX HACK) ===== */
.faq-toggle {
    display: none;
}

.faq-answer-wrap {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1), padding 0.35s ease;
    padding: 0 1.5rem;
}

.faq-toggle:checked ~ .faq-answer-wrap {
    max-height: 300px;
    padding: 0 1.5rem 1.25rem 1.5rem;
}

.faq-toggle:checked ~ .faq-question-label .faq-icon {
    transform: rotate(180deg);
}

.faq-icon {
    transition: transform 0.35s ease;
}

.faq-question-label {
    cursor: pointer;
    user-select: none;
}
