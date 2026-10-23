/* ===== FAQ ACCORDION SCRIPT ===== */
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const item = question.parentElement;
        const isActive = item.classList.contains('active');
        
        // Đóng tất cả các mục khác (nếu muốn mở độc lập từng cái thì bỏ đoạn foreach này)
        document.querySelectorAll('.faq-item').forEach(el => {
            el.classList.remove('active');
        });
        
        // Nếu mục đang bấm chưa mở thì mở nó ra
        if (!isActive) {
            item.classList.add('active');
        }
    });
});
