<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style/connect/connect.css">
    <title>Form</title>
</head>
<body>
    <div class="wrapper">
        <div class="modal">
            <article class="modal__alert">
                <form action="" method="post" enctype="multipart/form-data" class="form">
                    <div class="form__name">
                        <input type="text" name="name" placeholder="Ваше имя">
                    </div>
                    <div class="form__tel">
                        <input type="tel" name="phone" placeholder="Ваш номер телефона">
                    </div>
                    <div class="buttons">
                        <div class="buttons__send">
                            <input type="submit" value="Отправить" name="send">
                        </div>
                        <div class="buttons__save">
                            <input type="submit" value="Сохранить и закрыть">
                        </div>
                        <div class="buttons__close">
                            <input type="submit" value="Очистить и закрыть">
                        </div>
                    </div> 
                </form>
            </article>
        </div>
        <header>
            <div class="header__button">
                <input type="submit" value="Открыть модальное окно">
            </div>
            <span class="message"></span>
        </header>
        <main>

        </main>
        <footer>
            <h1>FOOTER</h1>
        </footer>
    </div>
    <script src="js/openModal.js"></script>
</body>
</html>