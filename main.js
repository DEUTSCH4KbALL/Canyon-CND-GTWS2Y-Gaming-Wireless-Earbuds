// Получаем все элементы с классом 'background'
var backgrounds = document.querySelectorAll('.background');
// Получаем слайдер и изображения
const slider = document.querySelector('.slider-images');
const images = Array.from(slider.children);

// Устанавливаем начальный индекс изображения
let imageIndex = 0;

// Обновляем слайдер
function updateSlider() {
    // Удаляем классы 'active', 'previous', 'next' и 'inactive' у всех изображений
    images.forEach(image => {
        image.classList.remove('active', 'previous', 'next', 'inactive');
    });

    // Добавляем класс 'active' к текущему изображению
    images[imageIndex].classList.add('active');

    // Добавляем класс 'previous' к изображению перед текущим
    if (imageIndex - 1 >= 0) {
        images[imageIndex - 1].classList.add('previous');
    } else {
        images[images.length - 1].classList.add('previous');
    }

    // Добавляем класс 'next' к изображению после текущего
    if (imageIndex + 1 < images.length) {
        images[imageIndex + 1].classList.add('next');
    } else {
        images[0].classList.add('next');
    }

    // Добавляем класс 'inactive' к остальным изображениям
    images.forEach((image, index) => {
        if (index !== imageIndex && index !== (imageIndex - 1 + images.length) % images.length && index !== (imageIndex + 1) % images.length) {
            image.classList.add('inactive');
        }
    });

    // Устанавливаем непрозрачность всех элементов с классом 'background' в 0
    backgrounds.forEach((background) => {
        background.style.opacity = 0;
    });

    // Если текущее изображение активно, устанавливаем непрозрачность соответствующего элемента 'background' в 1
    if (images[imageIndex].classList.contains('active')) {
        backgrounds[imageIndex].style.opacity = 1;
    }

    // Обновляем индекс изображения
    imageIndex = (imageIndex + 1) % images.length;
}

// Обновляем слайдер при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    updateSlider();
    // Обновляем слайдер каждые 3 секунды
    setInterval(updateSlider, 3000);
});

// Инициализация классов для изображений
if (images.length > 0) {
    images[0].classList.add('active');
    if (images.length > 1) {
        images[1].classList.add('next');
    }
    if (images.length > 2) {
        images[2].classList.add('inactive');
    }
    if (images.length > 3) {
        images[3].classList.add('inactive');
    }
    if (images.length > 4) {
        images[4].classList.add('previous');
    }
}