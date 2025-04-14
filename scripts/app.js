document.addEventListener('DOMContentLoaded', () => {
    // 1. Случайные советы при наведении на имя
    const tips = [
        "Творчество мое всё",
        "Работаю с React и Node.js",
        "Люблю UI/UX дизайн",
        "Изучаю TypeScript",
        "Студент НГТУ"
    ];
    
    const nameTitle = document.querySelector('h1');
    
    nameTitle.addEventListener('mouseenter', () => {
        // Удаляем старый тултип (если есть)
        const oldTooltip = document.querySelector('.custom-tooltip');
        if (oldTooltip) oldTooltip.remove();
        
        // Создаем новый тултип
        const tooltip = document.createElement('div');
        tooltip.className = 'custom-tooltip';
        tooltip.textContent = tips[Math.floor(Math.random() * tips.length)];
        
        // Позиционируем относительно заголовка
        const rect = nameTitle.getBoundingClientRect();
        tooltip.style.left = `${rect.left + rect.width/2}px`;
        tooltip.style.top = `${rect.top - 40}px`;
        
        document.body.appendChild(tooltip);
    });
    
    nameTitle.addEventListener('mouseleave', () => {
        const tooltip = document.querySelector('.custom-tooltip');
        if (tooltip) tooltip.remove();
    });

    // 2. Таймер "Опыт работы"
    const experienceTimer = document.createElement('div');
    experienceTimer.className = 'experience-timer';
    document.querySelector('.about').append(experienceTimer);

    function updateExperience() {
        const startDate = new Date(2023, 12, 4); 
        const months = Math.floor((new Date() - startDate) / (1000 * 60 * 60 * 24 * 30));
        experienceTimer.innerHTML = `Опыт в разработке: ${months} месяцев`;
    }
    updateExperience();
    setInterval(updateExperience, 1000 * 60 * 60 * 24); // Обновлять ежедневно

    // 3. Для телеги
   
document.getElementById('tg-link').addEventListener('click', function(e) {
    // Пытаемся открыть в приложении (работает если установлено)
    window.open('tg://resolve?domain=OlivkaRS', '_blank');
    
    // Открываем в веб-версии как fallback
    window.open('https://t.me/OlivkaRS', '_blank');
    
    e.preventDefault(); // Отменяем стандартное поведение
});
});


  