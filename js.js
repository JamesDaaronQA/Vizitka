<script>
    const notifyBtn = document.getElementById('notifyBtn');
    const notification = document.getElementById('notification');
    const closeBtn = document.getElementById('closeBtn');

    // Показываем уведомление
    notifyBtn.addEventListener('click', () => {
      notification.style.display = 'block';
    });

    // Скрываем уведомление
    closeBtn.addEventListener('click', () => {
      notification.style.display = 'none';
    });
  </script>