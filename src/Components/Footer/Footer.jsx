import './Footer.scss';

function Footer() {
return (
<footer className='footer'>
    <div className="container">
        <div className="footer-top">
            <ul>
                <li>
                    <a href="/">О нас</a>
                </li>
                <li>
                    <a href="/">Контакты</a>
                </li>
                <li>
                    <a href="/">Пользовательское соглашение</a>
                </li>
            </ul>
        </div>
        <div className="footer-bottom">
            <div className="footer-bottom-left">
                <h1 className='footer-bottom-left-title'>Служба поддержки: +998 71 200 40 01</h1>
            </div>
            <div className="footer-bottom-right">
                <ul>
                    <li>
                        <a href="/"><img
                                src="https://img.icons8.com/material-outlined/100/null/instagram-new--v1.png" /></a>
                    </li>
                    <li>
                        <a href="/"><img src="https://img.icons8.com/material-outlined/100/null/facebook-f.png" /></a>
                    </li>
                    <li>
                        <a href="/"><img src="https://img.icons8.com/ios-filled/100/null/telegram-app.png" /></a>
                    </li>
                    <h1 className="footer-bottom-right-title">Ⓒ 2023 Express24</h1>
                </ul>
            </div>
        </div>
    </div>
</footer>
);
}

export default Footer;