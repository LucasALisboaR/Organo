import './Footer.css';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='itens'>
                <div className='social-media'>
                    <img className='icons-social' alt='name' src='/imagens/fb.png'></img>
                    <img className='icons-social' alt='name' src='/imagens/tw.png'></img>
                    <img className='icons-social' alt='name' src='/imagens/ig.png'></img>
                </div>
                <div className='app-logo'>
                    <img className='icons-social' alt='name' src='/imagens/logo.png'></img>
                </div>
                <div className='product-by'>
                    <p>Desenvolvido por Alura.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;