const tg = window.Telegram.WebApp;

// Инициализация
tg.expand(); // Разворачиваем WebApp на весь экран

// Отображаем данные пользователя
const user = tg.initDataUnsafe.user;
const userDataDiv = document.getElementById("user-data");

if (user) {
    userDataDiv.innerHTML = `
        <p>👤 <b>${user.first_name || "Неизвестно"}</b></p>
        <p>🆔 ID: ${user.id}</p>
        ${user.username ? `<p>🔗 @${user.username}</p>` : ""}
    `;
} else {
    userDataDiv.innerHTML = "<p>Пользователь не авторизован.</p>";
}

// Отправка данных в бота
document.getElementById("btn-send").addEventListener("click", () => {
    const data = {
        action: "button_clicked",
        user_id: user?.id,
        time: new Date().toISOString(),
    };
    tg.sendData(JSON.stringify(data));
    tg.close();
});