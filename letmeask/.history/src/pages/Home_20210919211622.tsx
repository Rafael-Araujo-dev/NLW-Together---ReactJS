import illustrationImg from "../assets/images/illustration.svg";

export const Home = () => {
    return (
        <div>
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas"/>
                <strong>
                    Crie salas de Q&amp;A ao-vivo
                </strong>
            </aside>
        </div>
    );
}