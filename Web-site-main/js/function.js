var textarea = document.querySelector('textarea');
textarea.style.height='auto';
// Устанавливаем высоту текстового поля в зависимости от его содержимого
textarea.style.height = textarea.scrollHeight + 'px';

// Обрабатываем изменения содержимого текстового поля
textarea.addEventListener('input', function() {
  textarea.style.height = 'auto'; // Сначала устанавливаем высоту в значение 'auto'
  textarea.style.height = textarea.scrollHeight + 'px'; // Устанавливаем высоту в зависимости от содержимого
});